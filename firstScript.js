allPlayers = []
if (localStorage.playerDetails){
    allPlayers = JSON.parse(localStorage.getItem("playerDetails"))
}

const addPlayers=()=>{
    let regexForName = /^[\w]{1,}$/
    let regexForEmail = /^(([\w]+)([@])([\w]+)([.])([a-zA-Z]{1,5})([.][\w]{1,5})?)$/
    let regexForPhonenumber = /^[\d]{11}$/
    let regexForPassword = /^([\w]{4,})([\d]{3,})$/
    
    let signUp = {
        firstname:firstName.value,
        lastname:lastName.value,
        email:playerEmail.value,
        phonenumber:phoneNumber.value,
        occupation:playerOccupation.value,
        password:userPassword.value

    }
    
    if(signUp.firstname==""||signUp.lastname==""||signUp.phonenumber==""||signUp.email==""||signUp.playerOccupation==""||signUp.password==""){
        display.innerText = "Fill out all unfilled fields"
    }
    else if(regexForName.test(firstName.value) == false){
        display.innerText = "type in a correct name!"
    }
    else if(regexForName.test(lastName.value)==false){
        display.innerText = "type in a correct name!"
    }
    else if(regexForEmail.test(playerEmail.value)== false){
        display.innerText = "input a valid email!"
    }
    else if(regexForPhonenumber.test(phoneNumber.value)==false){
        display.innerText = "phonenumber must be 11 digits"
    }
    else if(regexForPassword.test(userPassword.value)==false){
        display.innerText = "password must contain at least 4 letter and 3 digits"
    }else{
        allPlayers.push(signUp)
        localStorage.setItem("playerDetails", JSON.stringify(allPlayers))
        display.innerHTML = `Dear ${signUp.firstname} <br> sign up to 'who wants to be a millonaire 2022 edition' was successful`


        firstName.value = ""
        lastName.value = ""
        playerEmail.value = ""
        phoneNumber.value = ""
        playerOccupation.value = ""
        userPassword.value = ""
        
    }
}

const signIn =()=>{
    let logInName = signinEmail.value
    let logInPassword = signinPassword.value
    let logIn = false

    for (let index = 0; index < allPlayers.length; index++) {
        if ((logInName == allPlayers[index].firstname||logInName==allPlayers[index].email) && logInPassword == allPlayers[index].password){
            logIn = true
            currentPlayer = allPlayers[index]
            currentPlayerIndex = index
        }
    }
    if(logIn){
        localStorage.setItem('currentPlayer', JSON.stringify(currentPlayer))
        localStorage.setItem('currentPlayerIndex', JSON.stringify(currentPlayerIndex))
        window.location.href = "index.html"
    }else{
        display.innerText = "Incorrect Name or Password"

    }

    signinEmail.value = ""
    signinPassword.value = ""
}