const toDoList = [] //ლისტი ელემენტისთვის


const $input = document.getElementsByTagName('input')[0]
const $button = document.getElementsByTagName('button')[0]
const $ul = document.getElementsByTagName('ul')[0]

var id = toDoList.length + 1 //რომ დაიწყოს აიდი ერთიდან


$button.addEventListener('click', addTodoItem) // ონკლიკ ფუნქცია

function addTodoItem() {
    let newInput = $input.value //ველიუს ვინახავთ 
    if (validateInput(newInput)) { // ახალ მნიშვნელობაზე იძახებს ფუნქციას
        let newItem = new Object() // ახალი ობიექტი
        newItem.id = id 
        id++ // იზრდება აიდი
        newItem.title = $input.value //ვამათებს ახალ აითემს 
        toDoList.push(newItem) // ვამატებთ აითემს თოდოს
        $input.value = null // ველს ვასუფთავებთ
        renderTodoList() //რენდერი
    } else {
        console.log('The input must be filled') // ერორის ტექსტი
    }
}

function deleteTodoItem(id) { // წაშლის ფუნქცია
    deleteTodoItemFromtoDoList(id) // ვიძახებთ ფუნქციას
    renderTodoList() // შედეგის გამოტანა
}

function renderTodoList() { // დარენდერების შედეგი

    $ul.innerHTML = null // გაასუფთაოს <UL> html გამოსახულება 

    toDoList.forEach(item => {
        let li = document.createElement('li') // შეიქმნას ლი
        li.innerHTML = item.title + " ID: " + item.id + " - " // გამოსატანი ტექსტი
        let delButton = document.createElement('button') // წაშლის ღილაკი
        delButton.innerHTML = "Delete" // აწერს ღილაკს delete ს
        delButton.addEventListener('click', () => { // კლიკის დროს რა უნდა ქნას
            deleteTodoItem(item.id) // აიდით მიაგნოს და წაშალოს მნიშვნელობა
        })
        li.appendChild(delButton) // წაშლის ღილაკი
        $ul.appendChild(li) // ლის მშობელი
    }
    )
}

function deleteTodoItemFromtoDoList(id) { // წაშლის ფუნქიონარი
    let item = toDoList.find(value => value.id === id) // აიდის მოძებნა
    toDoList.splice(toDoList.indexOf(item), 1) // წაშლა
}

function validateInput(value) { //თუ არაფერს ჩავწერთ, გამოიძახოს ეს ფუნქცია
    if(value !== ''){ // თუ რამე წერია აბრუნებს თრუს
        return true
    }else{
        return false // თუ არაფერი წერია აბრუნებს ფოლსს
    }
}
renderTodoList() 
