import { useBusinessList } from './BusinessProvider.js';
import { Business } from './Business.js';

import { newYorkBusinesses } from './BusinessProvider.js';
import { nyBusiness } from './Business.js';



// runs through the loop of all businesses
const contentSelector = document.querySelector(".businessList");

export const BusinessList = () => {
    const businessArray = useBusinessList()
    contentSelector.innerHTML = "<h1>All Sales</h1>"

    businessArray.forEach(
        (businessObj) => {
            contentSelector.innerHTML += Business(businessObj)
        }
    );
}


// runs through the loop of all businesses FOR NEW YORK
const contentSelectorTwo = document.querySelector(".businessList--newYork");

export const nyBusinessList = () => {
    const businessArray = newYorkBusinesses
    contentSelectorTwo.innerHTML = "<h1>Only New York Sales</h1>"

    businessArray.forEach(
        (businessObj) => {
            contentSelectorTwo.innerHTML += nyBusiness(businessObj)
        }
    );
}
