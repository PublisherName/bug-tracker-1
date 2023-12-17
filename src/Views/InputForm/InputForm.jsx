import './InputForm.css';
import React, { useState } from "react";

function InputForm(props) {

  const {
    onAddSuccess,
    currentItem
  } = props

  const initialFormState = currentItem ? {
    project: currentItem.project,
    title: currentItem.title,
    description: currentItem.description,
    priority: currentItem.priority,
    status: currentItem.status
  } : {
    project: '',
    title: '',
    description: '',
    priority: '',
    status: ''
  };

  initialFormState.errors = {
    project: '',
    title: '',
    description: '',
    priority: '',
    status: ''
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {
      project: formState.project ? '' : 'Project is required',
      title: formState.title ? '' : 'Title is required',
      description: formState.description ? '' : 'Description is required',
      priority: formState.priority ? '' : 'Priority is required',
      status: formState.status ? '' : 'Status is required'
    };

    if (Object.values(errors).some(error => error)) {
      setFormState({ ...formState, errors });
      return;
    }
    onAddSuccess(formState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='modal'>
        <label>
          Project:
          <input
            type="text"
            value={formState.project}
            onChange={e => setFormState({ ...formState, project: e.target.value })}
          />
          {formState.errors.project && <p>{formState.errors.project}</p>}
        </label>
        <label>
          Bug Title:
          <input
            type="text"
            value={formState.title}
            onChange={e => setFormState({ ...formState, title: e.target.value })}
          />
          {formState.errors.title && <p>{formState.errors.title}</p>}
        </label>
        <label>
          Description
          <textarea
            value={formState.description}
            onChange={e => setFormState({ ...formState, description: e.target.value })}
          />
          {formState.errors.description && <p>{formState.errors.description}</p>}
        </label>
        <label>
          Priority
          <select value={formState.priority} onChange={e => setFormState({ ...formState, priority: e.target.value })}>
            <option value="">-----</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {formState.errors.priority && <p>{formState.errors.priority}</p>}
        </label>
        <label>
          status:
          <select value={formState.status} onChange={e => setFormState({ ...formState, status: e.target.value })}>
            <option value="">-----</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Assigned">Assigned</option>
            <option value="Completed">Completed</option>
          </select>
          {formState.errors.status && <p>{formState.errors.status}</p>}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default InputForm;