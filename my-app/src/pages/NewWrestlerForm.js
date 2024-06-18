import React, { useState } from 'react';

function NewWrestlerForm({ onAddWrestler }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [signatureMove, setSignatureMove] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newWrestler = { name, image, signatureMove };

    fetch('https://react-hooks-phase-2-project-3.onrender.com/wrestlers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWrestler)
    })
      .then(response => response.json())
      .then(data => {
        onAddWrestler(data);  
        setName('');
        setImage('');
        setSignatureMove('');
      })
      .catch(error => console.error('Error:', error));
  }

  return (
    <div>
      <h1>Add New Wrestler</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={image} onChange={e => setImage(e.target.value)} />
        </label>
        <br />
        <label>
          Signature Move:
          <input type="text" value={signatureMove} onChange={e => setSignatureMove(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Wrestler</button>
      </form>
    </div>
  );
}

export default NewWrestlerForm;
