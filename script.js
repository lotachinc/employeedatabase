const Employee = [
    {
        name: "Andrew Sammy",
        salary: "400000",
        Position: "Manager",
        Age: "44",
        img: "./image4.jpg",
    },
    {
        name: "John Osas",
        salary: "250000",
        Position: "Assistant Manager",
        Age: "34",
        img: "./image5.jpg",
    },
    {
        name: "Paul Marcus",
        salary: "200000",
        Position: "Director",
        Age: "24",
        img: "./image6.jpg",
    },
    {
        name: "Angela Chima",
        salary: "150000",
        Position: "Product Manager",
        Age: "23",
        img: "./image7.jpg",
    },
    {
        name: "Chief Uche",
        salary: "70000",
        Position: "Assistant PM",
        Age: "36",
        img: "./image8.jpg",
    },
    {
        name: "Paulina Nnewi",
        salary: "40000",
        Position: "Intern",
        Age: "21",
        img: "./image9.jpg",
    },
]

//this is the container that will display our cards
const bodysection = document.querySelector('#bodysection');

//create the cards

//function to create the cards
const mapArr= ()=>{
    bodysection.innerHTML=''   //this line deletes the old cards
    Employee.map((Employees) =>{  //this line maps through the elements of the array to make them cards
        let salary =  Employees.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        let cardElement = '<div class="card">' //this is the opening tag for our cards
    
        cardElement += `<img src ="${Employees.img}" alt="avatar" />` //adds individual image from our array to our card
        cardElement +=`<p class='Name-p'> Name: ${Employees.name}</p>`;  //same but name  
        cardElement +=`<p class='Salary-p'> Salary: $${salary}</p>`;//same but salary
        cardElement +=`<p class='Position-p'> Position: ${Employees.Position}</p>`; //same but position
        cardElement += `<p class='Age-p'> Age: ${Employees.Age}</p>`; //same but age
        
        cardElement += '</div>' //closing tag for cards
    
    
    bodysection.innerHTML += cardElement //adds each of the cards to the container that should display our cards
    
    })
}

function newObj (name, salary, position, age, img) {   //this function enables us to add new objects to the array
   const empData= { //new object that we are to add to the array
        name: name,
        salary: salary,
        Position: position,
        Age: age,
        img: img,
    }
    Employee.push(empData); //this adds the object to the array
    mapArr() //this line calls the function so that our cards can be updated
}
mapArr() //this line calls the function to display our cards
//newObj(name= 'Agnes', salary= '$20,000', position= 'HR', age= '22', img= 'image8.jpg' );


const showForm = () => {
    const formElement = document.querySelector('.form'); //to get the form element
    if (formElement.style.display === 'block') //check if the form element is already displayed
    {
        formElement.style.display = 'none'; // remove the element from the display
        document.querySelector('#user-icon').classList.add ('fa-user-plus') // displays the plus icon
        document.querySelector('#user-icon').classList.remove ('fa-xmark') //remoes the x icon
    } else {
        formElement.style.display = 'block' //display the element
        document.querySelector('#user-icon').classList.remove ('fa-user-plus') //same as above 
        document.querySelector('#user-icon').classList.add ('fa-xmark')
    }
}

const addUser = (event) => {
    event.preventDefault();
    let userName = document.querySelector('#user-name').value;
    let usersalary = document.querySelector('#user-salary').value;
    let userPosition = document.querySelector('#user-position').value;
    let userAge = document.querySelector('#user-age').value;
    let userImg = document.querySelector('#user-image').value;

    newObj(
        name = userName,
        salary =usersalary,
        Position = userPosition,
        Age = userAge,
        img = userImg,
    )

    document.querySelector('#user-name').value =''
    document.querySelector('#user-age').value=''
    document.querySelector('#user-image').value=''
    document.querySelector('#user-position').value=''
    document.querySelector('#user-salary').value=''
}





// for (let index = 0; index < Employee.length; index++) {
//     const element = Employee[index];
//     console.log(element)
// }




// for (i = 0; i < Employee.length; i++ ) {X

// }

// create 2 arrays and use all the array methods used today


const array = ['fish','lobster','prawn','seal','seahorse'];


const array1 = ['toyota','nissan','volvo','pontiac'];

array.toString
console.log(array.toString)
console.log(array.join('$'))


const array2 = ['nuts','berries','grains']
console.log(array2.push('yam'))
