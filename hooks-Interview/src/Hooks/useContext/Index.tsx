import React, { useState } from 'react'
import Dashboard from './Dashboard';
import { DashboardContext } from './Context';

export interface User {
    isSubscribed: boolean;
    name: String
}

export function Index() {

    const [user] = useState<User>({
        isSubscribed: true,
        name: 'izhar'
    })

    return (
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    )
}

