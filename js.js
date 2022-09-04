const loadNews = ()=>{
    fetch(' https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=>displayCategory(data.data.news_category
        ))
       
       
 }



const displayCategory = categories=>{
     
    const newsList = document.getElementById('news-list')
    
        for(const category of categories){
 
       const li= document.createElement('li')
       li.classList.add('list-inline-item','text-decoration-none','ms-2')

      
       li.innerHTML=`
       <li onclick=loadCategory('${category.category_id}')>${category.category_name}</li>
       
       `
       
     
        newsList.appendChild(li)
        
    

    }
}

//-------- category fetched---------------
const loadCategory=(id) =>{
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res=>res.json())
    .then(data=>displayNews(data.data))


    //-----start loader-----
    toggleSpinner(true)
}
    
        const displayNews= allnews=>{
    
            //console.log(allnews)
            const maindiv=document.getElementById('display-section')
            maindiv.innerHTML=''

            //display all category
            document.getElementById('no-found-msg').innerText = `${allnews.length} category found`;

            //sorted view
            allnews.sort((a,b)=>{

                return b.total_view - a.total_view
             }
               )

              //--------- Stop spiner-------

              toggleSpinner(false)

            for(const news of allnews){
    
                
                //console.log(news)
                const div= document.createElement('div')
                div.innerHTML=`
               
               <div onclick="loadNewsDetails('${news._id}')" class="row mt-5 border border-success rounded" data-bs-toggle="modal" data-bs-target="#newsDetailModal"  >

               <div class="col-md-4" >
                 <img src="${news.image_url}" class="img-fluid h-100 rounded-start" alt="...">
               </div>
               <div class="col-md-8" >
                 <div class="card-body">
                   <h5 class="card-title">${news.title
                   }</h5>
                   <p class="card-text text-truncate" >${news.details
                   }</p>
                   
                   <div class="ms-3 d-flex flex-row ">
                     <span> <img style="height:"100%" src="${news.author.img}" alt="..." class="rounded-circle" width="50" height="50" ></span>
                     <div class=" d-flex flex-column me-5">
                     <span><small class="text-muted">${news.author.name}</small></span>
                     <span><small class="text-muted">${news.author.published_date}</small></span>
                     </div>
                     <div class="ms-5 me-5"><span ><i class="fa-solid fa-eye"></i></span>
                     <span class="">${news.total_view ?news.total_view : 'no view'}
                     </span></div>
                     <span class="ms-5"><i class="fa-solid fa-arrow-right"></i></span>
                     </div>
                     </div>
 
                  </div>
               </div>
             </div>
             
                `
        

               
                maindiv.appendChild(div)
              
       

            }
        }  
        
        //--------- Modal -------------
        const loadNewsDetails =async id =>{
            try{
            const url=` https://openapi.programming-hero.com/api/news/${id}`
            const res = await fetch(url)
            const data = await res.json();
            displayNewsDetails(data.data[0])}
            catch(error){

                console.log('inside catch.You got a eror')
                console.log(error)
                
               }
        }

        const displayNewsDetails = news =>{
            const modalTitle= document.getElementById('newsDetailModalLabel')
               modalTitle.innerText=news.title
                const newsdetails= document.getElementById('news-details')
                newsdetails.innerHTML=`
               
                <p>Author Name: ${news.author.name ? news.author.name:'no author'}</p>
                <p>View: ${news.total_view ?news.total_view : 'no view'}</p>`
        }

        //Spinnner

        const toggleSpinner = isLoading=>{
            const loaderSection =document.getElementById('loader')
            if(isLoading){
                loaderSection.classList.remove('d-none')
            }
            else{
                loaderSection.classList.add('d-none')
            }
        }

        loadNews('https://openapi.programming-hero.com/api/news/category/02')

      