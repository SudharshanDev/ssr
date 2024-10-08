"use client"
import { useState } from 'react';
import { postData } from '../app/api/demo';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [postMessage, setPostMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newEntry = { name, area };
      await postData(newEntry);

      setPostMessage('Data posted successfully!');
      setName('');
      setArea('');
      // Optionally refetch data here
    } catch (error) {
      setPostMessage('Error posting data');
    }
  };

  return (
    <div>
      <h2>Add New Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
          className=" border-2 "
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="area">Area:</label>
          <input
               className=" border-2 "
            type="text"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {postMessage && <p>{postMessage}</p>}
    </div>
  );
};

export default FormComponent;
