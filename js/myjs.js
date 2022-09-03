 const loadNews = ()=>{
    fetch(' https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=>displayCategory(data.data.news_category
        ))
 }


const displayCategory = categories=>{
     //console.log(categories)
    const newsList = document.getElementById('news-list')
    categories.forEach(category=>{
       // console.log(category)
        const id= category.category_id
       //console.log(id)
        const name= category.category_name
       //console.log(id)
        const a= document.createElement('a')
        a.classList.add('ms-3','text-decoration-none')
        a.innerHTML=`
        
       <span onclick="loadCategory(${category.categoryId})"> ${category.category_name}</span>
        `
        newsList.appendChild(a)

        // let inputvalue=name.innerText;
        // inputvalue = id
      
    })
}

const loadCategory=(categoryId)=>{

    fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    .then(res=>res.json())
    .then(data=>displayCategory2(data.data))
}
loadCategory('03')

const displayCategory2=(category2)=>{
    const displaySection = document.getElementById('display-section')
    const newDiv= document.createElement('div')
    newDiv.classList.add('row', 'g-0')
    newDiv.innerHTML=`
    <img src="${category2.image_url
    }"
    
    <div class="col-md-4">
      <img src="category2.image_url" class="img-fluid rounded-start" alt="...">
    </div>

    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${category2.title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
 
    
    `
    displaySection.appendChild(newDiv)
}

loadNews()