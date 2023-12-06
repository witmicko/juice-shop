let params = new URLSearchParams(window.location.search);
let searchValue = params.get('search');
let searchTermDiv = document.getElementById('searchTerm');

searchTermDiv.innerHTML = searchValue;