const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    // Replace the following example with your actual search logic or API call
    const fakeSearchResults = ['MIS', 'CAPEX', 'Link 3', 'Link 4', 'Link 5'];

    // Clear existing results
    searchResults.innerHTML = '';

    // Show results if search input is not empty
    if (searchTerm) {
        const filteredResults = fakeSearchResults.filter(result =>
            result.toLowerCase().includes(searchTerm)
        );

        // Populate the search results container with links
        filteredResults.forEach(result => {
            const link = document.createElement('MIS');
            link.textContent = result;
            link.href = 'http://10.60.235.33/NFTS/Default.aspx' // Replace with the actual link you want to redirect to
            searchResults.appendChild(link);
        });

        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
});


  