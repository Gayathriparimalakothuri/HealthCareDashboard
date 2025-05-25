import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    { day: 'Mon', appt1: 30, appt2: 50, appt3: 70 },
    { day: 'Tue', appt1: 50, appt2: 60, appt3: 20 },
    { day: 'Wed', appt1: 40, appt2: 80, appt3: 30 },
    { day: 'Thu', appt1: 60, appt2: 30, appt3: 50 },
    { day: 'Fri', appt1: 90, appt2: 40, appt3: 60 },
    { day: 'Sat', appt1: 20, appt2: 70, appt3: 40 },
    { day: 'Sun', appt1: 50, appt2: 20, appt3: 80 }
];

const ActivityChart = () => {
    return (
        <div className="card p-1 mt-4 mx-2">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6>Activity</h6>
                <p className="text-muted" style={{ fontSize: '12px' }}>3 appointments this week</p>
            </div>
            <ResponsiveContainer width="100%" height={150}>
                <BarChart data={data}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="appt1" fill="#00E0FF" barSize={6} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="appt2" fill="#A1A1A1" barSize={6} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="appt3" fill="#6A5ACD" barSize={6} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ActivityChart;
