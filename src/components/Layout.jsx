import React from 'react'
import { GraduationCap } from 'lucide-react'

export function Layout({ children }) {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />

            <nav className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            UCLA Courses
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Browse</a>
                        <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">About</a>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {children}
            </main>

            <footer className="border-t border-slate-800/50 mt-20 py-8 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} UCLA Course Info. Built with React & Supabase.</p>
            </footer>
        </div>
    )
}
