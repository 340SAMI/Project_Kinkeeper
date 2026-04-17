import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const isHomeActive = location.pathname === '/' || location.pathname.startsWith('/FriendDetail');

    return (
        <>
            <div className="navbar bg-white px-4 py-3 shadow-sm lg:px-20">
                <div className="flex-1">
                    <Link to="/" className="text-xl font-semibold text-slate-900">
                        <span className="font-bold">Keen</span>Keeper
                    </Link>
                </div>

                <div className="flex-none lg:hidden">
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="btn btn-square btn-ghost"
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex flex-none items-center gap-3">
                    <NavLink
                        to="/"
                        className={() =>
                            isHomeActive
                                ? 'btn btn-sm bg-emerald-700 text-white border-0 hover:bg-emerald-800'
                                : 'btn btn-ghost btn-sm text-slate-700 hover:text-slate-900'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/timeline"
                        className={({ isActive }) =>
                            isActive
                                ? 'btn btn-sm bg-emerald-700 text-white border-0 hover:bg-emerald-800'
                                : 'btn btn-ghost btn-sm text-slate-700 hover:text-slate-900'
                        }
                    >
                        Timeline
                    </NavLink>
                    <NavLink
                        to="/stats"
                        className={({ isActive }) =>
                            isActive
                                ? 'btn btn-sm bg-emerald-700 text-white border-0 hover:bg-emerald-800'
                                : 'btn btn-ghost btn-sm text-slate-700 hover:text-slate-900'
                        }
                    >
                        Stats
                    </NavLink>
                </div>
            </div>

            {open && (
                <div className="lg:hidden bg-white shadow-sm border-t border-slate-200">
                    <nav className="flex flex-col gap-2 px-4 py-4">
                        <NavLink
                            to="/"
                            onClick={() => setOpen(false)}
                             className={() =>
                                isHomeActive
                                    ? 'btn btn-sm bg-emerald-700 text-white border-0 hover:bg-emerald-800 w-full text-left'
                                    : 'btn btn-ghost btn-sm text-slate-700 hover:text-slate-900 w-full text-left'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/timeline"
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? 'btn btn-sm bg-emerald-700 text-white border-0 hover:bg-emerald-800 w-full text-left'
                                    : 'btn btn-ghost btn-sm text-slate-700 hover:text-slate-900 w-full text-left'
                            }
                        >
                            Timeline
                        </NavLink>
                        <NavLink
                            to="/stats"
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? 'btn btn-sm bg-emerald-700 text-white border-0 hover:bg-emerald-800 w-full text-left'
                                    : 'btn btn-ghost btn-sm text-slate-700 hover:text-slate-900 w-full text-left'
                            }
                        >
                            Stats
                        </NavLink>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;