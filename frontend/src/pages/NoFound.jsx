import React from 'react'

export default function NoFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
    <p className="text-lg text-gray-700 mt-2">Something went wrong.</p>
    {error && <p className="text-sm text-gray-500 mt-1">Error: {error.statusText || error.message}</p>}
    <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Go Home</a>
  </div>
  )
}
