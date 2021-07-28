import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
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
      <input type='file' onChange={handleExcelInput} />

      {employeeName.map((employee) => {
        return (
          <Card>
            <Card.Body>
              <Card.Title>{employee.Employee}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default ExcelInput;
