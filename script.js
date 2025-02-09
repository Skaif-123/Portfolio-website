document.getElementById('seeWork').addEventListener('click', () => {
   const contentDiv = document.getElementById('content');
   contentDiv.innerHTML = `
    <div class="mt-1">
      <h2 class="text-3xl text-black font-bold text-center">My Projects</h2>
      <p class="text-black text-center mt-2">
        Explore some of my projects that showcase my skills in front-end development and responsive design.
      </p>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        
        <!-- Card 1: Wallem Shipmanagement Website -->
        <div class="card bg-white border border-black rounded-lg overflow-hidden">
          <a href="https://skaif-123.github.io/Wallem-Shipmanagement-website/" target="_blank">
            <img src="./img/wallem%20website.JPG" alt="Wallem Shipmanagement Website" class="w-full h-48 object-cover border-b border-black">
          </a>
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Wallem Shipmanagement Website</h2>
            <p class="text-gray-600 mt-2">
              A visually appealing website for a shipping company, showcasing services and company information.
            </p>
            <span class="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">
              Mobile Responsive
            </span>
            <a href="https://github.com/Skaif-123/Wallem-Shipmanagement-website" target="_blank" 
               class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Visit Repo
            </a>
          </div>
        </div>

        <!-- Card 2: StudySync Project -->
        <div class="card bg-white border border-black rounded-lg overflow-hidden">
          <a href="https://skaif-123.github.io/StudySync-Project/" target="_blank">
            <img src="./img/studySync.JPG" alt="StudySync Project" class="w-full h-48 object-cover border-b border-black">
          </a>
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">StudySync Project</h2>
            <p class="text-gray-600 mt-2">
              A simple web project demonstrating clean UI design and responsive layouts for study resources.
            </p>
            <span class="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">
              Mobile Responsive
            </span>
            <a href="https://github.com/Skaif-123/StudySync-Project" target="_blank" 
               class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Visit Repo
            </a>
          </div>
        </div>

        <!-- Card 3: Educational Website -->
        <div class="card bg-white border border-black rounded-lg overflow-hidden">
          <a href="https://skaif-123.github.io/EducationalWebsite/" target="_blank">
            <img src="./img/educational.JPG" alt="Educational Website" class="w-full h-48 object-cover border-b border-black">
          </a>
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Educational Website</h2>
            <p class="text-gray-600 mt-2">
              A basic educational website featuring static pages with a clean and responsive design.
            </p>
            <span class="inline-block mt-2 px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm">
              Desktop-only
            </span>
            <a href="https://github.com/Skaif-123/EducationalWebsite" target="_blank" 
               class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Visit Repo
            </a>
          </div>
        </div>

        <!-- Card 4: Semantic Web Project -->
        <div class="card bg-white border border-black rounded-lg overflow-hidden">
          <a href="https://skaif-123.github.io/Website-using-semantic-Tags/" target="_blank">
            <img src="./img/semantic.JPG" alt="Semantic Web Project" class="w-full h-48 object-cover border-b border-black">
          </a>
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Semantic Web Project</h2>
            <p class="text-gray-600 mt-2">
              A practice project focusing on semantic HTML5 tags for accessibility and clean code structure.
            </p>
            <span class="inline-block mt-2 px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm">
              Desktop-only
            </span>
            <a href="https://github.com/Skaif-123/Website-using-semantic-Tags" target="_blank" 
               class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Visit Repo
            </a>
          </div>
        </div>

        <!-- Card 5: NutriDelight DryFruit Shop -->
        <div class="card bg-white border border-black rounded-lg overflow-hidden">
          <a href="https://skaif-123.github.io/NutriDelight-DryFruit-Shop/" target="_blank">
            <img src="./img/dryfruits.JPG" alt="NutriDelight DryFruit Shop" class="w-full h-48 object-cover border-b border-black">
          </a>
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">NutriDelight DryFruit Shop</h2>
            <p class="text-gray-600 mt-2">
              A simple e-commerce UI for displaying dry fruits with a visually appealing design.
            </p>
            <span class="inline-block mt-2 px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm">
              Desktop-only
            </span>
            <a href="https://github.com/Skaif-123/NutriDelight-DryFruit-Shop" target="_blank" 
               class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Visit Repo
            </a>
          </div>
        </div>

        <!-- Card 6: Task Manager Project -->
        <div class="card bg-white border border-black rounded-lg overflow-hidden">
          <a href="https://github.com/Skaif-123/Task-Manager-project" target="_blank">
            <img src="./img/taskmanager.JPG" alt="Task Manager Project" class="w-full h-48 object-cover border-b border-black">
          </a>
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Task Manager Project</h2>
            <p class="text-gray-600 mt-2">
              A basic task management tool with a simple UI for adding and organizing tasks.
            </p>
            <span class="inline-block mt-2 px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm">
              Desktop-only
            </span>
            <a href="https://github.com/Skaif-123/Task-Manager-project" target="_blank" 
               class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Visit Repo
            </a>
          </div>
        </div>

      </div>
    </div>
  `;
});
