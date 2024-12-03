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

masterclasses.forEach((item) => {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-2xl flex-none flex flex-col gap-2 w-[18rem] sm:w-[20rem] md:w-[22rem]";

  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" class="rounded-t-2xl h-40 object-cover">
    <div class="p-4 flex flex-col flex-1">
      <p class="text-[#C70039] mb-1 text-xs font-semibold">${item.date} • ${item.time}</p>
      <h2 class="text-normal md:text-lg font-semibold mb-3">${item.title}</h2>

      <div class="flex justify-between h-full items-center">
        <div class="w-1/2">
          <p class="text-gray-700 truncate text-sm font-semibold">By ${item.by}</p>
          <p class="text-gray-800 text-xs">${item.role}</p>
        </div>
        <img src="${item.company}" alt="${item.title}" class="w-16 h-auto">
      </div>

      <div class="mt-4 flex gap-2">
        <button class="bg-white border border-gray-300 px-3 py-2 rounded-lg text-sm font-semibold">View Masterclass</button>
        <button class="bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-semibold flex-1">Register Now</button>
      </div>
    </div>
  `;
  cardContainer.appendChild(card);
});
