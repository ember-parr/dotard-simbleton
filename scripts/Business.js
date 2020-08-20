export const Business = (businessObject) => {
    return `
    
        <h2 class="business-name">${businessObject.companyName}</h2>
        <div class="business-info">
            ${businessObject.addressFullStreet} <br>
            ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
            <hr>
        </div>
    
    `
};

export const nyBusiness = (nyBusinessObject) => {
    return `
        <h2 class="business-name">${nyBusinessObject.companyName}</h2>
        <div class="business-info">
            ${nyBusinessObject.addressFullStreet} <br>
            ${nyBusinessObject.addressCity}, ${nyBusinessObject.addressStateCode} ${nyBusinessObject.addressZipCode}
            <hr>
        </div>
    `
}



