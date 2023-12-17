import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal.jsx';
import BugItem from '../BugItem/BugItem.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './BugList.css'

function BugList() {
    const [data, setData] = useState(() => {
        const localStorageData = localStorage.getItem('formData');
        return localStorageData ? JSON.parse(localStorageData) : [];
    });

    const [isOpen, setIsOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterPriority, setFilterPriority] = useState('all');

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(data));
    }, [data]);

    const toggleModal = () => setIsOpen(!isOpen);

    const onAddSuccess = (arg) => {
        setData(editIndex !== null ? [...data.slice(0, editIndex), arg, ...data.slice(editIndex + 1)] : [...data, arg]);
        setEditIndex(null);
        setCurrentItem(null);
        setIsOpen(false);
    }

    const modifyItem = (id, action) => {
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            if (action === 'delete') {
                setData([...data.slice(0, index), ...data.slice(index + 1)]);
            } else if (action === 'edit') {
                setEditIndex(index);
                setCurrentItem(data[index]);
                toggleModal();
            }
        }
    };

    const handleFilterChange = (name, value) => {
        if (name === 'status') {
            setFilterStatus(value);
        } else if (name === 'priority') {
            setFilterPriority(value);
        }
    };

    const filteredData = data.filter(item => {
        return (filterStatus === 'all' || item.status === filterStatus) && (filterPriority === 'all' || item.priority === filterPriority);
    });

    return (
        <>
            <section className='section-buglist'>
            <SearchBar onFilterChange={handleFilterChange} />
            <div className="add-bug-btn" onClick={toggleModal}>
                <i className="fas fa-plus"></i> Add Bug
            </div>
            <Modal isOpen={isOpen} closeModal={toggleModal} submitData={onAddSuccess} currentItem={currentItem} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Project</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {filteredData.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="center-text">No record found.</td>
                    </tr>
                ) : (
                    filteredData.map((item) => (
                        <BugItem key = {item.id} item={item} modifyItem={modifyItem} submitData={onAddSuccess} />
                    ))
                )}
                </tbody>
            </table>
            </section>
        </>
    );
}

export default BugList;