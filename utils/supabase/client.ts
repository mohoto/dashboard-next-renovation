
import {createClient} from '@supabase/supabase-js'

const URL: string | null | undefined = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const ANON: string | null | undefined = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabaseClient = createClient(URL!, ANON!, {
    auth: {persistSession: false},
});
