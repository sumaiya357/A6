// console.log('conected')
const loadNews=()=>{
fetch(`https://openapi.programming-hero.com/api/news/category/01`)
    .then(res=>res.json())
    .then(data=>displayNews(data.data))}

    const displayNews= allnews=>{

        console.log(allnews)
        const maindiv=document.getElementById('mainDiv')
        for(const news of allnews){

            const div= document.createElement('div')
            div.innerHTML=`
            <div class="row g-0">
          <div class="col-md-4">
            <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${news.title
              }</h5>
              <p class="card-text">${news.details
              }</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
            `
            maindiv.appendChild(div)
        }
    }



    loadNews()