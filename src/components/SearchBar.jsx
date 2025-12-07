import React from 'react'
import { Search } from 'lucide-react'

export function SearchBar({ value, onChange }) {
    return (
        <div className="relative max-w-2xl mx-auto mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative flex items-center bg-slate-900 border border-slate-700 rounded-full shadow-xl">
                <Search className="w-6 h-6 ml-6 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search courses by code or name..."
                    className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 py-4 px-4 text-lg"
                />
            </div>
        </div>
    )
}
