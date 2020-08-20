import { useBusinessList } from './BusinessProvider.js';
import { Business } from './Business.js';

const contentSelector = document.querySelector(".businessList");

export const BusinessList = () => {
    const businessArray = useBusinessList()
    contentSelector.innerHTML = "<h1>Dotard Simbleton Business Sales</h1>"

    businessArray.forEach(
        (businessObj) => {
            contentSelector.innerHTML += Business(businessObj)
        }
    );
}