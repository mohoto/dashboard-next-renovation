
import { supabaseClient } from '@/utils/supabase/client'
import { EventsData } from '@/types/EventCalendarTypes'

function capitalizeFirstLetter(mot: string) {
  return mot.charAt(0).toUpperCase() + mot.slice(1);
}

type Props = {}

const RendezVous = async ({}: Props) => {


    const {data, error} = await supabaseClient
    .from('planning')
    .select('*')

    console.log("rendez-vous:", data)
    console.log("error:", error)


  return (
    <div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
              <div className="py-3 px-4">
                <div className="relative max-w-xs">
                  <label htmlFor="hs-table-search" className="sr-only">Rechercher</label>
                  <input type="text" name="hs-table-search" id="hs-table-search" className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search for items" />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                    <svg className="size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-700">
                    <tr>
                      <th scope="col" className="py-3 px-4 pe-0">
                        <div className="flex items-center h-5">
                          <input id="hs-table-search-checkbox-all" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                          <label htmlFor="hs-table-search-checkbox-all" className="sr-only">Checkbox</label>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Nom</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Prenom</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Telephone</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Adresse</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Ville</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Code postal</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Date installation</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Heure installation</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Mode chauffage</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Type radiateur</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Nbr radiateurs</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Statut client</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Type habitation</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Statut</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Surface</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Commercial</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Technicien</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Commentaires</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {data?.map(rdv => (
                      <tr>
                        <td className="py-3 ps-4">
                          <div className="flex items-center h-5">
                            <input id="hs-table-search-checkbox-1" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                            <label htmlFor="hs-table-search-checkbox-1" className="sr-only">Checkbox</label>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.nom?.toUpperCase()}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.prenom?.toUpperCase()}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.tel}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.adresse?.toUpperCase()}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.ville?.toUpperCase()}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.code_postal}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.date_installation}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.heure_installation}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.type_chauffage?.toUpperCase()}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {rdv.type_chauffage === "Gaz" ? "Hydro" : "Électrique"}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.nombre_radiateur}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.statut_client?.toUpperCase()}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.type_habitation?.toUpperCase()}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.statut?.toUpperCase()}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.surface_habitable}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.commercial?.toUpperCase()}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.technicien?.toUpperCase()}</td>
                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{rdv.commentaires?.toUpperCase()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                          <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
                        </td>
                      </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RendezVous 