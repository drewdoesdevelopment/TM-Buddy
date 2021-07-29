import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { PersonFill } from 'react-bootstrap-icons';
import './ExcelInput.scss';
import * as XLSX from 'xlsx';

const ExcelInput = () => {
  const [employeeName, setEmployeeName] = useState([]);

  const handleExcelInput = (e) => {
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
    <>
      <input type='file' placeholder='fart' onChange={handleExcelInput} />
      <Container className='card__container'>
        {employeeName.map((employee) => {
          return (
            <Card className='employee__card'>
              <Card.Body>
                <Card.Title>
                  <PersonFill size={24} className='mb-2' /> {employee.Employee}
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Employee ID: {employee.EmployeeID}
                </Card.Subtitle>
                <Card.Subtitle className='mb-2 text-muted'>
                  Contact: {employee.PhoneNumber}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default ExcelInput;
