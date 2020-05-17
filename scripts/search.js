window.onload = (event) => {
    const search = document.getElementById('search-input')
    search.focus()


    search.addEventListener('keydown', event => {
        if (event.keyCode === 13) {
            console.log('going')
            window.location.href = `https://www.google.com/search?q=${search.value}`
        }
    });
};
