function BugItem({ id, item, modifyItem }) {
    return (
        <tr key={id}>
            <td>{item.id} </td>
            <td>{item.title}</td>
            <td>{item.project}</td>
            <td>{item.description}</td>
            <td>{item.priority}</td>
            <td>{item.status}</td>
            <td>
                <a href="#" onClick={() => modifyItem(item.id, 'edit')} className="edit"><i className="fas fa-edit"></i></a>
                <a href="#" onClick={() => modifyItem(item.id, 'delete')} className="delete"><i className="fas fa-trash-alt"></i></a>
            </td>
        </tr>
    );
}

export default BugItem;