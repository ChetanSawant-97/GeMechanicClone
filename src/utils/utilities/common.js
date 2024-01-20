import { useState } from "react";
import { useEffect } from "react";

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return windowWidth;
};

export const checkValidEmail = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const checkValidPassword = (password) =>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}


export const updateProfileDetailsState = (state, elementId, elementValue)=>{
    const updatedState = { ...state }; 
    console.log(elementId, elementValue);
    switch (elementId) {
        case 'firstName': updatedState.firstName = elementValue;
          break;
        case 'lastName': updatedState.lastName = elementValue;
          break;
        case 'gender': updatedState.gender = elementValue;
          break;
        case 'userName': updatedState.newUserName = elementValue;
          break;
        case 'genderMale': updatedState.gender = elementValue;
          break;
          break;
        case 'genderFemale': updatedState.gender = elementValue;
          break;
        case 'pri_street1': updatedState.addressList[0].street1 = elementValue;
          break;
        case 'pri_street2': updatedState.addressList[0].street2 =  elementValue;
          break;
        case 'pri_city': updatedState.addressList[0].city = elementValue;
          break;
        case 'pri_state': updatedState.addressList[0].state = elementValue;
          break;
        case 'pri_zipcode': updatedState.addressList[0].zipcode = elementValue;
          break;
        case 'sec_street1': updatedState.addressList[1].street1 = elementValue;
          break;
        case 'sec_street2': updatedState.addressList[1].street2 = elementValue;
          break;
        case 'sec_city': updatedState.addressList[1].city = elementValue;
          break;
        case 'sec_state': updatedState.addressList[1].state = elementValue;
          break;
        case 'sec_zipcode': updatedState.addressList[1].zipcode = elementValue;
          break;
        default:
          console.log('Unknown Field');
        }
    return updatedState;
}


export const readFileAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};