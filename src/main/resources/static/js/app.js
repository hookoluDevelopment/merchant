/*const API_BASE = '/api/auth';

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
}

async function handleSignup(event) {
    event.preventDefault();

    const pwd = document.getElementById('password').value;
    const confirmPwd = document.getElementById('confirmPassword').value;

    if (pwd !== confirmPwd) {
        alert('Password and Confirm Password do not match.');
        return;
    }

    const payload = {
        nameAsPerAadhaar: document.getElementById('nameAsPerAadhaar').value,
        panCardNo: document.getElementById('panCardNo').value,
        aadhaarNo: document.getElementById('aadhaarNo').value,
        mobileNo: document.getElementById('mobileNo').value,
        emailId: document.getElementById('emailId').value,
        age: parseInt(document.getElementById('age').value),
        bankAccountNo: document.getElementById('bankAccountNo').value,
        ifscCode: document.getElementById('ifscCode').value,
        presentAddress: document.getElementById('presentAddress').value,
        permanentAddress: document.getElementById('permanentAddress').value,
        password: pwd,
        confirmPassword: confirmPwd
    };

    const res = await fetch(`${API_BASE}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const data = await res.json();

        // Show notification with Username and Recovery metadata
        const summary = document.getElementById('credentials-summary');
        summary.innerHTML = `
            <li><strong>Assigned Username:</strong> ${data.username}</li>
            <li><strong>Date of Registration:</strong> ${data.registrationDate}</li>
            <li><strong>Age during Registration:</strong> ${data.ageAtRegistration}</li>
            <li><strong>Registered Phone Number:</strong> ${data.mobileNo}</li>
            <li><strong>Registered Email ID:</strong> ${data.emailId}</li>
        `;
        document.getElementById('totp-secret-key').innerText = data.totpSecret
		*/