"strict mode"

const MyList = document.querySelector('ul');
const myRequest = new Request('../json/csvjson.json');

fetch(myRequest)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i<data.length; i++){
            let listItem = document.createElement('li')
            listItem.innerHTML = data [i]["Rank"]
            listItem.innerHTML = data [i]["Title"]
            MyList.appendChild(listItem)
        }
    })
    .catch(console.error);
    console.log(MyList)