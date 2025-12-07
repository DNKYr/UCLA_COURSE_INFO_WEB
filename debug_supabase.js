import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load env vars manually since we're running with node
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

console.log('URL:', supabaseUrl)
console.log('Key length:', supabaseAnonKey ? supabaseAnonKey.length : 0)

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testFetch() {
    console.log('Attempting to fetch from "Course Info"...')

    // Test 1: Simple fetch
    const { data, error } = await supabase
        .from('Course Info')
        .select('*')
        .limit(5)

    if (error) {
        console.error('Error fetching:', error)
    } else {
        console.log('Success! Found', data.length, 'records')
        if (data.length > 0) {
            console.log('Sample record:', data[0])
        }
    }

    // Test 2: Search query
    console.log('\nTesting search query...')
    const searchQuery = 'CS'
    const { data: searchData, error: searchError } = await supabase
        .from('Course Info')
        .select('*')
        .or(`code.ilike.%${searchQuery}%,name.ilike.%${searchQuery}%`)
        .limit(5)

    if (searchError) {
        console.error('Search error:', searchError)
    } else {
        console.log('Search found', searchData.length, 'records')
    }
}

testFetch()
