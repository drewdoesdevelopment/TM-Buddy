import React, { useState } from 'react';
import { Card, Container, Dropdown } from 'react-bootstrap';
import { PersonFill } from 'react-bootstrap-icons';
import './ExcelInput.scss';
import * as XLSX from 'xlsx';
import Navigation from '../Navigation/Navigation.js';

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
          console.log('there has been an error!');
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
    <div className='team__dashboard'>
      <Navigation title='Team Dashboard' />
      <Container className='team__input'>
        <input type='file' onChange={handleExcelInput} />
      </Container>
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
                <Card.Subtitle className='mb-2 text-muted'>
                  Email: {employee.EmployeeEmail}
                </Card.Subtitle>
                <Dropdown className='pt-2'>
                  <Dropdown.Toggle variant='dark' id='dropdown-basic'>
                    Actions Menu
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant='dark'>
                    <Dropdown.Item
                      onClick={() =>
                        window.open(
                          `mailto:${employee.EmployeeEmail}?subject=Absence - ${
                            employee.Employee
                          }&body=Hello ${
                            employee.Employee.split(' ')[0]
                          }, it looks like you've called in for your shift today, I hope all is well! Please let me know which date I can set for your return.`
                        )
                      }
                    >
                      Mark Absent
                    </Dropdown.Item>
                    <Dropdown.Item>Send RTW Notice</Dropdown.Item>
                    <Dropdown.Item>Send Performance Email</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default ExcelInput;
