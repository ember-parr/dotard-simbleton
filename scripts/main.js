import { BusinessList } from './BusinessList.js';
import { nyBusinessList } from './BusinessList.js';
import { agentsList } from './BusinessList.js';
import { mySearchFunction } from './searchBar.js'

BusinessList();
nyBusinessList();
agentsList();

const input = document.querySelector('input')
input.addEventListener('keyup', mySearchFunction)