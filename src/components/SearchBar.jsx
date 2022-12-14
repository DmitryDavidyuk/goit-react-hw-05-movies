import { useState } from 'react';

export default function SearchBar({ onChange }) {
  const [query, setQuery] = useState('');

  const handleChangeQuery = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter your query');
      return;
    }
    onChange(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChangeQuery}
        type="text"
        value={query}
        placeholder="Enter movie name..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
