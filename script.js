let url = 'https://dekontaminasi.com/api/id/covid19/hospitals';
let content = document.getElementById('content');
let listProvinsi = document.getElementById('list-provinsi');
let list = document.querySelectorAll('.list')
let same;
fetch(url)
.then((response) => response.json())
.then((data)=>{
    data.forEach(coba);


    
})

function coba(a){
    content.innerHTML += `<tr>
        <td>${a.name}</td>
        <td>${a.address}</td>
        <td>${a.province}</td>
    </tr>`    
}

console.log(list);
