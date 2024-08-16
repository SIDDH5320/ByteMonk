import React, { useState } from 'react';
import { Input, Button } from 'antd';

export const Filter = ({ filters, onFilterChange }) => {
  const [user, setUser] = useState(filters.user || '');
  const [category, setCategory] = useState(filters.category || '');

  const handleFilter = () => {
    onFilterChange({ user, category });
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <Input
        placeholder="Filter by User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ width: 200, marginRight: 10 }}
      />
      <Input
        placeholder="Filter by Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ width: 200, marginRight: 10 }}
      />
      <Button type="primary" onClick={handleFilter}>Filter</Button>
    </div>
  );
};
