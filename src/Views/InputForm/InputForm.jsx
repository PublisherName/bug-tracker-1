import './InputForm.css';
import React, { useState } from "react";

function InputForm({ onAddSuccess, currentItem }) {
  const initialFormState = currentItem ? { ...currentItem } : {
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

  const handleInputChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

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

    if (!formState.id) {
      formState.id = Date.now();
    }

    onAddSuccess(formState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='modal'>
        {Object.keys(initialFormState).map((key) => {
          if (key === 'id' && currentItem) {
            return null;
          }
          return key !== 'errors' && (
            <label key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
              {key === 'priority' ? (
                <select name={key} value={formState[key]} onChange={handleInputChange}>
                  <option value="">Select priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              ) : key === 'status' ? (
                <select name={key} value={formState[key]} onChange={handleInputChange}>
                  <option value="">Select status</option>
                  <option value="open">Open</option>
                  <option value="in progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
              ) : (
                <input
                  type="text"
                  name={key}
                  value={formState[key]}
                  onChange={handleInputChange}
                />
              )}
              {formState.errors[key] && <p>{formState.errors[key]}</p>}
            </label>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default InputForm;