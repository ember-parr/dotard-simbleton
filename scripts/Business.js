export const Business = (businessObj) => {
    return `
    
        <h2 class="business-name">${businessObj.companyName}</h2>
        <div class="business-info">
            ${businessObj.addressFullStreet} <br>
            ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}
            <hr>
        </div>
    
    `
};