import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CWidgetStatsA,
} from '@coreui/react'
import { getTotalProducts, getTotalCategories, getTotalCustomers } from '../../api/report/salesReports'

const WidgetsDropdown = (props) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);

  useEffect(() => {
    // Fetch total products count
    const fetchTotalProducts = async () => {
      try {
        const data = await getTotalProducts();
        setTotalProducts(data.totalProducts);
      } catch (error) {
        console.error('Failed to fetch total products count', error);
      }
    };

    // Fetch total categories count
    const fetchTotalCategories = async () => {
      try {
        const data = await getTotalCategories();
        setTotalCategories(data.totalCategories);
      } catch (error) {
        console.error('Failed to fetch total categories count', error);
      }
    };

    // Fetch total customers count
    const fetchTotalCustomers = async () => {
      try {
        const data = await getTotalCustomers();
        setTotalCustomers(data.totalCustomers);
      } catch (error) {
        console.error('Failed to fetch total customers count', error);
      }
    };

    // Call the functions to fetch the data
    fetchTotalProducts();
    fetchTotalCategories();
    fetchTotalCustomers();
  }, []);

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="primary"
          value={<>{totalProducts}</>}
          title="Total Products"
          chart={null} // Removed the chart as it's no longer needed
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="info"
          value={<>{totalCategories}</>}
          title="Total Categories"
          chart={null} // Removed the chart as it's no longer needed
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="warning"
          value={<>{totalCustomers}</>}
          title="Total Customers"
          chart={null} // Removed the chart as it's no longer needed
        />
      </CCol>
    </CRow>
  );
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
}

export default WidgetsDropdown
