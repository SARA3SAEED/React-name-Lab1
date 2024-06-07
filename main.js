

let container = document.getElementById('container');
let element = document.createElement('p');
element.innerHTML = 'Sara';
container.appendChild(element);




let container1 = document.getElementById('container1');
let element1 = React.createElement('p', { children: 'Sara1' })
ReactDOM.render(element1, container1);



let container2 = document.getElementById('container2');
let element2 = <div>
     <p> Sara2 </p> 
     <img src="https://images.pexels.com/photos/24778713/pexels-photo-24778713/free-photo-of-wooden-houses-in-village-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width="400"></img>
     </div> 
ReactDOM.render(element2, container2);



