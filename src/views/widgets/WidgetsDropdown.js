import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import { getTotalSales, getMonthlySales, getOrdersCount , getMonthlyOrderCounts} from '../../api/report/salesReports'


const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)
  const [salesData, setSalesData] = useState({
    totalSalesToday: 0,
    totalSalesThisWeek: 0,
    totalSalesThisMonth: 0,
  });
  const [orderCountData, setOrderCountData] = useState({
    ordersToday: 0,
    ordersThisWeek: 0,
    ordersThisMonth: 0,
  });
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [selectedPeriodOrdersCount, setSelectedPeriodOrdersCount] = useState('today');

  const [displayedSales, setDisplayedSales] = useState(0);
  const [monthlySalesData, setMonthlySalesData] = useState({
    labels: [],
    data: [],
  });
  const [monthlyOrdersCountData, setMonthlyOrdersCountData] = useState({
    labels: [],
    data: [],
  });

  const [displayedOrdersCount, setDisplayedOrdersCount] = useState(0);


  

  useEffect(() => {
    const fetchOrdersCount = async () => {
      try {
        const data = await getOrdersCount();
        setOrderCountData(data);
        setDisplayedOrdersCount(data.ordersToday);
      } catch (error) {
        console.error('Failed to fetch sales data', error);
      }
    };

    fetchOrdersCount();
  }, []);


  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const data = await getMonthlySales();
        setMonthlySalesData(data);
      } catch (error) {
        console.error('Failed to fetch sales data', error);
      }
    };

    fetchSalesData();
  }, []);

  useEffect(() => {
    const fetchMonthlyOrdersCountData = async () => {
      try {
        const data = await getMonthlyOrderCounts();
        setMonthlyOrdersCountData(data);
      } catch (error) {
        console.error('Failed to fetch sales data', error);
      }
    };

    fetchMonthlyOrdersCountData();
  }, []);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const data = await getTotalSales();
        setSalesData(data);
        setDisplayedSales(data.totalSalesToday); // Default display today's sales
      } catch (error) {
        console.error('Failed to fetch sales data', error);
      }
    };

    fetchSalesData();
  }, []);


  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>

        <CWidgetStatsA
          color="primary"
          value={<>{displayedSales} </>}
          title="Total Products"
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: monthlySalesData.labels,
                datasets: [
                  {
                    label: 'Monthly Sales',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-primary'),
                    data: monthlySalesData.data,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    border: {
                      display: false,
                    },
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 0,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />

      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="info"
          value={<>{displayedSales} </>}
          title="Total Categories"
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: monthlySalesData.labels,
                datasets: [
                  {
                    label: 'Monthly Sales',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: monthlySalesData.data,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    border: {
                      display: false,
                    },
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 0,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="warning"
          value={<>{displayedOrdersCount} </>}
          title="Total Customer"
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: monthlyOrdersCountData.labels,
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: monthlyOrdersCountData.data,
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>

    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
