const masterclasses = [
  {
    date: "Tuesday, Dec 3",
    time: "07:30 PM",
    title: "Visa Mistakes to Avoid: Key Insights for Study Abroad Aspirants",
    by: "Harjeet Kaur",
    role: "Visa Expert",
    image:
      "https://www.upgrad.com/_ww3-next/image/?url=%20https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2Fweb%202-c24fa649433245ba80ca2ad6e186eace.jpg&w=1920&q=75",
    company:
      "https://www.upgrad.com/_ww3-next/image/?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2Fupgrad-6e6589f0f9774ca68d2398d2baec8984.png&w=256&q=75",
  },
  {
    date: "Thursday, Dec 5",
    time: "07:30 PM",
    title: "How to Approach a Social Media Strategy for 2025?",
    by: "Professor Siddharth Deshmukh",
    role: "Program Director - Digital Marketing MICA",
    image:
      "https://www.upgrad.com/_ww3-next/image/?url=%20https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FUntitled%20(400%20x%20200%20px)%20(5)-99707397ca064953a7fdd67acd486e0c.png&w=1920&q=75",
    company:
      "https://d2o2utebsixu4k.cloudfront.net/805%20X%202275-acb5d9427b69412a92a6ec0b8b612bf8.svg",
  },
  {
    date: "Friday, Dec 6",
    time: "07:30 PM",
    title: "What business leaders need to know about AI integration",
    by: "Dr. Dakshinamurthy V.",
    role: "Professor of Data Science, GGU",
    image:
      "https://www.upgrad.com/_ww3-next/image/?url=%20https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FUntitled%20(400%20x%20200%20px)%20(5)-6c36cfc376b04f9bbafae89694214e2b.png&w=1920&q=75",
    company:
      "https://d2o2utebsixu4k.cloudfront.net/805%20X%202275-c0be13a2ec4a48cca0037adf44659524.svg",
  },
];

const cardContainer = document.getElementById("cardContainer");

masterclasses.map((item, index) => {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-2xl flex-none flex flex-col gap-2 w-[18rem] sm:w-[20rem] md:w-[22rem]";

  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" class="rounded-t-2xl h-40 object-cover">
    <div class="p-4 flex flex-col flex-1">
      <p class="text-[#C70039] mb-1 text-xs font-semibold">${item.date} • ${item.time}</p>
      <h2 class="text-normal md:text-lg font-semibold mb-3">${item.title}</h2>

      <div class="flex justify-between h-full items-center">
      <div class="w-4 h-full mx-1.5 py-1">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
        <circle cx="10" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"></circle> 
        <path d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z" stroke="#1C274C" stroke-width="1.5"></path> 
        <path d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> 
        </g>
        </svg>
        </div>
        <div class="w-3/4">
          <p class="text-gray-700 truncate text-sm font-semibold">By ${item.by}</p>
          <p class="text-gray-800 text-xs">${item.role}</p>
        </div>
        <img src="${item.company}" alt="${item.title}" class="max-w-fit w-16 h-auto">
      </div>

      <div class="mt-4 flex gap-2">
        <button class="bg-white border border-gray-300 px-3 py-2 rounded-lg text-sm font-semibold">View Masterclass</button>
        <button class="bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-semibold flex-1">Register Now</button>
      </div>
    </div>
  `;
  cardContainer.appendChild(card);
});
