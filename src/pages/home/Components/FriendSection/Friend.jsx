import React from 'react';

const statusStyles = {
  overdue: 'badge badge-error badge-lg text-white',
  'almost due': 'badge badge-warning badge-lg text-slate-950',
  'on-track': 'badge badge-success badge-lg text-white',
};

const Friend = ({ friendData }) => {
  const { name, picture, days_since_contact, status, tags } = friendData;

  return (
    <div className="card bg-white border border-slate-200 shadow-xl rounded-3xl overflow-hidden">
      <div className="p-6 flex flex-col items-center text-center gap-4">
        <div className="avatar">
          <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
            <img src={picture} alt={name} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">{name}</h2>
          <p className="text-sm text-slate-500 mt-1">{days_since_contact}d ago</p>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50 p-5">
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-sm badge-outline text-slate-700 uppercase">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <span className={statusStyles[status] || 'badge badge-info badge-sm uppercase'}>
            {status.replace('-', ' ')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Friend;
