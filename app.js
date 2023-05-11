const jobData = [
    {
        companyName: "Academic Success Center",
        title: "Computer Science Tutor",
        date: "Aug 2022 - Present",
        description: [
            "Student tutoring at university, focusing on helping young developers in computer science",
            "Experienced how to work with many different types of learners and people in a programming context, and further solidified my fundamentals in programming",
            "Gained valuable experience in teaching and mentoring, which has helped me to better understand and communicate complex concepts to others."
        ],
    },
    {
        companyName: "Oakmont",
        title: "Audio Video Technician",
        date: "Aug 2019 - Jun 2020",
        description: [
            "Developed a proficiency in operating and maintaining audio and video equipment.",
            "Experience setting up and troubleshooting audio and video systems for live events, conferences and corporate meetings.",
            "Skilled in signal routing, audio mixing, and video switching, and effectively communicating with clients and team members while preparing and managing large events."
        ],
    },
];


document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const closeButtons = document.querySelectorAll(".close");
  
    projectItems.forEach(item => {
      item.addEventListener("click", () => {
        const modal = item.querySelector(".project-modal");
        modal.style.display = "block";
      });
    });
  
    closeButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const modal = button.closest(".project-modal");
        modal.style.display = "none";
        e.stopPropagation();
      });
    });
  
    window.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        document.querySelectorAll(".project-modal").forEach(modal => {
          modal.style.display = "none";
        });
      }
    });
  
    // Replace the window click event listener with the following code
    document.querySelectorAll(".project-modal").forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });
    });
  });


  window.addEventListener('DOMContentLoaded', (event) => {
    var navIcon = document.getElementById('nav-icon');
    var navLinks = document.getElementById('nav-links');

    navIcon.addEventListener('click', function() {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            navIcon.classList.remove('rotate');
        } else {
            navLinks.classList.add('show');
            navIcon.classList.add('rotate');
        }
    });

    var links = navLinks.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            navLinks.classList.remove('show');
            navIcon.classList.remove('rotate');
        });
    }
});