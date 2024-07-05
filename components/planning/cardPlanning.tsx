import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Client = {
  id: number;
  nom: string;
  prenom: string;
  tel: string;
  codePostal: string;
  date_installation: string;
  heure_installation: string;
  adresse: string;

};

type Props = {
  client: Client[]
}

function CardPlanning({client}: Props ) {
  console.log(client)
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="flex justify-between text-lg">
        <span>{client.date_installation}</span>
          <span>{client.code_postal}</span>
        </CardTitle>
        <CardDescription className="text-lg">{client.heure_installation}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="font-semibold">{client.nom.toUpperCase()} {client.prenom.toUpperCase()}</li>
          <li>{client.adresse.toUpperCase()}</li>
          <li>{client.code_postal} {client.ville.toUpperCase()}</li>
          <li>{client.nom} {client.prenom}</li>
        </ul>
      </CardContent>
      <CardFooter>
        <button className="bg-blue-600 text-white px-2 py-1">Editer</button>
      </CardFooter>
    </Card>
  )
}

export default CardPlanning