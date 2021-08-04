import React, { useState } from 'react';
import './Performance.scss';
import { Container, Table } from 'react-bootstrap';
import {
  People,
  PieChart,
  Telephone,
  ClockHistory,
  ArrowDownLeftCircle,
} from 'react-bootstrap-icons';
import * as XLSX from 'xlsx';

function Performance() {
  const [employeeName, setEmployeeName] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const tableStyle = {
    opacity: showTable ? 1 : 0,
    transition: 'all 1s ease-in',
  };

  const handleExcelInput = (e) => {
    setShowTable(!showTable);
    const readExcel = (file) => {
      const response = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
          const wb = XLSX.read(bufferArray, { type: 'buffer' });
          const wsName = wb.SheetNames[0];
          const ws = wb.Sheets[wsName];
          const data = XLSX.utils.sheet_to_json(ws);
          resolve(data);
        };

        fileReader.onerror = (err) => {
          reject(err);
        };
      });

      response.then((data) => {
        console.log(data);
        setEmployeeName(data);
      });
    };

    const file = e.target.files[0];
    readExcel(file);
  };

  return (
    <div className='performance__input'>
      <Container style={{ textAlign: 'center' }}>
        <input type='file' onChange={handleExcelInput} />
      </Container>
      <Container style={tableStyle}>
        <h2
          style={{ color: 'white', textAlign: 'center', margin: '2rem 0rem' }}
        >
          Team Performance - Fiscal Period W4
        </h2>
        <Table variant='dark' className='table__styling'>
          <thead>
            <tr>
              <th>
                <People size={20} className='icon-styling' /> Employee Name
              </th>
              <th>
                <PieChart size={18} className='icon-styling' /> Sales Percentage
              </th>
              <th>
                <Telephone size={18} className='icon-styling' /> Talk Time
              </th>
              <th>
                <ClockHistory size={18} className='icon-styling' /> Productive
                Hours
              </th>
              <th>
                <ArrowDownLeftCircle size={19} className='icon-styling' /> Lost
                Hours
              </th>
            </tr>
          </thead>
          <tbody>
            {employeeName.map((employee) => {
              return (
                <tr>
                  <td>{employee.Employee}</td>
                  <td>{employee.SalesPercentage} %</td>
                  <td>{employee.TalkTime}</td>
                  <td>{employee.ProductiveHours}</td>
                  <td>{employee.LostHours}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Performance;
