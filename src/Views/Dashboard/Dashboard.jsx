import React, { useState, useEffect } from 'react';
import { Chart as Chartjs } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import Badge from '../Badge/Badge';
import './Dashboard.css';

const Dashboard = () => {
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        const localStorageData = localStorage.getItem('formData');
        if (localStorageData) {
            setBugs(JSON.parse(localStorageData));
        }
    }, []);

    const bugCounts = bugs.reduce((counts, bug) => {
        counts[bug.status]++;
        return counts;
    }, { open: 0, 'in progress': 0, closed: 0 });

    const data = {
        labels: ["Open", "InProgress", "Complete"],
        datasets: [{
            label: "No of Bugs",
            data: Object.values(bugCounts),
        }],
    };

    return (
        <section className="dashboard">
                <Badge icon="fas fa-bug" text="Active Bugs" count={bugCounts.open} />
                <Badge icon="fas fa-spinner" text="Running Bugs" count={bugCounts['in progress']} />
                <Badge icon="fas fa-check-circle" text="Completed Bugs" count={bugCounts.closed} />
            
            <div className="pie-chart">
                <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
        </section>
    );
}

export default Dashboard;