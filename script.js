fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const articles = (data);
    console.log(articles);

    articles.forEach(element => {
      const articleDiv = document.createElement('div');
      articleDiv.classList = 'p-4 shadow-sm shadow-black w-96 h-fit relative rounded-2xl'
      articleDiv.innerHTML = `<span class="absolute bg-white rounded-full p-2 pr-4 pl-4 font-bold top-0 left-0">${element.id}</span>
      <img src="./assets/media1/${element.id}.jpeg" class="w-fit rounded-t-2xl" alt="" srcset="">
      <p class="bg-white p-2 text-black rounded-b-2xl text-xl font-semibold"><span>${element.name}</span></p>`
      document.getElementById('art').appendChild(articleDiv);
    });
      for (let index = 5; index <= 35; index++) {
      const articleDiv = document.createElement('div');
      articleDiv.classList = 'p-4 shadow-sm shadow-black w-96 h-fit relative rounded-2xl'
      articleDiv.innerHTML = `<span class="absolute bg-white rounded-full p-2 pr-4 pl-4 font-bold top-0 left-0">${index + 46}</span>
      <img src="./assets/images/${index}.png" class="w-fit rounded-t-2xl" alt="" srcset="">
      <p class="bg-white p-2 text-black rounded-b-2xl text-xl font-semibold"><span></span></p>`
      document.getElementById('art').appendChild(articleDiv);
      
    }
  });
