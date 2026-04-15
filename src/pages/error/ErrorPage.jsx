import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-[calc(100vh-96px)] flex items-center justify-center bg-slate-50 px-6 py-12 text-slate-900">
            <div className="max-w-xl rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
                <p className="text-6xl font-bold tracking-tight uppercase  text-red-700 text-center">404 <span>error</span></p>
                <h1 className="flex justify-center mt-6 text-5xl font-bold tracking-tight">Page not found</h1>
                <p className="mt-4 text-slate-600">
                    The page you are looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="flex justify-center mt-8 rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
