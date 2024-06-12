import React from 'react';
import DepItem from './DepItem';

const departments = [
  { uniqueNo: 1, depName: "PUC" },
  { uniqueNo: 2, depName: "CSE" },
  { uniqueNo: 3, depName: "ECE" },
  { uniqueNo: 4, depName: "EEE" },
  { uniqueNo: 5, depName: "CE" },
  { uniqueNo: 6, depName: "CHEM" },
  { uniqueNo: 7, depName: "MECH" },
  { uniqueNo: 8, depName: "MME" },
];

function Departments() {
  return (
    <div className='d-flex pt-5 flex-wrap w-100 justify-content-center'>
      {departments.map((eachItem) => (
        <DepItem key={eachItem.uniqueNo} details={eachItem} />
      ))}
    </div>
  );
}

export default Departments;
