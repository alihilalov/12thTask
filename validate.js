// Phone number validator
const numberValidator = (phoneNum) => {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return regex.test(phoneNum)
}
const num1 = "+994516951536"
const num2 = "994516951536-"
console.log(numberValidator(num1));
console.log(numberValidator(num2))

// Email validator
const emailValidator = (email) => {
    const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    return regex.test(email)
}
const email1 = "hilalovalo0501@gmail.com"
const email2 = "hilalovali0501@gmail@com"

console.log(emailValidator(email1));
console.log(emailValidator(email2));

// Password validator
const passwordValidator = (password) => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    return regex.test(password)
}
console.log(passwordValidator("123Qfwer."));
console.log(passwordValidator("123Q@Fwer."));

// Age validator
const ageValidator = (age) => {
    const regex = /(?:0?2[/.-](?:[12][0-9]|0?[1-9])|(?:0?[469]|11)[/.-](?:30|[12][0-9]|0?[1-9])|(?:0?[13578]|1[02])[/.-](?:3[01]|[12][0-9]|0?[1-9]))[/.-][0-9]{4}/
    return regex.test(age)
}
console.log(ageValidator("43.53.4500"));
console.log(ageValidator("01.01.2000"));

// Name validator
const validateName = name => /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);

const name1 = "Ali Hilalov";
const name2 = "123Ali_68Hilalov";

console.log(validateName(name1));
console.log(validateName(name2));
