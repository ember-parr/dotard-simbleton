export const Business = (businessObject) => {
    return `
    <div class = "search">
        <h2 class="business-name">${businessObject.companyName}</h2>
        <div class="business-info">
            ${businessObject.addressFullStreet} <br>
            ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
            <hr>
        </div>
        </div>
    `
};

export const nyBusiness = (nyBusinessObject) => {
    return `
    <div class = "search">
        <h2 class="business-name">${nyBusinessObject.companyName}</h2>
        <div class="business-info">
            ${nyBusinessObject.addressFullStreet} <br>
            ${nyBusinessObject.addressCity}, ${nyBusinessObject.addressStateCode} ${nyBusinessObject.addressZipCode}
            <hr>
        </div>
        </div>
    `
}


export const Agents = (agentsObject) => {
    return `
    <div class = "search">
        <h2 class="agent-name">${agentsObject.agentName.nameFirst} ${agentsObject.agentName.nameLast}</h2>
        <div class="agent-info">
            ${agentsObject.agentCompany} <br>
            ${agentsObject.agentPhone}
            <hr>
        </div>
        </div>
    `
}
