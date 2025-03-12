const url ="https://raw.githubusercontent.com/mkatay/json_ingatlanok/refs/heads/main/ingatlanok"
const urlPhoto='https://raw.githubusercontent.com/mkatay/JF_Kando_vizsga_forras/refs/heads/master/public/'


getData(url,renderData)
let categories=[]
let authors=[]
let userOption=null
let house=[]
let kepek=[]


function renderData(data){
    house=data
    console.log(house);    
    categories=getUniqueValues(data,'category')
    //console.log(categories);
   
    
    
}

function getUserOption(e){
    console.log(e.target.tagName,e.target.value);
    userOption=e.target.value
    if(userOption=='category') renderCheckboxes(categories)
    
}

function renderCheckboxes(arr){
    console.log(arr);
    document.querySelector('.checkContainer').innerHTML=''
    document.querySelector('button').disabled=false
    document.querySelector('button').classList.remove('cursor-not-allowed')
    arr.forEach(item=>
        document.querySelector('.checkContainer').innerHTML+=`
    <li class=" border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input  type="checkbox" value="${item}" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label  class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">${item}</label>
        </div>
    </li>
        `
    )
}
function handleClick(){
    const checkedValues=[]
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(domObj=>
        checkedValues.push(domObj.value)
    )
    console.log(checkedValues,userOption);
    const filteredhouse=house.filter(obj=>checkedValues.includes(obj[userOption]))
    console.log(filteredhouse);
    //cards:
    document.querySelector('.cards').innerHTML=''
    filteredhouse.forEach(obj=>
        document.querySelector('.cards').innerHTML+=`  
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img src="${urlPhoto + obj.imageUrl}" alt="" class="left-0">
    <h6 class="border-2 rounded-full mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${obj.category}</h6>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Eladó: ${obj.sellerName}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Szobák száma: ${obj.rooms} Területe:${obj.area}</p>
    <p class="font-normal text-gray-700 dark:text-gray-400">A hírdetés feladásának dátuma: ${obj.createAt}</p>
</a>
        `
    )
}