import { Link } from 'react-router-dom';

function BugItem({ id, item, modifyItem }) {
    function capitalizeFirstLetter(words) {
        const separateWord = words.toLowerCase().split(' ');
        for (let i = 0; i < separateWord.length; i++) {
           separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
        }
        return separateWord.join(' ');
    }

    const shortDescription = item.description.slice(0, 20) + (item.description.length > 20 ? '...' : '');
    
    return (
        <tr key={id}>
            <td>{item.id} </td>
            <td>{capitalizeFirstLetter(item.title)}</td>
            <td>{capitalizeFirstLetter(item.project)}</td>
            <td>{capitalizeFirstLetter(shortDescription)}</td>
            <td className={`priority-${item.priority.toLowerCase().replace(' ', '-')}`}>{capitalizeFirstLetter(item.priority)}</td>
            <td>{capitalizeFirstLetter(item.status)}</td>
            <td>
            <Link to={`/bug/${item.id}`} className='view'><i className="fas fa-eye"></i></Link>
                <a href="#" onClick={() => modifyItem(item.id, 'edit')} className="edit"><i className="fas fa-edit"></i></a>
                <a href="#" onClick={() => modifyItem(item.id, 'delete')} className="delete"><i className="fas fa-trash-alt"></i></a>
            </td>
        </tr>
    );
}

export default BugItem;