import React from 'react'
import { BookOpen, Clock, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function CourseCard({ course }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {course.code}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">{course.name}</p>
                </div>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                    {course.units} Units
                </span>
            </div>

            <div className="space-y-3">
                {course.requisites && (
                    <div className="flex items-start gap-2 text-sm text-slate-400">
                        <AlertCircle className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" />
                        <p><span className="text-slate-300 font-medium">Requisites:</span> {course.requisites}</p>
                    </div>
                )}
                {course.corequisites && (
                    <div className="flex items-start gap-2 text-sm text-slate-400">
                        <BookOpen className="w-4 h-4 mt-0.5 text-purple-500 shrink-0" />
                        <p><span className="text-slate-300 font-medium">Corequisites:</span> {course.corequisites}</p>
                    </div>
                )}
            </div>

            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-xl pointer-events-none transition-colors" />
        </motion.div>
    )
}
