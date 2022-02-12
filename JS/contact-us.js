
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyg-uW0LQBcGJ-d-WK8N38Dx_OdufceXp-n7NFe9rfoL0gCP-Xf7hctewTJYBXLJ2FT/exec'
    const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form)
        })
        .then(response => alert("Thanks for Contacting us..! We Will Reach Out to You Soon..."))
        .catch(error => console.error('Error!', error.message))
    })