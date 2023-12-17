import React, { useState, useEffect } from 'react'
import Badge from '../Badge/Badge';

import './Dashboard.css'

function Dashboard() {

    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        const localStorageData = localStorage.getItem('formData');
        if (localStorageData) {
            const parsedData = JSON.parse(localStorageData);
            setBugs(parsedData);
        }
    }, []);

    const activeBugs = bugs.reduce((count, bug) => bug.status === 'open' ? count + 1 : count, 0);
    const closedBugs = bugs.reduce((count, bug) => bug.status === 'closed' ? count + 1 : count, 0);
    const inProgressBugs = bugs.reduce((count, bug) => bug.status === 'in progress' ? count + 1 : count, 0);


    return (
        <>
            <section className="dashboard">
                <Badge icon="fas fa-bug" text="Active Bugs" count={activeBugs} />
                <Badge icon="fas fa-spinner" text="Running Bugs" count={inProgressBugs} />
                <Badge icon="fas fa-check-circle" text="Completed Bugs" count={closedBugs} />
            </section>
        </>
    )
}

export default Dashboard