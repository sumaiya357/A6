const loadNews = ()=>{
    fetch(' https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=>displayCategory(data.data.news_category
        ))
       
 }


const displayCategory = categories=>{
     //console.log(categories)
    const newsList = document.getElementById('news-list')
    // categories.forEach(category=>{
        for(const category of categories){
       //console.log(category)
       
       const li= document.createElement('li')
       li.classList.add('list-inline-item','text-decoration-none','ms-2')
       li.innerHTML=`
       <li onclick=loadCategory('${category.category_id}')>${category.category_name}</li>
       `

        newsList.appendChild(li)

        
    }
}

// console.log('conected')
const loadCategory=(id) =>{
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res=>res.json())
    .then(data=>displayNews(data.data))}
    
        const displayNews= allnews=>{
    
            console.log(allnews)
            const maindiv=document.getElementById('display-section')
            maindiv.innerHTML=''
           
            for(const news of allnews){
    
                const div= document.createElement('div')
                div.innerHTML=`
               <div>
               <div onclick="loadNewsDetails('${news._id}')" class="row mt-5 border border-black rounded" data-bs-toggle="modal" data-bs-target="#newsDetailModal"  >

               <div class="col-md-4" >
                 <img src="${news.image_url}" class="img-fluid h-100 rounded-start" alt="...">
               </div>
               <div class="col-md-8" >
                 <div class="card-body">
                   <h5 class="card-title">${news.title
                   }</h5>
                   <p class="card-text">${news.details.slice(0,10)
                   }</p>
                   
                   <div class="ms-3 d-flex flex-row ">
                     <span> <img style="height:"100%" src="${news.author.img}" alt="..." class="rounded-circle" width="50" height="50" ></span>
                     <div class=" d-flex flex-column me-5">
                     <span><small class="text-muted">${news.author.name}</small></span>
                     <span><small class="text-muted">${news.author.published_date}</small></span>
                     </div>
                     <div class="ms-5 me-5"><span ><i class="fa-solid fa-eye"></i></span>
                     <span class="">${news.total_view}
                     </span></div>
                     <span class="ms-5"><i class="fa-solid fa-arrow-right"></i></span>
                     </div>
                     </div>
 
                  </div>
               </div>
             </div></div>
                `
                maindiv.appendChild(div)
            }
        }  

        const loadNewsDetails =async id =>{
            const url=` https://openapi.programming-hero.com/api/news/${id}`
            const res = await fetch(url)
            const data = await res.json();
            console.log(data.data)
        }

        const displayNewsDetails = news =>{
            console.log(news)
        }

        loadNews()
















            // const modalTitle= document.getElementById('newsDetailModalLabel')
            //    modalTitle.innerText=news.title
            //     const newsdetails= document.getElementById('news-details')
            //     newsdetails.innerHTML=`
               
            //     <p>Author Name: ${news.author.name ? news.author.name:'no author'}</p>
            //     <p>View: ${news.total_view ?news.total_view : 'no view'}</p>`
       
    
        // const loadNewsDetails=async id =>{
        //     const url=`https://openapi.programming-hero.com/api/news/category/${id}`
        //     const res = await fetch(url)
        //     const data = await res.json();
        //     newsDetails(data)
        // }

        // const newsDetails=news2 =>{
        //     console.log(news2)
        //     const modalTitle= document.getElementById('newsDetailModalLabel')
        //    modalTitle.innerText=news2.title
        //     const newsdetails= document.getElementById('news-details')
        //     newsdetails.innerHTML=`
           
        //     <p>Author Name: ${news2.author.name ? news2.author.name:'no author'}</p>
        //     <p>View: ${news2.total_view ?news2.total_view : 'no view'}</p>`
        //}
    
     


// const loadCategory=(id) =>{
//     fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
//     .then(res=>res.json())
//     .then(data=>displayCategory2(data.data))

// }



// const displayCategory2 = categories2=>{
//    console.log(categories2)
//     const displaySection=document.getElementById('display-section')

//    for(const category2 of categories2){
//     displaySection.innerHTML=''
//     const div= document.createElement('div')
//    // div.classList.add('col')
//     div.innerHTML=`
   

//     <div class="row g-0 ">
//     <div class="col-md-4  ">
//       <img src="${category2.image_url}"  class="img-fluid h-100 rounded-start" alt="...">
//     </div>
//     <div class="col-md-8 card-body">
    
//         <h6 class="card-title">${category2.title}</h6>
//        <p>${category2.details.slice(0,10)
//        }</p>
       
//        <div class="ms-3 d-flex flex-row ">
//           <span> <img style="height:"100%" src="${category2.author.img}" alt="..." class="rounded-circle" width="50" height="50" ></span>
//          <div class=" d-flex flex-column me-5">
//          <span>${category2.author.name}</span>
//          <span>${category2.author.published_date}</span>
//          </div>
//          <div class="ms-5 me-5"><span ><i class="fa-solid fa-eye"></i></span>
//          <span class="">${category2.total_view}
//          </span></div>
//          <span class="ms-5"><i class="fa-solid fa-arrow-right"></i></span>
//         </div>
      
//       </div>
      
//     </div>
                
   
//     `
//     // <img src="${category2.image_url
//     // }" class="card-img-top" alt="...">
//     // <div class="card-img-top" alt="...">
//     //             <div class="card-body">
//     //               <h6 class="card-title">${category2.title}</h6>
                  
//                 {/* </div> */}
//     displaySection.appendChild(div)
// }
// }

//loadNews()


// const id= category.category_id
//        //console.log(id)
//         const name= category.category_name
//     //   