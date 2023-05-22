// import { createClient } from '@supabase/supabase-js'

// const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnlteW51aHZ0dnhoaHV4ZW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MDQ5NjQsImV4cCI6MTk5OTM4MDk2NH0.glQRUBx4EcVkh96LnCrxcoP0OnmSAqhk3c9cswgMG5U";
// const url = "https://oxvymynuhvtvxhhuxeoi.supabase.co";

// const client = createClient(url, key);
// console.log(client);

// export { client as supabase };

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnlteW51aHZ0dnhoaHV4ZW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MDQ5NjQsImV4cCI6MTk5OTM4MDk2NH0.glQRUBx4EcVkh96LnCrxcoP0OnmSAqhk3c9cswgMG5U";
const url = "https://oxvymynuhvtvxhhuxeoi.supabase.co";

const supabase = createClient(url, key);
console.log(supabase);

export { supabase as supabase };