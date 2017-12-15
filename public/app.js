// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.ajax({
  url: 'https://api.github.com/users/driftabout',
  method: 'GET',
  headers: {
    Authorization: '5c956eb3c858ec192ee2812b86c31b7cb2e5b1e9'
  }
})
  .then(
    data => data.forEach(repo =>
      $('#results').append(`<h3>${repo.name}</h3><p>${repo.description}</p><hr>`)),
    err => console.error(err.status, err.statusText, 'is the way my stuff is broken'));
