

fetch("https://api.github.com/users/ibrahimkanber")
.then(res=>res.json())
.then(res=>{res
    console.log(res)
})