// heart button control start from here
document.getElementById("heart-1").addEventListener("click", function () {
  const heartCount = parseInt(document.getElementById("heartCount").innerText)

  const clicked = heartCount + 1
  document.getElementById("heartCount").innerText = clicked

})

document.getElementById("heart-2").addEventListener("click", function () {
  const heartCount = parseInt(document.getElementById("heartCount").innerText)

  const clicked = heartCount + 1
  document.getElementById("heartCount").innerText = clicked

})

document.getElementById("heart-3").addEventListener("click", function () {
  const heartCount = parseInt(document.getElementById("heartCount").innerText)

  const clicked = heartCount + 1
  document.getElementById("heartCount").innerText = clicked

})

document.getElementById("heart-4").addEventListener("click", function () {
  const heartCount = parseInt(document.getElementById("heartCount").innerText)

  const clicked = heartCount + 1
  document.getElementById("heartCount").innerText = clicked

})

document.getElementById("heart-5").addEventListener("click", function () {
  const heartCount = parseInt(document.getElementById("heartCount").innerText)

  const clicked = heartCount + 1
  document.getElementById("heartCount").innerText = clicked

})

document.getElementById("heart-6").addEventListener("click", function () {
  const heartCount = parseInt(document.getElementById("heartCount").innerText)

  const clicked = heartCount + 1
  document.getElementById("heartCount").innerText = clicked

})

document.getElementById("heart-7").addEventListener("click", function () {
  const heartCount = parseInt(document.getElementById("heartCount").innerText)

  const clicked = heartCount + 1
  document.getElementById("heartCount").innerText = clicked

})

document.getElementById("heart-8").addEventListener("click", function () {
  const heartCount = parseInt(document.getElementById("heartCount").innerText)

  const clicked = heartCount + 1
  document.getElementById("heartCount").innerText = clicked

})

document.getElementById("heart-9").addEventListener("click", function () {
  const heartCount = parseInt(document.getElementById("heartCount").innerText)

  const clicked = heartCount + 1
  document.getElementById("heartCount").innerText = clicked

})






// copy Button control
document.getElementById("copybtn1").addEventListener("click", function () {
  const copyCountNumber = parseInt(document.getElementById("copyCount").innerText)

  const totalCopy = copyCountNumber + 1
  document.getElementById("copyCount").innerText = totalCopy

})

document.getElementById("copybtn2").addEventListener("click", function () {
  const copyCountNumber = parseInt(document.getElementById("copyCount").innerText)

  const totalCopy = copyCountNumber + 1
  document.getElementById("copyCount").innerText = totalCopy

})

document.getElementById("copybtn3").addEventListener("click", function () {
  const copyCountNumber = parseInt(document.getElementById("copyCount").innerText)

  const totalCopy = copyCountNumber + 1
  document.getElementById("copyCount").innerText = totalCopy

})

document.getElementById("copybtn4").addEventListener("click", function () {
  const copyCountNumber = parseInt(document.getElementById("copyCount").innerText)

  const totalCopy = copyCountNumber + 1
  document.getElementById("copyCount").innerText = totalCopy

})

document.getElementById("copybtn5").addEventListener("click", function () {
  const copyCountNumber = parseInt(document.getElementById("copyCount").innerText)

  const totalCopy = copyCountNumber + 1
  document.getElementById("copyCount").innerText = totalCopy

})

document.getElementById("copybtn6").addEventListener("click", function () {
  const copyCountNumber = parseInt(document.getElementById("copyCount").innerText)

  const totalCopy = copyCountNumber + 1
  document.getElementById("copyCount").innerText = totalCopy

})

document.getElementById("copybtn7").addEventListener("click", function () {
  const copyCountNumber = parseInt(document.getElementById("copyCount").innerText)

  const totalCopy = copyCountNumber + 1
  document.getElementById("copyCount").innerText = totalCopy

})

document.getElementById("copybtn8").addEventListener("click", function () {
  const copyCountNumber = parseInt(document.getElementById("copyCount").innerText)

  const totalCopy = copyCountNumber + 1
  document.getElementById("copyCount").innerText = totalCopy

})

document.getElementById("copybtn9").addEventListener("click", function () {
  const copyCountNumber = parseInt(document.getElementById("copyCount").innerText)

  const totalCopy = copyCountNumber + 1
  document.getElementById("copyCount").innerText = totalCopy

})







