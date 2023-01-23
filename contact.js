//step 1 (email extractor)
const input1 = document.getElementById('txtarea');
const input2 = document.getElementById('txtarea2');

//step 2 (email extractor)
const button1 = document.getElementById('getemailsButton').addEventListener("click", () =>
{
    //step 3 (email extractor)
    const email = input1.value;
    console.log(email);
    const emails = email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    
    //step 4 (email extractor)
    const holder = [];

    // step 5 (email extractor)
    emails.forEach((email) => 
    {
        // if the list doesnt include the current email
        if(!holder.includes(email))
        {
          // then add to list
            holder.push(email);
        }
    });
    // step 6 (email extractor)
    input2.value = holder.join(' ');
})

//step 1 (form validator)
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".error");
const required = ["email", "userName"];

//step 2 (form validator)
form.addEventListener("submit", (event) =>
{
    let data = {};

    // step 2 (form validator)
    event.preventDefault();

    //step 3 (form validator)
    errors.forEach(field =>
        {
            field.classList.add("hide");
        });

    let error = false;
    // loop
    inputs.forEach(element =>
        {
            let name = element.getAttribute("name");
            // if name not null
            if (name != null)
            {
                element.style.borderColor = "#ddd";
                // if empty input
                if (element.value.length == 0 && required.includes(name))
                {
                    // pass to error function
                    addError(element, "Field is required");
                    error = true;
                }
                // check email
                if (name == "email" && !error)
                {
                    //step 4 (form validator)
                    // email regex from the book
                    let regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
                    let result = regex.test(element.value);
                    if (!result)
                    {
                        //step 6 (form validator)
                        // pass to error function
                        addError(element, "invalid email");
                        error = true;
                    }
                }
                //step 7 (form validator)
                // check password
                if (name == "password")
                {
                    // password regex from the book
                    let regex = /[a-zA-Z0-9]+$/
                    let result = regex.test(element.value);
                    // if invalid password
                    if (!result)
                    {
                        //step 6 (form validator)
                        // pass to error function
                        addError(element, "Password must be letters and numbers");
                        error = true
                    }
                    // if password incorrect length
                    if (!(element.value.length >= 3 && element.value.length <= 8))
                    {
                        //step 6 (form validator)
                        // pass to error function
                        addError(element, "Password must be between 3 and 8 chars");
                        error = true;
                    }
                }
                data[name] = element.value;
            }
                
        });

        //step 9 (form validator)
        if (!error)
        {
            console.log(data);
        }
})

//step 5 (form validator)
function addError(element, message)
{
    let e = element.nextElementSibling;
    e.classList.remove("hide");
    e.textContent = message;
    element.style.borderColor = "red";
    element.focus();
}