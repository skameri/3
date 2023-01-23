const toDoList = []; //მასივის შემოტანა
const tittleTodoList = []; //ჩემს მიერ შემოტანილი მასივი, title ებისთვის
const $input = document.getElementsByTagName("input")[0];
const $button = document.getElementsByTagName("button")[0];
const $ul = document.getElementsByTagName("ul")[0];

var id = toDoList.length + 1; // ათვლა რომ დაიწყოს ერთიდან

$button.addEventListener("click", addTodoItem); //ევენთლისენერით ენიჭება ღილაკს ქლიქ ფუნქცია

function addTodoItem() {
  //დამატების ფუნქცია

  let newInput = $input.value; //ცვლადში ინახავს ინფუთის ველიუს

  if (validateInput(newInput)) {
    //
    if (!tittleTodoList.includes($input.value)) {
      //მასივი, რომელიც შედგება ინფუთ ველიუსგან
      let newItem = new Object(); // ობიექტის დამატება
      newItem.id = id; //ახალი აიდი
      id++; // აიდის მომატება
      newItem.title = $input.value; //თაითლს უტოლებს  ველიუს
      toDoList.push(newItem); // ახალი აითემის დამატება
      tittleTodoList.push(newItem.title); //ახალი თაითლის დამატება
      $input.value = null; //ინფუთ ველიუს ადგილი როცა ცარიელია
      renderTodoList(); //რენდერი
      console.log(tittleTodoList); //დალოგილია თაითლთუდულისტი
    } else {
      console.log("its similar element"); //თუ მსგავსი ელემენტია ამას გამოიტანს კონსოლზე
    }
  } else {
    console.log("The input must be filled"); //თუ არაფერს ჩაწერ ამას გამოიტანს კონსოლზე
}

function deleteTodoItem(id) {
  // წაშლის ფუნქცია
  deleteTodoItemFromtoDoList(id);
  renderTodoList();
}

function renderTodoList() {
  $ul.innerHTML = null; //ული როცა ცარიელია

  toDoList.forEach((item) => {

    let li = document.createElement("li"); //ახალი ელემენტის შექმნა
    li.innerHTML = item.title + " ID: " + item.id + " - "; //ლისთვის აიდის და თაითლის გაწერა
    let delButton = document.createElement("button"); // წაშლის ღილაკი
    delButton.innerHTML = "Delete"; //სახელის დაწერს ღილაკზე

    delButton.addEventListener("click", () => {
      //კლიკ ფუნქცია
      deleteTodoItem(item.id); //აიდის წაშლა
    });
    li.appendChild(delButton);
    $ul.appendChild(li);
  });
}

function deleteTodoItemFromtoDoList(id) {
  //ამოშლის ფუნქცია
  let item = toDoList.find((value) => value.id === id); // აიდით მოძებნა
  toDoList.splice(toDoList.indexOf(item), 1);
}

function validateInput(value) {
  //ვალიუს განსზაღვრა
  if (value !== "") {
    // არგუმენტი არ უნდა იყოს ცარიელი
    return true;
    // თუ არგუმეტი ცარიელი არაა აბრუნებს თრუს
  } else {
    return false;
    // თუ ცარიელია აბრუნებსს ფოლსს
  }
}

renderTodoList()