// call Button ---> 1 
document.getElementById("callBtn1").addEventListener("click", function () {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName").innerText
  const serviceNumber = document.getElementById("serviceNumber").innerText
  const callHistory = document.getElementById("callHistory")

  const CoinNumber = parseInt(document.getElementById("coin").innerText)
  const TotalNumber = CoinNumber - 20
  document.getElementById("coin").innerText = TotalNumber;
  if(TotalNumber < 0) {
    alert("You have no Balance")
    document.getElementById("coin").innerText = 0
    return;
  }

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
document.getElementById("callBtn2").addEventListener("click", function () {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName-2").innerText
  const serviceNumber = document.getElementById("serviceNumber-2").innerText
  const callHistory = document.getElementById("callHistory")

  const CoinNumber = parseInt(document.getElementById("coin").innerText)
  const TotalNumber = CoinNumber - 20
  document.getElementById("coin").innerText = TotalNumber;

  if(TotalNumber < 0) {
    alert("You have no Balance")
    document.getElementById("coin").innerText = 0
    return;
  }

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
document.getElementById("callBtn3").addEventListener("click", function () {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName-3").innerText
  const serviceNumber = document.getElementById("serviceNumber-3").innerText
  const callHistory = document.getElementById("callHistory")

  const CoinNumber = parseInt(document.getElementById("coin").innerText)
  const TotalNumber = CoinNumber - 20
  document.getElementById("coin").innerText = TotalNumber;

  if(TotalNumber < 0) {
    alert("You have no Balance")
    document.getElementById("coin").innerText = 0
    return;
  }

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
document.getElementById("callBtn4").addEventListener("click", function () {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName-4").innerText
  const serviceNumber = document.getElementById("serviceNumber-4").innerText
  const callHistory = document.getElementById("callHistory")

  const CoinNumber = parseInt(document.getElementById("coin").innerText)
  const TotalNumber = CoinNumber - 20
  document.getElementById("coin").innerText = TotalNumber;

  if(TotalNumber < 0) {
    alert("You have no Balance")
    document.getElementById("coin").innerText = 0
    return;
  }

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
document.getElementById("callBtn5").addEventListener("click", function () {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName-5").innerText
  const serviceNumber = document.getElementById("serviceNumber-5").innerText
  const callHistory = document.getElementById("callHistory")

  const CoinNumber = parseInt(document.getElementById("coin").innerText)
  const TotalNumber = CoinNumber - 20
  document.getElementById("coin").innerText = TotalNumber;

  if(TotalNumber < 0) {
    alert("You have no Balance")
    document.getElementById("coin").innerText = 0
    return;
  }

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
document.getElementById("callBtn6").addEventListener("click", function () {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName-6").innerText
  const serviceNumber = document.getElementById("serviceNumber-6").innerText
  const callHistory = document.getElementById("callHistory")

  const CoinNumber = parseInt(document.getElementById("coin").innerText)
  const TotalNumber = CoinNumber - 20
  document.getElementById("coin").innerText = TotalNumber;

  if(TotalNumber < 0) {
    alert("You have no Balance")
    document.getElementById("coin").innerText = 0
    return;
  }

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
document.getElementById("callBtn7").addEventListener("click", function () {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName-7").innerText
  const serviceNumber = document.getElementById("serviceNumber-7").innerText
  const callHistory = document.getElementById("callHistory")

  const CoinNumber = parseInt(document.getElementById("coin").innerText)
  const TotalNumber = CoinNumber - 20
  document.getElementById("coin").innerText = TotalNumber;

  if(TotalNumber < 0) {
    alert("You have no Balance")
    document.getElementById("coin").innerText = 0
    return;
  }

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
document.getElementById("callBtn8").addEventListener("click", function () {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName-8").innerText
  const serviceNumber = document.getElementById("serviceNumber-8").innerText
  const callHistory = document.getElementById("callHistory")

  const CoinNumber = parseInt(document.getElementById("coin").innerText)
  const TotalNumber = CoinNumber - 20
  document.getElementById("coin").innerText = TotalNumber;

  if(TotalNumber < 0) {
    alert("You have no Balance")
    document.getElementById("coin").innerText = 0
    return;
  }

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
document.getElementById("callBtn9").addEventListener("click", function () {
  alert("Calling Emergency Number...")

  const serviceName = document.getElementById("serviceName-9").innerText
  const serviceNumber = document.getElementById("serviceNumber-9").innerText
  const callHistory = document.getElementById("callHistory")

  // (-) 20 coin per call
  const CoinNumber = parseInt(document.getElementById("coin").innerText)
  const TotalNumber = CoinNumber - 20
  document.getElementById("coin").innerText = TotalNumber;

  if(TotalNumber < 0) {
    alert("You have no Balance")
    document.getElementById("coin").innerText = 0
    return;
  }


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
