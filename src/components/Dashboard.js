import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest, setFilters } from '../redux/actions';
import { TableView } from './TableView';
import { PieChartView } from './PieChartView';
import { Filter } from './Filter';
import { Switch } from 'antd';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error, filters } = useSelector(state => state);
  const [view, setView] = useState('table'); // Default view: table

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const applyFilters = () => {
    const { user, category } = filters;
    return data.filter(item => {
      return (
        (user ? item.user.includes(user) : true) &&
        (category ? item.category.includes(category) : true)
      );
    });
  };

  const filteredData = applyFilters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <Filter filters={filters} onFilterChange={(newFilters) => dispatch(setFilters(newFilters))} />
      <div style={{ marginBottom: 20 }}>
        <Switch
          checkedChildren="Pie Chart"
          unCheckedChildren="Table"
          onChange={() => setView(view === 'table' ? 'chart' : 'table')}
        />
      </div>
      {view === 'table' ? <TableView data={filteredData} /> : <PieChartView data={filteredData} />}
    </div>
  );
};

export default Dashboard;
