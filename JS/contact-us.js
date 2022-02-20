
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx4hTWiB6nWm1MBJ47OnXqiLcZF-6Jb4qBXMQSyhMtBzsIK3sM-EDpaSGPbFz5OsKI2/exec'
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