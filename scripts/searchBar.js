
export const mySearchFunction = () => {
  // Declare variables
  let input, filter, main, agent, search;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  main = document.querySelector(".businessList");
  agent = document.querySelector(".agentsList")
  search = main.getElementsByClassName('search');
  search = agent.getElementsByClassName('search');

  // Loop through all list items, and hide those who don't match the search query
  for (let element of search) {
    let txtValue = element.textContent || element.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 ) {
        element.style.display = "";
    } else {
        element.style.display = "none";
    }
  }
}



