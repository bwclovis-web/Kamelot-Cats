export const newObserver = () => {
    let options = {
        rootMargin: '100px 0px -30px',
        theshold: 0.3
      }

      const articles = document.querySelectorAll('.blogroll-article');
      
      let observer = new IntersectionObserver((items) =>{
          items.forEach(item => {
              if (item.intersectionRatio > 0) {
                  item.target.classList.add('visible')
              }
          })
      }, options);

      articles.forEach(item => {
        observer.observe(item)
      })
      
}