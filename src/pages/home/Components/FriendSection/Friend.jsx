import React from 'react';
import { Link } from 'react-router';

const statusStyles = {
  overdue: 'badge badge-error rounded-full badge-lg text-white',
  'almost due': 'badge badge-warning rounded-full badge-lg text-slate-950',
  'on-track': 'badge badge-success rounded-full badge-lg text-white',
};

const Friend = ({ friendData }) => {
  const { id,name, picture, days_since_contact, status, tags } = friendData;

  return (
    <Link to={`/FriendDetail/${id}`} className="card bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden aspect-square flex flex-col items-center justify-between p-4 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="avatar">
          <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
            <img src={picture} alt={name} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">{name}</h2>
          <p className="text-sm text-slate-500 mt-1">{days_since_contact}d ago</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-sm p-3 text-slate-700 bg-[#CBFADB] uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full my-3">
        <span className={statusStyles[status] || 'badge badge-nfo badge-lg uppercase  w-full'}>
          {status.replaceAll('-', ' ')}
        </span>
      </div>
    </Link>
  );
};

export default Friend;
