const username = document.querySelector('#username');
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const confirmPassword = document.querySelector('#confirm-password');
        const phone = document.querySelector('#phone');
        const address = document.querySelector('#address');
        const program = document.querySelector('#program');
        const dob = document.querySelector('#dob'); // Add this line
        const gender = document.querySelector('#gender'); // Add this line
        const form = document.querySelector('#signup');
        const togglePassword = document.querySelector("#togglePassword");

        // Shows error message
        const showError = (input, message) => {
            const formField = input.parentElement;
            formField.classList.remove('success');
            formField.classList.add('error');
            const error = formField.querySelector('small');
            error.textContent = message;
        };

        // Shows success message
        const showSuccess = (input) => {
            const formField = input.parentElement;
            formField.classList.remove('error');
            formField.classList.add('success');
            const error = formField.querySelector('small');
            error.textContent = '';
        };

        // Checks input field is required
        const isRequired = value => value.trim() === ''; // Modified this line

        // Checks length of input field
        const isBetween = (length, min, max) => length < min || length > max;

        // Checks email is valid
        const isEmailValid = (email) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        };

        // Checks password is secured
        const isPasswordSecure = (password) => {
            const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            return re.test(password);
        };

        // Validate alphabetic username
        const checkUsername = () => {
            let valid = false;
            const min = 3,
                max = 25;
            const usernameVal = username.value.trim();

            if (isRequired(usernameVal)) { // Modified this line
                showError(username, 'Username cannot be blank.');
            } else if (isBetween(usernameVal.length, min, max)) {
                showError(username, `Username must be between ${min} and ${max} characters.`);
            } else if (!isAlphabetic(usernameVal)) {
                showError(username, 'Username must contain only alphabetic characters.');
            } else {
                showSuccess(username);
                valid = true;
            }
            return valid;
        };

        // Validate alphabetic characters
        const isAlphabetic = (str) => {
            return /^[a-zA-Z]+$/.test(str);
        };

        // Validate email field
        const checkEmail = () => {
            let valid = false;
            const emailVal = email.value.trim();
            if (isRequired(emailVal)) { // Modified this line
                showError(email, 'Email cannot be blank.');
            } else if (!isEmailValid(emailVal)) {
                showError(email, 'Email is not valid.')
            } else {
                showSuccess(email);
                valid = true;
            }
            return valid;
        };

        // Validate password
        const checkPassword = () => {
            let valid = false;
            const passwordVal = password.value.trim();
            if (isRequired(passwordVal)) { // Modified this line
                showError(password, 'Password cannot be blank.');
            } else if (!isPasswordSecure(passwordVal)) {
                showError(password, 'Password must have at least 8 characters including at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*)');
            } else {
                showSuccess(password);
                valid = true;
            }
            return valid;
        };

        // Validate confirm password
        const checkConfirmPassword = () => {
            let valid = false;
            const confirmPasswordVal = confirmPassword.value.trim();
            const passwordVal = password.value.trim();
            if (isRequired(confirmPasswordVal)) { // Modified this line
                showError(confirmPassword, 'Confirm Password is required');
            } else if (passwordVal !== confirmPasswordVal) {
                showError(confirmPassword, 'Confirm Password does not match');
            } else {
                showSuccess(confirmPassword);
                valid = true;
            }
            return valid;
        };

        // Validate phone number
        const checkPhoneNumber = () => {
            let valid = false;
            const phoneVal = phone.value.trim();
            if (isRequired(phoneVal)) { // Modified this line
                showError(phone, 'Phone number cannot be blank.');
            } else if (!isNumeric(phoneVal)) {
                showError(phone, 'Phone number must contain only numeric characters.');
            } else {
                showSuccess(phone);
                valid = true;
            }
            return valid;
        };

        // Validate address
        const checkAddress = () => {
            let valid = false;
            const addressVal = address.value.trim();
            if (isRequired(addressVal)) {
                showError(address, 'Address cannot be blank.');
            } else {
                showSuccess(address);
                valid = true;
            }
            return valid;
        };

        // Validate program
        const checkProgram = () => {
            let valid = false;
            const programVal = program.value.trim();
            if (isRequired(programVal)) {
                showError(program, 'Program cannot be blank.');
            } else {
                showSuccess(program);
                valid = true;
            }
            return valid;
        };

        // Validate date of birth
        const checkDOB = () => {
            let valid = false;
            const dobVal = dob.value.trim();
            const dobDate = new Date(dobVal);
            const today = new Date();
            const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
            if (isRequired(dobVal)) { // Modified this line
                showError(dob, 'Date of Birth cannot be blank.');
            } else if (dobDate > eighteenYearsAgo) {
                showError(dob, 'You must be at least 18 years old.');
            } else {
                showSuccess(dob);
                valid = true;
            }
            return valid;
        };

        // Validate gender
        const checkGender = () => {
            let valid = false;
            const genderVal = gender.value.trim();
            if (isRequired(genderVal)) {
                showError(gender, 'Gender cannot be blank.');
            } else {
                showSuccess(gender);
                valid = true;
            }
            return valid;
        };

        // Check if a string contains only numeric characters
        const isNumeric = (str) => {
            return /^\d+$/.test(str);
        };

        togglePassword.addEventListener("click", function () {
            const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
            confirmPassword.setAttribute("type", type);
            this.classList.toggle("bi-eye");
        });

        // Modify submit event handler
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            let isUsernameValid = checkUsername(),
                isEmailValid = checkEmail(),
                isPasswordValid = checkPassword(),
                isConfirmPasswordValid = checkConfirmPassword(),
                isPhoneValid = checkPhoneNumber(),
                isAddressValid = checkAddress(),
                isProgramValid = checkProgram(),
                isDOBValid = checkDOB(),
                isGenderValid = checkGender(); // Add this line

            let isFormValid = isUsernameValid &&
                isEmailValid &&
                isPasswordValid &&
                isConfirmPasswordValid &&
                isPhoneValid &&
                isAddressValid &&
                isProgramValid &&
                isDOBValid &&
                isGenderValid; // Add this line

            if (isFormValid) {
                console.log('Form submitted successfully!');
                // Proceed with form submission
            } else {
                console.log('Form validation failed.');
                // Handle form validation errors
            }
        }); 