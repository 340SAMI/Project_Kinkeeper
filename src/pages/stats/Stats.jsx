import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip, Legend } from 'recharts';
import FriendContext from '../../context/FriendContext';

const COLORS = {
  call: '#244D3F',
  video: '#37A163',
  text: '#7E35E1',
};

const Stats = () => {
  const { FriendsHistory } = useContext(FriendContext);

  const chartData = [
    { name: 'Call',  value: FriendsHistory.filter(i => i.type === 'call').length,  fill: COLORS.call },
    { name: 'Video', value: FriendsHistory.filter(i => i.type === 'video').length, fill: COLORS.video },
    { name: 'Text',  value: FriendsHistory.filter(i => i.type === 'text').length,  fill: COLORS.text },
  ]

  const total = FriendsHistory.length;

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">

       
        <div className="mb-6">
          <h1 className="text-5xl font-bold">Stats</h1>
        </div>



        {/* Pie Chart */}
        <div className="bg-white rounded-3xl border border-base-300 p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-1">Interaction Breakdown</h2>
          <p className="text-sm text-slate-500 mb-6">Distribution of calls, videos, and texts.</p>

          {total === 0 ? (
            <div className="text-center text-slate-400 py-16">
              No data yet. Interactions will appear here. 
              
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <PieChart width={320} height={320}>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={130}
                  paddingAngle={5}
                  cornerRadius={8}
                  dataKey="value"
                >
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value} interactions`, name]}
                />
                <Legend />
              </PieChart>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Stats;