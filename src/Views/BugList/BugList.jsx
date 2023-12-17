import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal.jsx';
import BugItem from '../BugItem/index.jsx';
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

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(data));
    }, [data]);

    const toggleModal = (action) => {
        setIsOpen(!isOpen);
        if (action !== 'edit') {
            setEditIndex(null);
            setCurrentItem(null);
        }
    };

    const onAddSuccess = (arg) => {
        if (editIndex !== null) {
            let newData = [...data];
            newData[editIndex] = arg;
            setData(newData);
            setEditIndex(null);
            setCurrentItem(null);
        } else {
            setData((oldValues) => [...oldValues, arg]);
        }
        setIsOpen(false);
    }

    const deleteItem = (index) => {
        let newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    const editItem = (index) => {
        setEditIndex(index);
        setCurrentItem(data[index]);
        toggleModal('edit');
    };

    return (
        <>
            <section className='section-buglist'>
            <SearchBar />
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
                {data.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="center-text">No record found.</td>
                    </tr>
                ) : (
                    data.map((item, index) => (
                        <BugItem item={item} index={index} editItem={editItem} deleteItem={deleteItem} submitData={onAddSuccess} />
                    ))
                )}
                </tbody>
            </table>
            </section>
        </>
    );
}

export default BugList;