//Example fetch using pokemonapi.co

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  // document.querySelector('img').src = ""
  // document.querySelector('img').alt = ""
  // document.querySelector('iframe').src = ""

  const url = `https://api.nasa.gov/planetary/apod?api_key=YIT9k8RjBFYZPJywrj0AsXgeyyyGtbx3PM9rdUyR&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.bottom').classList.remove("hidden")

        if (data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl
          document.querySelector('img').classList.remove("hidden")
          document.querySelector('iframe').classList.add("hidden")
        }
        else if (data.media_type === 'video') {
          document.querySelector('iframe').src = data.url
          document.querySelector('iframe').classList.remove("hidden")
          document.querySelector('img').classList.add("hidden")
        }

        document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.title

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
//  https://api.nasa.gov/planetary/apod?api_key=YIT9k8RjBFYZPJywrj0AsXgeyyyGtbx3PM9rdUyR


//  https://api.nasa.gov/planetary/apod?api_key=

// YIT9k8RjBFYZPJywrj0AsXgeyyyGtbx3PM9rdUyR  nasa api key


