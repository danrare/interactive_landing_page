document.addEventListener('DOMContentLoaded', ()=>{
    
    var ratings = document.getElementsByClassName('rate');
    Array.from(ratings).forEach((rated)=>{
        rated.onclick = ()=>{
            var num = rated.innerHTML;
            document.querySelector('button').addEventListener("click", ()=>{
                document.getElementById('Thank-card').style['display'] = 'block';
                document.querySelector('span').innerHTML = num
                document.getElementById('rating-card').style['display'] = 'none'
            })
        }
    })
})