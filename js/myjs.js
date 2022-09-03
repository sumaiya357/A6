 const loadNews = ()=>{
    fetch(' https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(data=>displayCategory(data.data.news_category
        ))
 }

//const newsList = document.getElementById('news-list')
const displayCategory = categories=>{
     //console.log(categories)
    const newsList = document.getElementById('news-list')
    categories.forEach(category=>{
        console.log(category)
        const a= document.createElement('a')
        a.classList.add('ms-4','text-decoration-none')
        a.innerHTML=` ${category.category_name}
        `
        newsList.appendChild(a)
    })
}

loadNews()