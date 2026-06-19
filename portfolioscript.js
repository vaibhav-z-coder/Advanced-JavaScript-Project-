const teamMembers = [
      {
        name: "Vaibhav Singh",
        role: "Frontend Developer",
        avatar: "VS",
        skills: ["HTML", "CSS", "JavaScript", "UI Design"],
        github: "https://github.com/vaibhav-z-coder"
      },
      {
        name: "Adarsh Kumar Rai",
        role: "Quiz App Developer",
        avatar: "AD",
        skills: ["DOM", "State", "Events"],
        github: "https://github.com/Adarsh-Rai01"
      },
      {
        name: "Team Member 3",
        role: "Expense Tracker Developer",
        avatar: "T3",
        skills: ["CRUD", "localStorage", "Arrays"],
        github: "#"
      },
      {
        name: "Sajidul Islam",
        role: "Frontend & News API Developer",
        avatar: "AS",
        skills: ["HTML", "CSS", "JavaScript", "UI Design"],
        github: "https://github.com/sajidul11"
      },
      {
        name: "Team Member 5",
        role: "GitHub Explorer Developer",
        avatar: "T5",
        skills: ["REST API", "Sorting", "Rendering"],
        github: "#"
      },
      {
        name: "Team Member 6",
        role: "Kanban Board Developer",
        avatar: "T6",
        skills: ["Drag & Drop", "State", "Storage"],
        github: "#"
      }
    ];

    const projects = [
      {
        title: "Interactive Quiz App",
        type: "State & Logic",
        description: "A multiple-choice quiz app with running score, question state, feedback, and final percentage result.",
        link: "../quiz/index.html"
      },
      {
        title: "Expense Tracker",
        type: "CRUD & localStorage",
        description: "An income and expense manager with add, edit, delete, totals calculation, and persistent browser storage.",
        link: "../expense-tracker/index.html"
      },
      {
        title: "Live News Feed",
        type: "Async API Integration",
        description: "A news aggregator using async/await, loading states, error handling, search, and category filters.",
        link: "../news-feed/index.html"
      },
      {
        title: "GitHub Developer Explorer",
        type: "Multi Endpoint API",
        description: "A GitHub profile explorer that shows developer stats, repositories, sorting, and language breakdown.",
        link: "https://git-fetch-project.vercel.app/"
      },
      {
        title: "Kanban Task Board",
        type: "Drag & Drop State",
        description: "A Trello-style task board with create, edit, move, delete, drag and drop, and localStorage persistence.",
        link: "../kanban-board/index.html"
      },
      {
        title: "Team Agency Portfolio",
        type: "DOM & Layout",
        description: "A data-driven portfolio page with team cards, project showcase, theme toggle, and contact validation.",
        link: "#home"
      }
    ];

    const teamGrid = document.getElementById("teamGrid");
    const projectGrid = document.getElementById("projectGrid");
    const themeBtn = document.getElementById("themeBtn");
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const messageInput = document.getElementById("messageInput");
    const formMessage = document.getElementById("formMessage");

    function renderTeamMembers() {
      teamGrid.innerHTML = teamMembers.map(member => `
        <article class="member-card">
          <div class="avatar">${member.avatar}</div>
          <h3>${member.name}</h3>
          <p class="role">${member.role}</p>
          <p>Contributed to the capstone project through clean JavaScript logic, responsive UI, and project collaboration.</p>
          <div class="skills">
            ${member.skills.map(skill => `<span>${skill}</span>`).join("")}
          </div>
          <a class="card-link" href="${member.github}" target="_blank">GitHub Profile →</a>
        </article>
      `).join("");
    }

    function renderProjects() {
      projectGrid.innerHTML = projects.map(project => `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p class="project-type">${project.type}</p>
          <p>${project.description}</p>
          <a class="card-link" href="${project.link}">Open Project →</a>
        </article>
      `).join("");
    }

    function loadTheme() {
      const savedTheme = localStorage.getItem("portfolioTheme");
      if (savedTheme === "light") {
        document.body.classList.add("light-mode");
      }
    }

    themeBtn.addEventListener("click", function() {
      document.body.classList.toggle("light-mode");
      const currentTheme = document.body.classList.contains("light-mode") ? "light" : "dark";
      localStorage.setItem("portfolioTheme", currentTheme);
    });

    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill all fields before sending.";
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
      }

      formMessage.textContent = "Message sent successfully. Thank you!";
      contactForm.reset();
    });

    loadTheme();
    renderTeamMembers();
    renderProjects();
