export const checkValidData = (name, email, password, isSignInForm) => {

    if (!isSignInForm) {
        const isNameValid = /^[a-zA-Z\s.']{2,}$/i.test(name);
        if (!isNameValid) return "Name is not valid";
    }

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;

};