document.getElementById("heart-1").addEventListener("click", function() {
  // console.log("heart clicked")
  const heartCount = parseInt(document.getElementById("heartCount").innerText)

  const clicked = heartCount + 1
  document.getElementById("heartCount").innerText = clicked

})

// copy Button control
document.getElementById("copybtn").addEventListener("click", function() {
  const copyCountNumber =parseInt(document.getElementById("copyCount").innerText)

  const totalCopy = copyCountNumber + 1
  document.getElementById("copyCount").innerText = totalCopy

})


// call Button ---> 1 
document.getElementById("callBtn1").addEventListener("click", function() {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName").innerText
  const serviceNumber = document.getElementById("serviceNumber").innerText
  const callHistory = document.getElementById("callHistory")

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

   const div = document.createElement("div");
  div.classList.add("border-b", "pb-2", "mb-2");
  div.innerHTML = `
    <p class="font-medium">${serviceName}</p>
    <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p>
  `;

  callHistory.prepend(div);
});

// call Button ---> 2 
document.getElementById("callBtn1").addEventListener("click", function() {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName").innerText
  const serviceNumber = document.getElementById("serviceNumber").innerText
  const callHistory = document.getElementById("callHistory")

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

   const div = document.createElement("div");
  div.classList.add("border-b", "pb-2", "mb-2");
  div.innerHTML = `
    <p class="font-medium">${serviceName}</p>
    <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p>
  `;

  callHistory.prepend(div);
});

// call Button ---> 3 
document.getElementById("callBtn1").addEventListener("click", function() {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName").innerText
  const serviceNumber = document.getElementById("serviceNumber").innerText
  const callHistory = document.getElementById("callHistory")

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

   const div = document.createElement("div");
  div.classList.add("border-b", "pb-2", "mb-2");
  div.innerHTML = `
    <p class="font-medium">${serviceName}</p>
    <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p>
  `;

  callHistory.prepend(div);
});

// call Button ---> 4 
document.getElementById("callBtn1").addEventListener("click", function() {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName").innerText
  const serviceNumber = document.getElementById("serviceNumber").innerText
  const callHistory = document.getElementById("callHistory")

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

   const div = document.createElement("div");
  div.classList.add("border-b", "pb-2", "mb-2");
  div.innerHTML = `
    <p class="font-medium">${serviceName}</p>
    <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p>
  `;

  callHistory.prepend(div);
});

// call Button ---> 5 
document.getElementById("callBtn1").addEventListener("click", function() {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName").innerText
  const serviceNumber = document.getElementById("serviceNumber").innerText
  const callHistory = document.getElementById("callHistory")

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

   const div = document.createElement("div");
  div.classList.add("border-b", "pb-2", "mb-2");
  div.innerHTML = `
    <p class="font-medium">${serviceName}</p>
    <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p>
  `;

  callHistory.prepend(div);
});

// call Button ---> 6 
document.getElementById("callBtn1").addEventListener("click", function() {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName").innerText
  const serviceNumber = document.getElementById("serviceNumber").innerText
  const callHistory = document.getElementById("callHistory")

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

   const div = document.createElement("div");
  div.classList.add("border-b", "pb-2", "mb-2");
  div.innerHTML = `
    <p class="font-medium">${serviceName}</p>
    <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p>
  `;

  callHistory.prepend(div);
});

// call Button ---> 7 
document.getElementById("callBtn1").addEventListener("click", function() {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName").innerText
  const serviceNumber = document.getElementById("serviceNumber").innerText
  const callHistory = document.getElementById("callHistory")

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

   const div = document.createElement("div");
  div.classList.add("border-b", "pb-2", "mb-2");
  div.innerHTML = `
    <p class="font-medium">${serviceName}</p>
    <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p>
  `;

  callHistory.prepend(div);
});

// call Button ---> 8 
document.getElementById("callBtn1").addEventListener("click", function() {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName").innerText
  const serviceNumber = document.getElementById("serviceNumber").innerText
  const callHistory = document.getElementById("callHistory")

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

   const div = document.createElement("div");
  div.classList.add("border-b", "pb-2", "mb-2");
  div.innerHTML = `
    <p class="font-medium">${serviceName}</p>
    <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p>
  `;

  callHistory.prepend(div);
});

// call Button ---> 9 
document.getElementById("callBtn1").addEventListener("click", function() {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName").innerText
  const serviceNumber = document.getElementById("serviceNumber").innerText
  const callHistory = document.getElementById("callHistory")

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

   const div = document.createElement("div");
  div.classList.add("border-b", "pb-2", "mb-2");
  div.innerHTML = `
    <p class="font-medium">${serviceName}</p>
    <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p>
  `;

  callHistory.prepend(div);
});

// Clear Button Click Event

document.getElementById("clearBtn").addEventListener("click", () => {
  callHistory.innerHTML = "";
});
















// // Call Button Click Event 
// callBtn1.addEventListener("click", function () { 
//   alert("Calling Emergency Number..."); 
//   // serviceName and serviceNumber copy 
//   const serviceName = document.getElementById("serviceName").innerText; 
//   const serviceNumber = document.getElementById("serviceNumber").innerText;
//    // time manage 
//    const now = new Date(); const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//     // History item 
//     const div = document.createElement("div"); 
//     div.classList.add("border-b", "pb-2", "mb-2"); 
//     div.innerHTML = `<p class="font-medium">${serviceName}</p> 
//     <p class="text-gray-500 text-xs">${serviceNumber} • ${time}</p> ; 
//     callHistory.prepend(div)`; });
    
//      // Clear Button Click Event 
//      clearBtn.addEventListener("click", () => {
//        callHistory.innerHTML = ""; 
//       })




