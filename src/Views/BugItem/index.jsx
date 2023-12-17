
import React from 'react';
import Button from '../Button/Button.jsx';

function BugItem({ item, index, editItem, deleteItem }) {
    return (
        <tr key={index}>
            <td>{index + 1} </td>
            <td>{item.project}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.priority}</td>
            <td>{item.status}</td>
            <td>
                <a href="#" onClick={() => editItem(index)} class="edit"><i class="fas fa-edit"></i></a>
                <a href="#" onClick={() => deleteItem(index)} class="delete"><i class="fas fa-trash-alt"></i></a>
            </td>
        </tr>
    );
}

export default BugItem;