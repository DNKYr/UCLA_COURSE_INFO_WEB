import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import { Layout } from './components/Layout'
import { CourseCard } from './components/CourseCard'
import { SearchBar } from './components/SearchBar'
import { Loader2 } from 'lucide-react'

function App() {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [debouncedQuery, setDebouncedQuery] = useState('')

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery)
        }, 500)
        return () => clearTimeout(timer)
    }, [searchQuery])

    useEffect(() => {
        async function fetchCourses() {
            setLoading(true)
            try {
                let query = supabase
                    .from('Course Info')
                    .select('*')
                    .limit(50)

                if (debouncedQuery) {
                    query = query.or(`code.ilike.%${debouncedQuery}%,name.ilike.%${debouncedQuery}%`)
                }

                const { data, error } = await query

                if (error) {
                    console.error('Error fetching courses:', error)
                } else {
                    setCourses(data || [])
                }
            } catch (err) {
                console.error('Unexpected error:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchCourses()
    }, [debouncedQuery])

    return (
        <Layout>
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Explore UCLA Courses
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                    Discover your next class. Search through thousands of courses, check prerequisites, and plan your academic journey.
                </p>
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                    {courses.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-slate-500 text-lg">No courses found matching your search.</p>
                        </div>
                    )}
                </>
            )}
        </Layout>
    )
}

export default App
