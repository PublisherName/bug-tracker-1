import './InputForm.css';
import React, { useState, useEffect } from "react";

function InputForm({ onAddSuccess, currentItem }) {
  const initialFormState = currentItem ? { ...currentItem } : {
    title: '',
    project: '',
    description: '',
    priority: '',
    status: ''
  };

  initialFormState.errors = {
    title: '',
    project: '',
    description: '',
    priority: '',
    status: ''
  };

  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (currentItem) {
      setIsSubmitted(true);
    }
  }, [currentItem]);

  const generateErrors = (formState) => ({
    title: formState.title ? '' : 'Title is required',
    project: formState.project ? '' : 'Project is required',
    description: formState.description ? '' : 'Description is required',
    priority: formState.priority ? '' : 'Priority is required',
    status: formState.status ? '' : 'Status is required'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => {
      const newState = {
        ...prevState,
        [name]: value,
      };
      newState.errors = generateErrors(newState);
      return newState;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  
    const errors = generateErrors(formState);
  
    if (Object.values(errors).some(error => error)) {
      setFormState({ ...formState, errors });
      return;
    }
  
    if (!formState.id) {
      formState.id = Date.now();
    }
  
    const formStateWithoutErrors = { ...formState };
    delete formStateWithoutErrors.errors;
  
    onAddSuccess(formStateWithoutErrors);
  };
  
  const renderInputField = (key) => {
    if (key === 'id' && currentItem) {
      return null;
    }

    if (key === 'errors') {
      return null;
    }

    const isSelectField = key === 'priority' || key === 'status';
    const isTextArea = key === 'description';
    const options = {
      priority: ['Low', 'Medium', 'High'],
      status: ['Open', 'In progress', 'Closed']
    };

    return (
      <label key={key}>
        {key.charAt(0).toUpperCase() + key.slice(1)}
        {isSelectField ? (
          <select name={key} value={formState[key]} onChange={handleInputChange}>
            <option value="">Select {key}</option>
            {options[key].map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        ) : isTextArea ? (
          <textarea name={key} value={formState[key]} onChange={handleInputChange} />
        ) : (
          <input type="text" name={key} value={formState[key]} onChange={handleInputChange} />
        )}
        {isSubmitted && formState.errors[key] && <p>{formState.errors[key]}</p>}
      </label>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='modal'>
        {Object.keys(initialFormState).map(renderInputField)}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default InputForm;