$(document).ready(() => {
    
    const people = [
        {
            firstName: "Sam",
            lastName: "Smith",
            email: "sam.smith@gmail.com"
        },
        {
            firstName: "Tom",
            lastName: "Jones",
            email: "tom.jones@gmail.com"
        }
    ]
    
    people.forEach(person => { 
        $('#customer-table').append(`<tbody><tr><td>${person.firstName}</td><td>${person.lastName}</td><td>${person.email}</td></tr></tbody>`);
    });
});