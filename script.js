// Sample data initialization
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([
        { id: 1, name: 'Admin User', email: 'admin@example.com', password: 'admin', role: 'admin' },
        { id: 2, name: 'Student User', email: 'student@example.com', password: 'student', role: 'student' },
        { id: 3, name: 'Faculty User', email: 'faculty@example.com', password: 'faculty', role: 'faculty' }
    ]));
}
if (!localStorage.getItem('students')) {
    localStorage.setItem('students', JSON.stringify([
        { id: 1, name: 'John Doe', email: 'john@example.com', attendance: ['Present', 'Absent'], grades: ['A', 'B'] }
    ]));
}
if (!localStorage.getItem('faculty')) {
    localStorage.setItem('faculty', JSON.stringify([
        { id: 1, name: 'Dr. Smith', email: 'smith@example.com', subjects: ['Math', 'Science'] }
    ]));
}
if (!localStorage.getItem('courses')) {
    localStorage.setItem('courses', JSON.stringify([
        { id: 1, name: 'Computer Science' }
    ]));
}

// Utility functions
function showNotification(message, type = 'success') {
    const notif = document.getElementById('notification');
    notif.textContent = message;
    notif.className = `notification ${type}`;
    notif.classList.remove('hidden');
    setTimeout(() => notif.classList.add('hidden'), 3000);
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Login/Registration Logic (for index.html)
if (document.getElementById('loginBtn')) {
    document.getElementById('loginTab').addEventListener('click', () => {
        document.getElementById('loginForm').classList.remove('hidden');
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('loginTab').classList.add('active');
        document.getElementById('registerTab').classList.remove('active');
    });
    document.getElementById('registerTab').addEventListener('click', () => {
        document.getElementById('registerForm').classList.remove('hidden');
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('registerTab').classList.add('active');
        document.getElementById('loginTab').classList.remove('active');
    });

    document.getElementById('loginBtn').addEventListener('click', () => {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const role = document.getElementById('loginRole').value;
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.email === email && u.password === password && u.role === role);
        if (user) {
            setCurrentUser(user);
            window.location.href = `${role}.html`;
        } else {
            showNotification('Invalid credentials', 'error');
        }
    });

    document.getElementById('registerBtn').addEventListener('click', () => {
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const role = document.getElementById('regRole').value;
        const users = JSON.parse(localStorage.getItem('users'));
        users.push({ id: users.length + 1, name, email, password, role });
        localStorage.setItem('users', JSON.stringify(users));
        showNotification('Registration successful');
    });
}

// Dashboard Logic (shared across pages)
if (document.querySelector('.sidebar')) {
    const user = getCurrentUser();
    if (!user) window.location.href = 'index.html';

    document.getElementById('logout').addEventListener('click', logout);

    // Navigation
    document.querySelectorAll('.sidebar a:not(#logout)').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
            document.getElementById(link.getAttribute('href').substring(1)).classList.remove('hidden');
        });
    });

    // Role-specific logic
    if (window.location.pathname.includes('student.html')) {
        const students = JSON.parse(localStorage.getItem('students'));
        const student = students.find(s => s.email === user.email);
        document.getElementById('studentInfo').textContent = `Name: ${student.name}, Email: ${student.email}`;
        document.getElementById('attendanceList').innerHTML = student.attendance.map(a => `<li>${a}</li>`).join('');
        document.getElementById('gradesList').innerHTML = student.grades.map(g => `<li>${g}</li>`).join('');
    } else if (window.location.pathname.includes('faculty.html')) {
        const faculty = JSON.parse(localStorage.getItem('faculty'));
        const fac = faculty.find(f => f.email === user.email);
        document.getElementById('facultyInfo').textContent = `Name: ${fac.name}, Subjects: ${fac.subjects.join(', ')}`;
        document.getElementById('subjectsList').innerHTML = fac.subjects.map(s => `<li>${s}</li>`).join('');
        // Add grade/attendance logic here (simplified)
    } else if (window.location.pathname.includes('admin.html')) {
        const users = JSON.parse(localStorage.getItem('users'));
        const students = JSON.parse(localStorage.getItem('students'));
        const faculty = JSON.parse(localStorage.getItem('faculty'));
        const courses = JSON.parse(localStorage.getItem('courses'));
    }
        document.getElementById('usersList').innerHTML = users.map(u => `<li>${u.name} (${u.role})</li>`).join('');
            document.getElementById('studentsList').innerHTML = students.map(s => `<li>${s.name)}