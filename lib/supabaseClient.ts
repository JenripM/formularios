// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

//const supabaseUrl = 'https://mhiqizninpbfeixpakbm.supabase.co'
//const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oaXFpem5pbnBiZmVpeHBha2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMjMxMDAsImV4cCI6MjA2NDc5OTEwMH0.wIn78UvM31tZGue2niuGHLl5WYaooJPIbp1Qu8jgpmo'


const supabaseUrl = 'https://upfgpsvidjcdnnpyyhoh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZmdwc3ZpZGpjZG5ucHl5aG9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzE0MjcsImV4cCI6MjA2NjkwNzQyN30.m-GvmEVT10JmoUUqo2e3OqzImncZM9TPHwVVSBTMsMw'


export const supabase = createClient(supabaseUrl, supabaseAnonKey)
