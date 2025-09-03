  // এলিমেন্টগুলো নাও
  const callBtn1 = document.getElementById("callBtn1");
  const callHistory = document.getElementById("callHistory");
  const clearBtn = document.querySelector(".col-span-1 button"); // Clear button ধরলাম

  // Call Button Click Event
  callBtn1.addEventListener("click", function () {
    alert("Calling Emergency Number...");

    // serviceName এবং serviceNumber নাও
    const serviceName = document.getElementById("serviceName").innerText;
    const serviceNumber = document.getElementById("serviceNumber").innerText;

    // সময় বের করো
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // History item বানাও
    const div = document.createElement("div");
    div.classList.add("border-b", "pb-2", "mb-2");
    div.innerHTML = `
      <p class="font-medium">${serviceName}</p>
      <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p>
    `;

    // উপরে add করো
    callHistory.prepend(div);
  });

  // Clear Button Click Event
  clearBtn.addEventListener("click", () => {
    callHistory.innerHTML = "";
  });
