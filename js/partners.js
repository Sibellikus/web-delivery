const array = [11,34,67,798,45]

array.forEach((elem, index, array) => {  //array.forEach(function(elem, index, array)
    console.log('elem',elem)
    console.log('index',index)
    console.log('array',array)
}) 


for (let i = 0; i < array.length; i++) {
    console.log(i)
}

