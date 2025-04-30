import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iorulmytlagfwkduecft.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvcnVsbXl0bGFnZndrZHVlY2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NzQxMjksImV4cCI6MjA1ODM1MDEyOX0.4ffXw8lGI6fJEGqxmLXopGY7_XxRFhZI-OwEB_CZCtU';
export const supabase = createClient(supabaseUrl, supabaseKey);