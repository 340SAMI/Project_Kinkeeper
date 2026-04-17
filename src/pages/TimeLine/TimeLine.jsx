import React, { useContext } from 'react';
import FriendContext from '../../context/FriendContext';
import call from '../../assets/call.png';
import text from '../../assets/text.png';
import video from '../../assets/video.png'


const typeConfig = {
  text: { label: 'Text', icon: text, badge: 'bg-slate-100 text-slate-700' },
  video: { label: 'Video', icon: video, badge: 'bg-blue-100 text-blue-700' },
  call: { label: 'Call', icon: call, badge: 'bg-emerald-100 text-emerald-700' },
};

const TimeLine = () => {
  const { FriendsHistory } = useContext(FriendContext);

  console.log (FriendsHistory);

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-6">
          <div>
            <h1 className="text-5xl font-bold">Timeline</h1>
          </div>
        </div>

        <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
         </div>

        <div className="grid gap-4">
          {FriendsHistory.length === 0 ? (
            <div className="rounded-3xl border border-base-300 bg-white p-8 text-center text-slate-500 shadow-sm">
              No timeline events yet. Your recent friend activity will show here.
            </div>
          ) : (
            FriendsHistory.map((item) => {
              const config = typeConfig[item.type];
              const date = new Date(item.time);
              return (
                <div key={item.id} className="rounded-3xl border border-base-300 bg-white p-5 shadow-sm">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-3xl ${config.badge}`}>
                            <img src={config.icon} alt={config.label} className="w-7 h-7 object-contain" />
                        </div>
                      <div>
                        <h3 className="text-xl font-semibold">{config.label}</h3>
                        <p className="text-sm text-slate-500">{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;