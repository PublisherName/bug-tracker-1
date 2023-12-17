
import React from 'react';

function BugItem({ id, item, editItem, deleteItem }) {
    return (
        <tr key={id}>
            <td>{item.id} </td>
            <td>{item.project}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.priority}</td>
            <td>{item.status}</td>
            <td>
                <a href="#" onClick={() => editItem(item.id)} className="edit"><i className="fas fa-edit"></i></a>
                <a href="#" onClick={() => deleteItem(item.id)} className="delete"><i className="fas fa-trash-alt"></i></a>
            </td>
        </tr>
    );
}

export default BugItem;