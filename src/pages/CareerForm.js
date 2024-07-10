import React, { useState } from 'react';
import styles from './CareerForm.module.css';

const CareerForm = () => {
  const [liveWithFamily, setLiveWithFamily] = useState('no');

  const toggleAddressFields = (event) => {
    setLiveWithFamily(event.target.value);
  };

  return (
    <form className={styles.careerForm}>
      <label htmlFor="live_with_family" className={styles.careerFormLabel}>Do you live with your family?</label>
      <select id="live_with_family" name="live_with_family" onChange={toggleAddressFields} value={liveWithFamily} className={styles.careerFormSelect}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      {liveWithFamily === 'yes' && (
        <div className={styles.careerFormAddressFields}>
          <label htmlFor="current_address" className={styles.careerFormLabel}>Current Living Address:</label>
          <input type="text" id="current_address" name="current_address" className={styles.careerFormInput} />

          <label htmlFor="family_address" className={styles.careerFormLabel}>Family Address:</label>
          <input type="text" id="family_address" name="family_address" className={styles.careerFormInput} />
        </div>
      )}

      <label htmlFor="family_type" className={styles.careerFormLabel}>Family Type:</label>
      <select id="family_type" name="family_type" className={styles.careerFormSelect}>
        <option value="joint">Joint Family</option>
        <option value="nuclear">Nuclear Family</option>
        <option value="extended">Extended Family</option>
      </select>

      <label htmlFor="diet" className={styles.careerFormLabel}>Your Diet:</label>
      <select id="diet" name="diet" className={styles.careerFormSelect}>
        <option value="vegetarian">Vegetarian</option>
        <option value="non-vegetarian">Non-Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="eggetarian">Eggetarian</option>
      </select>

      <input type="submit" value="Submit" className={styles.careerFormSubmit} />
    </form>
  );
};

export default CareerForm;

