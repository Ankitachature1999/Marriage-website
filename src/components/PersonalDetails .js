import React, { useState } from "react";
import './PersonalDetails .css'

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    otherMobile: "",
    telephone: "",
    caste: "",
    birthDate: "",
    bloodGroup: "",
    bodyType: "",
    height: "",
    weight: "",
    complexion: "",
    specsLenses: "",
    disabilities: "",
    diet: "",
    drink: "",
    smoke: "",
    registrationBy: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Form submission logic
  };

  return (
    <div className="personal-details-container">
      <h2>Personal Details</h2>
      <form className="personal-details-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Middle Name"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Marital Status</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Other Mobile</label>
            <input
              type="text"
              name="otherMobile"
              value={formData.otherMobile}
              onChange={handleChange}
              placeholder="Other Mobile"
            />
          </div>
          <div className="form-group">
            <label>Telephone</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Telephone"
            />
          </div>
          <div className="form-group">
            <label>Caste</label>
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              placeholder="Caste"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Blood Group</label>
            <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="form-group">
            <label>Body Type</label>
            <select name="bodyType" value={formData.bodyType} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Slim">Slim</option>
              <option value="Average">Average</option>
              <option value="Athletic">Athletic</option>
              <option value="Heavy">Heavy</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Height</label>
            <select name="height" value={formData.height} onChange={handleChange}>
              <option value="">Select</option>
              <option value="4'5">4'5"</option>
              <option value="5'0">5'0"</option>
              <option value="5'5">5'5"</option>
              <option value="6'0">6'0"</option>
              <option value="6'5">6'5"</option>
              {/* Add more height options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Weight"
            />
          </div>
          <div className="form-group">
            <label>Complexion</label>
            <select name="complexion" value={formData.complexion} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Fair">Fair</option>
              <option value="Medium">Medium</option>
              <option value="Dark">Dark</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Specs/Lenses</label>
            <div className="radio-group">
              <input
                type="radio"
                name="specsLenses"
                value="Yes"
                checked={formData.specsLenses === "Yes"}
                onChange={handleChange}
              />{" "}
              Yes
              <input
                type="radio"
                name="specsLenses"
                value="No"
                checked={formData.specsLenses === "No"}
                onChange={handleChange}
              />{" "}
              No
            </div>
          </div>
          <div className="form-group">
            <label>Disabilities</label>
            <div className="radio-group">
              <input
                type="radio"
                name="disabilities"
                value="Yes"
                checked={formData.disabilities === "Yes"}
                onChange={handleChange}
              />{" "}
              Yes
              <input
                type="radio"
                name="disabilities"
                value="No"
                checked={formData.disabilities === "No"}
                onChange={handleChange}
              />{" "}
              No
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Diet</label>
            <select name="diet" value={formData.diet} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Drink</label>
            <div className="radio-group">
              <input
                type="radio"
                name="drink"
                value="Yes"
                checked={formData.drink === "Yes"}
                onChange={handleChange}
              />{" "}
              Yes
              <input
                type="radio"
                name="drink"
                value="No"
                checked={formData.drink === "No"}
                onChange={handleChange}
              />{" "}
              No
            </div>
          </div>
          <div className="form-group">
            <label>Smoke</label>
            <div className="radio-group">
              <input
                type="radio"
                name="smoke"
                value="Yes"
                checked={formData.smoke === "Yes"}
                onChange={handleChange}
              />{" "}
              Yes
              <input
                type="radio"
                name="smoke"
                value="No"
                checked={formData.smoke === "No"}
                onChange={handleChange}
              />{" "}
              No
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Registration By</label>
            <select
              name="registrationBy"
              value={formData.registrationBy}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Self">Self</option>
              <option value="Mother">Mother</option>
              <option value="Brother">Brother</option>
              <option value="Friend">Friend</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonalDetails;