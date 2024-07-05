"use client"
import {useState} from 'react'
import moment from 'moment';
import { Moment } from 'moment';
import Datepicker from "tailwind-datepicker-react"
import DatePicker1 from '@/components/calendar/datePicker1'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
    heureInstalation: z.string().min(2),
    nom: z.string().min(2),
    prenom: z.string().min(2),
    tel: z.string().min(2),
    email: z.string().min(2),
    adresse: z.string().min(2),
    ville: z.string().min(2),
    codePostal: z.string().min(2),
    statutClient: z.string().min(2),
    typeHabitation: z.string().min(2),
    surface: z.string().min(2),
    typeChauffage: z.string().min(2),
    nbrRadiateurs: z.string(),
    commentaires: z.string(),
    //statut: z.string().min(2),
    /* dateInstallation : z.string().min(2),
    rappelTelephone: z.string().min(2), */


  })

// Fonction pour générer les heures et demi-heures
const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 8; hour < 21; hour++) {
        const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
        timeSlots.push(`${formattedHour}:00`);
        timeSlots.push(`${formattedHour}:30`);
    }
    return timeSlots;
};


type Props = {
    setIShowDialogue: (value: boolean) => void;
    currentDate: Date;
}

function ModalEvent({setIShowDialogue, currentDate}: Props) {

    const [dateSelected, setDateSelected] = useState(new Date(currentDate))
    console.log("dateSelected:",dateSelected)
   /* console.log("Type of dateSelected:",typeof(dateSelected)) */

    /* console.log("new Date", new Date("2024-08-01"))
    console.log("planifiedDate", planifiedDate._d)
    console.log(planifiedDate)
    console.log(planifiedDate.format('DD-MM-YYYY')) */

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            heureInstalation: "",
            nom: "",
            prenom: "",
            tel: "",
            email: "",
            adresse: "",
            ville: "",
            codePostal: "",
            statutClient: "",
            typeHabitation: "",
            surface: "",
            typeChauffage: "",
            nbrRadiateurs: "",
            commentaires: "",
            //statut: "",
            //dateInstallation : day.format('YYYY-MM-DD'),
            /*rappelTelephone: "",  */
        },
      })

      const timeSlots = generateTimeSlots();


      const onSubmit = (values: z.infer<typeof FormSchema>) => {
        console.log(values)
      }


  return (
    <div className="overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/70 flex justify-center pt-20">
        <div className="relative p-4 w-full max-w-lg max-h-full">
           
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                
                <div className="flex items-center justify-between border-b rounded-t dark:border-gray-600 p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Ajouter un rendez-vous
                    </h3>
                    <button 
                    type="button" 
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                    onClick={() => setIShowDialogue(false)}
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
                        <div className="flex flex-col gap-y-4 overflow-y-scroll h-96 p-4 lg:px-6">
                            <div className="grid grid-cols-2 gap-x-4 justify-center">
                                <div>
                                    <DatePicker1 currentDate={currentDate} setDateSelected={setDateSelected}/>
                                </div>
                                <div>
                                    <FormField
                                    control={form.control}
                                    name="heureInstalation"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Heure" />
                                                </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {timeSlots?.map((value, index) => (
                                                        <SelectItem key={index} value={value}>{value}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                    />
                                </div>
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="nom"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-muted-foreground">Nom</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="prenom"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-muted-foreground">Prenom</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="tel"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-muted-foreground">Telephone</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-muted-foreground">Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div className="col-span-2">
                                <FormField
                                control={form.control}
                                name="adresse"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-muted-foreground">Adresse</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="ville"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-muted-foreground">Ville</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="codePostal"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-muted-foreground">Code postal</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="statutClient"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormLabel className="text-muted-foreground">Statut du client</FormLabel>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Propriétaire">Propriétaire</SelectItem>
                                                <SelectItem value="Locataire">Locataire</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="typeHabitation"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormLabel className="text-muted-foreground">Type d'habitation</FormLabel>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Maison">Maison</SelectItem>
                                                <SelectItem value="Appartement">Appartement</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="typeChauffage"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormLabel className="text-muted-foreground">Mode de chauffage</FormLabel>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Gaz">Gaz</SelectItem>
                                                <SelectItem value="Fioul">Fioul</SelectItem>
                                                <SelectItem value="PAC Eau">PAC Eau</SelectItem>
                                                <SelectItem value="Électrique">Électrique</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="surface"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-muted-foreground">Surface</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="nbrRadiateurs"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-muted-foreground">Nombre de radiateurs</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div className="col-span-2">
                                <FormField
                                control={form.control}
                                name="commentaires"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-muted-foreground">Commentaires</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            {/* <div>
                                <FormField
                                control={form.control}
                                name="statut"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Statut</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="dateInstallation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date installation</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div>
                                <FormField
                                control={form.control}
                                name="rappelTelephone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Rappel telephone</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div> */}
                        </div>
                        <div className="border-t p-4 lg:px-6">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all ease-out duration-75" type="submit">Enregistrer</button>
                        </div>
                    </form>
                </Form>
              
                {/* <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999"  />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Select category</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                            <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                        </div>
                    </div>
                    <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Add new product
                    </button>
                </form> */}
            </div>
        </div>
    </div> 
  )
}

export default ModalEvent