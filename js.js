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
       //console.log(category)
       
       const li= document.createElement('li')
       li.classList.add('list-inline-item','text-decoration-none','ms-2')
       li.innerHTML=`
       <li onclick=loadCategory('${category.category_id}')>${category.category_name}</li>
       `

        newsList.appendChild(li)

        
    })
}


const loadCategory=(id) =>{
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res=>res.json())
    .then(data=>displayCategory2(data.data))

}



const displayCategory2 = categories2=>{
   console.log(categories2)
    const displaySection=document.getElementById('display-section')

   for(const category2 of categories2){
    displaySection.innerHTML=''
    const div= document.createElement('div')
   // div.classList.add('col')
    div.innerHTML=`
   

    <div class="row g-0 ">
    <div class="col-md-4  ">
      <img src="${category2.image_url}"  class="img-fluid h-100 rounded-start" alt="...">
    </div>
    <div class="col-md-8 card-body">
      
        <h6 class="card-title">${category2.title}</h6>
       <p>${category2.details.slice(0,10)
       }</p>
       
       <div class="ms-3 d-flex flex-row">
          <span> <img style="height:"100%" src="${category2.author.img}" alt="..." class="rounded-circle" width="50" height="50" ></span>
         <div class="ms-3 d-flex flex-column"><span>${category2.author.name}</span>
             <span>${category2.author.published_date}</span>
         </div>
         <span class="ms-5">${category2.total_view}
         </span>
        </div>
      
      </div>
      
    </div>
                
   
    `
    // <img src="${category2.image_url
    // }" class="card-img-top" alt="...">
    // <div class="card-img-top" alt="...">
    //             <div class="card-body">
    //               <h6 class="card-title">${category2.title}</h6>
                  
                {/* </div> */}
    displaySection.appendChild(div)
}
}

loadNews()


// const id= category.category_id
//        //console.log(id)
//         const name= category.category_name
//     //    //console.log(id)