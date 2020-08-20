import { useBusinessList } from './BusinessProvider.js';
import { Business } from './Business.js';

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