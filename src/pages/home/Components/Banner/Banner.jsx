import React from 'react';

const Banner = () => {
    return (
        <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col text-center">
                        <div className="pt-20">
                            <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                            <p className="py-6 text-center" >
                               Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/> 
                               relationships that matter most.
                            </p>
                            <button className="btn  bg-success-content text-white">Add a Friend</button>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-10">
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                                <p className="text-4xl font-bold text-slate-900">10</p>
                                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">Total Friends</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                                <p className="text-4xl font-bold text-slate-900">3</p>
                                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">On Track</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                                <p className="text-4xl font-bold text-slate-900">6</p>
                                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">Need Attention</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                                <p className="text-4xl font-bold text-slate-900">12</p>
                                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">Interactions This Month</p>
                            </div>
                        </div>
                    </div>
                   
                </div>

                 <hr class="border-gray-400 max-w-[86rem] mx-auto"></hr>
        </div>
    );
};

export default Banner;