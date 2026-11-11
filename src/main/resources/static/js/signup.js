document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');

    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            nameAsPerAadhaar: document.getElementById('nameAsPerAadhaar').value,
            panCardNo: document.getElementById('panCardNo').value,
            aadhaarNo: document.getElementById('aadhaarNo').value,
            mobileNo: document.getElementById('mobileNo').value,
            email: document.getElementById('email').value,
            bankAccountNo: document.getElementById('bankAccountNo').value,
            ifscCode: document.getElementById('ifscCode').value,
            presentAddress: document.getElementById('presentAddress').value,
            permanentAddress: document.getElementById('permanentAddress').value,
            age: parseInt(document.getElementById('age').value, 10),
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value
        };

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                signUpForm.style.display = 'none';

                const successBox = document.getElementById('registrationSuccess');
                successBox.style.display = 'block';

                document.getElementById('outUsername').innerText = result.username;
                document.getElementById('outRegDate').innerText = result.dateOfRegistration;
                document.getElementById('outAge').innerText = result.age;
                document.getElementById('outPhone').innerText = result.phone;
                document.getElementById('outEmail').innerText = result.email;
                document.getElementById('qrCodeImg').src = result.qrCodeUrl;
            } else {
                const error = await response.json();
                alert('Registration Failed: ' + (error.message || 'Check input fields.'));
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            alert('Unable to connect to the server.');
        }
    });
});