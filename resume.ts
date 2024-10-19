document.getElementById("resumeForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // getting element by id 
  
    const pictureElement=document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    const achivementsElement = document.getElementById(
      "achivements"
    ) as HTMLInputElement;
    const hobiesElement = document.getElementById(
      "hobies"
    ) as HTMLInputElement;
  
  
    if ( 
      pictureElement&&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      skillsElement &&
      experienceElement &&
      addressElement &&
      achivementsElement &&
      hobiesElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const skills = skillsElement.value;
      const experience = experienceElement.value;
      const address = addressElement.value;
      const achivements = achivementsElement.value;
      const hobies=hobiesElement.value;
      // picture file
  
      const pictureFile=pictureElement.files?.[0];
      const pictureFileURL=pictureFile ?URL.createObjectURL(pictureFile) : " ";
  
      // resume output
  
      const resumeOutput = `
  <h2>Resume</h2> 
  ${pictureFileURL ? `<img src="${pictureFileURL}" alt="Profile Picture" class="profilePicture">`: ' ' }
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>Address:</strong> ${address}</p>
  
  <h3>Education</h3>
  <p>${education}</p>
  
  <h3>Skills</h3>
  <p>${skills}</p>
  
  <h3>Experience</h3>
  <p>${experience}</p>
  
  <h3>Achiements</h3>
  <p>${achivements}</p>
  
  <h3>Hobies</h3>
  <p>${hobies}</p>
  
  `;
  
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
      } else {
        console.error(
          "The resume input fields looks like empty .Please fill out all fields."
        );
      }
    } else {
      console.error(
        "Its looks like any field is empty .Please fill out all fields"
      );
    }
  });
  