console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    fetchImages()
    fetchBreeds()

})



function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => showImage(dogs['message']))
}

function showImage(dogs){
    const divImage = document.getElementById('dog-image-container')
    dogs.forEach((image) => {
        const img = document.createElement('img')
        // divImage.innerHTML += `<img src=${image} />`
        img.src = image
        divImage.appendChild(img)
    })
}

function fetchBreeds(){
    // const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(dogs => showBreed(dogs['message']))
}

function showBreed(dogs){
    // console.log(dogs)
    for(dog in dogs) {
        displayBreed(dog)
    }

    const select = document.getElementById('breed-dropdown')
    select.addEventListener('change', (event) => {
        const ul = document.getElementById('dog-breeds')
        ul.innerText = ''
        const letter = event.target.value;

        for(dog in dogs){
            if (dog.charAt(0) === letter) {
                displayBreed(dog)
            }
        }

    })

    function displayBreed(dog){
        const ul = document.getElementById('dog-breeds');
        const li = document.createElement('li');
        li.innerText = dog;
        li.addEventListener('click', (e) => e.target.style.color = 'red'  )
        
        const subUl = document.createElement('ul')
        ul.appendChild(li)
        // debugger

        for(type of dogs[dog]){
            const subLi= document.createElement('li')
            subLi.innerText = type;
            subUl.appendChild(subLi)
            li.appendChild(subUl)

            // li.addEventListener('click', (e) => e.target.style.color = 'red'  )

        }
    }

    
}