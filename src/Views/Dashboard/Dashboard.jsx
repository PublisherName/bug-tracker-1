import React from 'react'
import './Dashboard.css'

function Dashboard() {
    return (
        <>
            <section className="dashboard">
                <div className="badge-container">
                    <div className="badge">
                        <i className="fas fa-bug"></i>
                        <h2>Active Bugs</h2>
                        <p>24</p>
                    </div>
                </div>

                <div className="badge-container">
                    <div className="badge">
                        <i className="fas fa-check-circle"></i>
                        <h2>Completed Bugs</h2>
                        <p>76</p>
                    </div>
                </div>

                <div className="badge-container">
                    <div className="badge">
                        <i className="fas fa-spinner"></i>
                        <h2>Running Bugs</h2>
                        <p>8</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard