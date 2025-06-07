import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5Z3J4Znl1cGZzdmxub2N1Ym92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMzA3MDUsImV4cCI6MjA2NDYwNjcwNX0.qVXUZoCyLvNn-jvOfIG0EkOhIcAVLYa_iBxq6gV1MBM';
const url = 'https://bygrxfyupfsvlnocubov.supabase.co';

const supabase = createClient(url, key);

export { supabase as supabase };
