var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    // getting element by id 
    var pictureElement = document.getElementById('profilePicture');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    var addressElement = document.getElementById("address");
    var achivementsElement = document.getElementById("achivements");
    var hobiesElement = document.getElementById("hobies");
    if (pictureElement &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        skillsElement &&
        experienceElement &&
        addressElement &&
        achivementsElement &&
        hobiesElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var address = addressElement.value;
        var achivements = achivementsElement.value;
        var hobies = hobiesElement.value;
        // picture file
        var pictureFile = (_a = pictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var pictureFileURL = pictureFile ? URL.createObjectURL(pictureFile) : " ";
        // resume output
        var resumeOutput = "\n  <h2>Resume</h2> \n  ".concat(pictureFileURL ? "<img src=\"".concat(pictureFileURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : ' ', "\n  <p><strong>Name:</strong> ").concat(name_1, "</p>\n  <p><strong>Email:</strong> ").concat(email, "</p>\n  <p><strong>Phone:</strong> ").concat(phone, "</p>\n  <p><strong>Address:</strong> ").concat(address, "</p>\n  \n  <h3>Education</h3>\n  <p>").concat(education, "</p>\n  \n  <h3>Skills</h3>\n  <p>").concat(skills, "</p>\n  \n  <h3>Experience</h3>\n  <p>").concat(experience, "</p>\n  \n  <h3>Achiements</h3>\n  <p>").concat(achivements, "</p>\n  \n  <h3>Hobies</h3>\n  <p>").concat(hobies, "</p>\n  \n  ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume input fields looks like empty .Please fill out all fields.");
        }
    }
    else {
        console.error("Its looks like any field is empty .Please fill out all fields");
    }
});
