const colorBtns = document.querySelectorAll('.btn')

colorBtns.forEach(function(item){
    item.addEventListener('click', function(event){
        let themeColor = event.target.dataset.color
        document.documentElement.style.setProperty('--theme-color', themeColor)

    })
})