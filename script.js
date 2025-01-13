function generatePassword() {
    const length = document.getElementById('length').value;
    while(length<=0){
        alert("Please enter a positive number.");
        return
    }
    while(length>128){
        alert("Please enter a number less than 128.");
        return
    }
    while(length % 1 !== 0){
        alert("Please enter a whole number.");
        return
    }

    while(length<6){
        alert("We want your password to be as secure as possible, please enter a number greater than 5.");
        return
    }

    const alphas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let pswd = "";
    for (let i = 0; i < length; i++) {
        const ranin = Math.floor(Math.random() * alphas.length);
        pswd += alphas[ranin];
    }
    document.getElementById('password').textContent = pswd;
}
