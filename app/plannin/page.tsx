import React from 'react'
import {supabaseClient} from '@/utils/supabase/client'

type Intervention = {
  id: number;
  nom: string;
  prenom: string;
  tel: string;
  codePostal: string;
};

export default async function Planning() {
  /* const { data, error } = await supabase
    .from<Intervention>('test')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return <div>Error fetching data</div>;
  } */

  //console.log('data :', data)

  return (
    <div>
      {/* <ul>
        {data?.map((client) => (
          <div className="flex flex-col gap-y-4">
            <CardPlanning key={client.id} client={client}/>
          </div>
        ))}
      </ul> */}
    </div>
  );
}