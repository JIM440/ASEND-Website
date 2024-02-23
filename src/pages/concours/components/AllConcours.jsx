import React from 'react';
import VetAgricTab from './VetAgricTab';
import MedicineTab from './MedicineTab';
import EngineeringTab from './EngineeringTab';

const AllConcours = () => {
  return (
    <>
      <EngineeringTab />
      <MedicineTab />
      <VetAgricTab />
    </>
  );
};

export default AllConcours;
