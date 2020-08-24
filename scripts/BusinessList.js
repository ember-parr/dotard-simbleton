import { useBusinessList } from './BusinessProvider.js';
import { Business } from './Business.js';

import { newYorkBusinesses } from './BusinessProvider.js';
import { nyBusiness } from './Business.js';

import { purchasingAgents } from './BusinessProvider.js';
import { Agents } from './Business.js';



// runs through the loop of all businesses
const contentSelector = document.querySelector(".businessList");

export const BusinessList = () => {
    const businessArray = useBusinessList()
    contentSelector.innerHTML = ""

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
    contentSelectorTwo.innerHTML = ""

    businessArray.forEach(
        (businessObj) => {
            contentSelectorTwo.innerHTML += nyBusiness(businessObj)
        }
    );
}


// runs through the loop of all purchasing Agents
const contentSelectorThree = document.querySelector(".agentsList");

export const agentsList = () => {
    const agentsArray = purchasingAgents
    contentSelectorThree.innerHTML = ""

    agentsArray.forEach(
        (agentsObj) => {
            contentSelectorThree.innerHTML += Agents(agentsObj)
        }
    );
}