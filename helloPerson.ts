function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Testing";

document.body.innerHTML = greeter(user);