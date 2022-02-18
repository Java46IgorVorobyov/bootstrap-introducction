console.log('Hey bro')

// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })

const root = document.getElementById('root')
root.innerHTML = `<ul>${getItems()}</ul>`
// function range(from, length) {
//     const result = []
//     for (let i =0; i < length; i++) {
//         result.push(i + from)
//     }
//     return result
// }
// function getItems() {
//     return range(1, 2000).map(i => `<li> <img src="./2.jpeg"> item ${i}</li>`).join('')
// }

let currentPage = 1
const paginator = new Paginator(5, 'root', displayPage)
function displayPage(page){
    if(page == 'next'){
        currentPage = currentPage + 5;
        paginator.show(currentPage)
    } else if(
        page == 'prev'
    ){
        currentPage = currentPage - 5;
    }
    else{
        console.log(page);
    }
    
    }