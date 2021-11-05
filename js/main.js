const button_auth = document.querySelector('.button-auth');

console.log(button_auth);
console.log(document);

const sayMeow = () => {
    console.log('Meow');
}

sayMeow()

const obj = {
    name: "Leo",
    age: 8,
    sayHello: function () {
        console.log('Привет, меня зовут')
    }
}

const arr = [1,2,3,4,5]

console.log(arr[0]);

//модальное окно
const modal_auth = document.querySelector('.modal-auth')
const close_auth = document.querySelector('.close-auth')
const login_form = document.querySelector('#logInForm') //document.getEelementById('logInForm')

const input_login = document.getElementById('login')
const input_password = document.getElementById('password')

const button_out = document.querySelector('.button-out')
const user_name = document.querySelector('.user-name')
const modal_footer = document.querySelector('.modal-footer')



const login = (user) => {
    console.log(user)
    button_auth.style.display = 'None'

    button_out.style.display = 'Block'
    user_name.style.display = 'Block'

    user_name.textContent = user.login

    modal_auth.style.display = 'None';
}

const logout = () => {
    button_auth.style.display = 'flex'
    
    button_out.style.display = 'None'
    user_name.style.display = 'None'

    localStorage.removeItem('user')
}

console.log(modal_auth)
console.log(login_form)

const counter = (a,b) => {
    return a + b
}

//modal_auth.style.color = 'red'

button_auth.addEventListener('click', () => {
    //console.dir(modal_auth);
    modal_auth.style.display = 'flex'; //добавление свойства
})

close_auth.addEventListener('click', () => {
    //console.dir(modal_auth);
    modal_auth.style.display = 'None';
})

button_out.addEventListener('click', () => {
    logout()
    console.log('session terminated: logout')
})

//Вешаем обработчик события на форму, слушаем событие submit (событие отправки форммы. Подразумевает перезагрузку формы и страницы)
login_form.addEventListener('submit', (event) => { //event - то самое событие, которое произошло на элеемнте. То, что отлавливаем.
    event.preventDefault()                         //Отменит стандартное поведение элементов на странице.
    console.dir('ЭВЕНТ',event)
    console.log('auth_process')

    console.log(input_login, input_password);
    console.dir(input_login);                         //Вывод в консоль в качестве обьекта. Получить свойства обьекта:
    console.log(input_login.value, input_password.value)   
    
    const user = {
        login: input_login.value,
        password: input_password.value
    }


    localStorage.setItem('user', JSON.stringify(user))
    if (input_login.value != '') {
        login(user)
    }
    else {
        login_form.textContent = 'Поле логин не может быть пустым'
        //modal_footer.style.display = 'None'
        modal_auth.style.color = 'red'
    }


})



if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}



