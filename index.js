var inputcontainer = document.getElementById("input-container");

var addBtn = document.getElementById("addBtn");
var formBackground = document.getElementById("formBackground");
var Close = document.querySelectorAll(".close");
var formpic = document.getElementById("formpic");
var formicon = document.getElementById("formicon");
var formimg = document.getElementById("formimg");
var photoInput = document.getElementById("photoInput");
var fullName = document.getElementById("fullName");
var PhoneNumber = document.getElementById("PhoneNumber");
var email = document.getElementById("email");
var address = document.getElementById("address");
var group = document.getElementById("group");
var notes = document.getElementById("notes");
var isfavourite = document.getElementById("isfavourite");
var isemergency = document.getElementById("isemergency");
var SaveContact = document.getElementById("SaveContact");
var Saveedit = document.getElementById("Saveedit");
var nocontact = document.getElementById("nocontact");
var favourite = document.getElementById("favourite");
var emergency = document.getElementById("emergency");
var totalContacts = document.getElementById("totalContacts");
var totalcontactsnum = document.getElementById("totalcontactsnum");
var contactsCard = document.getElementById("contactsCard");
var contactsCardchild = document.getElementById("contactsCardchild");
var favouriteshortcut = document.getElementById("favouriteshortcut");
var nofavouriteshortcut = document.getElementById("nofavouriteshortcut");
var emergencyshortcut = document.getElementById("emergencyshortcut");
var noemergencyshortcut = document.getElementById("noemergencyshortcut");
var inputSearch = document.getElementById("inputSearch");
var contactlist;

if (localStorage.getItem("contacts") == null) {
  contactlist = [];
} else {
  contactlist = JSON.parse(localStorage.getItem("contacts"));
  displayContactCard(contactlist);
}

function displayContactCard(list) {
  var container = "";
  if (list.length > 0) {
    for (var i = 0; i < list.length; i++) {
      var starColor = list[i].isfavourite
        ? "text-yellow bg-lightyellow"
        : "text-gray bg-transparent";
      if (list[i].isfavourite == true) {
        var solidstar = "d-block";
        var star = "d-none";
      } else {
        var star = "d-block";
        var solidstar = "d-none";
      }
      var heartColor = list[i].isemergency
        ? "text-red bg-lightred"
        : "text-gray bg-transparent";
      if (list[i].isemergency == true) {
        var heartNotify = "d-bloc";
      } else {
        var heartNotify = "d-none";
      }
      if (list[i].isfavourite == true) {
        var starNotify = "d-bloc";
      } else {
        var starNotify = "d-none";
      }
     var showlocation = list[i].address ? "d-block" : "d-none";
     var showemail = list[i].email ? "d-block" : "d-none";
      var showemergencyword = list[i].isemergency ? "d-block" : "d-none";
      var bgGroup = "";
      var textcolorGroup = "";
      var showgrouptype = "";
      if (list[i].group != null && list[i].group !== "") {
        showgrouptype = "d-block";
        if (list[i].group == "Friends") {
          bgGroup = "bg-lightgreen";
          textcolorGroup = "text-green";
        }
        if (list[i].group == "School") {
          bgGroup = "bg-lightyellow";
          textcolorGroup = "text-danger";
        }
        if (list[i].group == "Family") {
          bgGroup = "bg-lightblue";
          textcolorGroup = "text-blue";
        }
        if (list[i].group == "Work") {
          bgGroup = "bg-lightpurple";
          textcolorGroup = "text-purple";
        }
        if (list[i].group == "other") {
          bgGroup = "bg-lightgray";
          textcolorGroup = "text-gray";
        }
      } else {
        showgrouptype = "d-none";
      }

      var firstchar = list[i].fullName.slice(0, 1).toUpperCase();
      if (!list[i].img.startsWith("images/")) {
        var displaycharacter = "d-flex";
        var displayimg = "d-none";
        var bgcolor = list[i].img;
      } else {
        var displaycharacter = "d-none";
        var displayimg = "d-block";
        var bgcolor = "";
      }
      container += `<div class="col-12 col-md-6  px-2">
            <div class="border border-gray border-3 p-3 rounded-4 bg-white h-full d-flex flex-column box-shadow-hover h-100">
                <div class="d-flex column-gap-2">
                    <div class="position-relative pt-2 ">
                    <div class="contactimg-square ${bgcolor} justify-content-center align-items-center rounded-3 fw-bold text-white fs-5 ${displaycharacter}">
                    ${firstchar}
                    </div>
                    <div class="contactimg-square bg-blue rounded-3 overflow-hidden fw-meduim ${displayimg}  fs-2 z-0">
                    <img src="${list[i].img}" class="w-100">
                    </div>
                    <span class="position-absolute bottom-0 end-0 bg-softred notification-square rounded-circle d-flex justify-content-center align-items-center border border-white border-2 translate-notify-icon ${heartNotify} "><i class="fa-solid fa-heart-pulse small-icon text-white text-notification"></i></span>
                    <span class="position-absolute top-0 end-0 bg-yellow notification-square rounded-circle d-flex justify-content-center align-items-center border border-white border-2 translate-notify-icon ${starNotify} "><i class="fa-solid fa-star small-icon text-white text-notification"></i></span>
                    </div>
                    <div>
                        <p class="mb-1 ms-2 fw-500 fs-5">${list[i].fullName}</p>
                        <p class="my-0 d-flex justify-content-center align-items-center px-2">

                            <span
                                class="iconcontact-square d-flex justify-content-center align-items-center rounded-2 bg-lightblue me-2">
                                <i class="fa-solid fa-phone text-blue small-icon"></i>
                            </span>

                            <span class="fit-content card-info-size text-gray">${list[i].PhoneNumber}</span>
                        </p>
                    </div>
                </div>
                <p class="my-2 d-flex align-items-center column-gap-2 card-info-size text-gray ${showemail}">
                    <span
                        class="iconcontact-square  d-flex justify-content-center align-items-center bg-lightpurple rounded-2">
                        <i class="fa-solid fa-envelope text-purple small-icon"></i>
                    </span>
                    ${list[i].email}
                </p>
                <p class="my-2 d-flex align-items-center column-gap-2 card-info-size text-gray ${showlocation}">
                    <span
                        class="iconcontact-square  d-flex justify-content-center align-items-center bg-lightgreen rounded-2">
                        <i class="fa-solid fa-location-dot text-green small-icon"></i>
                    </span>
                    ${list[i].address}
                </p>
                 <div class="d-flex column-gap-2">
                  <div class="${textcolorGroup} fit-content ${bgGroup} fs-small my-3 rounded-1 px-1 ${showgrouptype}">
                    ${list[i].group}
                    </div>
                 <div class="text-red fit-content bg-lightred fs-small my-3 rounded-1 px-1 ${showemergencyword}">
                    <i class="fa-solid fa-heart-pulse"></i>  Emergency
                    </div>
                 </div>
                
                <div class="d-flex justify-content-between align-items-center mt-auto ">
                    <div class="d-flex align-items-center">
                        <span
                            class="iconcontact-square d-flex justify-content-center align-items-center rounded-2 bg-lightgreen me-2">
                            <i class="fa-solid fa-phone text-green small-icon"></i>
                        </span>
                        <span
                            class="iconcontact-square  d-flex justify-content-center align-items-center bg-lightpurple rounded-2">
                            <i class="fa-solid fa-envelope text-purple small-icon"></i>
                        </span>
                    </div>
                    <div class="d-flex justify-content-center align-items-center column-gap-2">
                        <button onclick="togglefavourite(${i})" class="iconcontact-square  justify-content-center border-0 align-items-center rounded-2 star-hover ${starColor} "><i class="fa-regular fa-star ${star} small-icon"></i><i class="fa-solid fa-star ${solidstar} small-icon"></i></button>
                        <button onclick="toggleEmergency(${i})" class="iconcontact-square justify-content-center border-0 align-items-center rounded-2 emergency-hover ${heartColor} "> <i class="fa-solid fa-heart-pulse small-icon"></i></button>
                        <button onclick="openeditform(${list[i].id})" class="iconcontact-square  bg-transparent justify-content-center border-0 text-gray edit-hover align-items-center rounded-2"><i class="fa-solid fa-pen small-icon"></i></button>
                        <button onclick="deletecontact(${list[i].id})" class="iconcontact-square border-0 d-flex justify-content-center  bg-transparent text-gray align-items-center rounded-2 emergency-hover"><i class="fa-solid fa-trash small-icon"></i></button>
                    </div>
                </div>
            </div>
        </div>`;
    }
    nocontact.classList.replace("d-flex", "d-none");
    contactsCard.classList.replace("d-none", "d-flex");
    contactsCardchild.innerHTML = container;
  } else {
    contactsCardchild.innerHTML = "";
    contactsCard.classList.replace("d-block", "d-none");
    nocontact.classList.replace("d-none", "d-flex");
  }
  totalfavourite();
  totalemergency();
  displayfavouriteshortcut();
  displayemergencyshortcut();
  totalcontacts(list.length);
  console.log(list);
}
function displayfavouriteshortcut() {
  var favouriteshortcutcontainer = ``;
  var favcount = totalfavourite();
  if (favcount > 0) {
    for (var i = 0; i < contactlist.length; i++) {
      if (contactlist[i].isfavourite == true) {
        var firstchar = contactlist[i].fullName.slice(0, 1).toUpperCase();
        if (!contactlist[i].img.startsWith("images/")) {
          var displaycharacter = "d-flex";
          var displayimg = "d-none";
          var bgcolor = contactlist[i].img;
        } else {
          var displaycharacter = "d-none";
          var displayimg = "d-block";
          var bgcolor = "";
        }
        favouriteshortcutcontainer += `
                             <div class="d-flex justify-content-between py-2 px-3 col-lg-12 col-md-6 col-12 bg-meduimgray rounded-3 cursor-pointer favshortcut-hover">
                                <div class="d-flex column-gap-2">
                                   
                                   <div class="square-meduim ${bgcolor} justify-content-center align-items-center rounded-3 fw-bold text-white fs-5 ${displaycharacter}">
                                         ${firstchar}
                                        </div>
                                  <div class="square-meduim  rounded-3 overflow-hidden fw-meduim ${displayimg}  fs-2">
                                     <img src="${contactlist[i].img}" class="w-100">
                                  </div>
                                    <div>
                                        <p class="my-0">${contactlist[i].fullName}</p>
                                        <p class="my-0 text-gray shortcut-fs-size">${contactlist[i].PhoneNumber}</p>
                                    </div>
                                </div>
                                <div
                                    class="small-suare bg-lightgreen d-flex justify-content-center align-items-center rounded-2 cursor-pointer">
                                    <i class="fa-solid fa-phone text-green small-icon"></i>
                                </div>
                            </div>
     `;
      }
    }
    favouriteshortcut.innerHTML = favouriteshortcutcontainer;
    nofavouriteshortcut.classList.replace("d-block", "d-none");
    favouriteshortcut.classList.replace("d-none", "d-block");
  } else {
    favouriteshortcutcontainer = ``;
    nofavouriteshortcut.classList.replace("d-none", "d-block");
    favouriteshortcut.classList.replace("d-block", "d-none");
  }
}
function displayemergencyshortcut() {
  var emergencyshortcutcontainer = ``;
  var emergencycount = totalemergency();
  if (emergencycount > 0) {
    for (var i = 0; i < contactlist.length; i++) {
      if (contactlist[i].isemergency == true) {
        var firstchar = contactlist[i].fullName.slice(0, 1).toUpperCase();
        if (!contactlist[i].img.startsWith("images/")) {
          var displaycharacter = "d-flex";
          var displayimg = "d-none";
          var bgcolor = contactlist[i].img;
        } else {
          var displaycharacter = "d-none";
          var displayimg = "d-block";
          var bgcolor = "";
        }
        emergencyshortcutcontainer += `
                             <div class="d-flex justify-content-between py-2 px-3 col-lg-12 col-md-6 col-12 bg-meduimgray rounded-3 cursor-pointer emergencyshortcut-hover">
                                <div class="d-flex column-gap-2">
                                   
                                   <div class="square-meduim ${bgcolor} justify-content-center align-items-center rounded-3 fw-bold text-white fs-5 ${displaycharacter}">
                                         ${firstchar}
                                        </div>
                                  <div class="square-meduim  rounded-3 overflow-hidden fw-meduim ${displayimg}  fs-2">
                                     <img src="${contactlist[i].img}" class="w-100">
                                  </div>
                                    <div>
                                        <p class="my-0">${contactlist[i].fullName}</p>
                                        <p class="my-0 text-gray shortcut-fs-size">${contactlist[i].PhoneNumber}</p>
                                    </div>
                                </div>
                                <div
                                    class="small-suare bg-softrem d-flex justify-content-center align-items-center rounded-2 cursor-pointer">
                                    <i class="fa-solid fa-phone text-red small-icon"></i>
                                </div>
                            </div>
     `;
      }
    }
    emergencyshortcut.innerHTML = emergencyshortcutcontainer;
    noemergencyshortcut.classList.replace("d-block", "d-none");
    emergencyshortcut.classList.replace("d-none", "d-block");
  } else {
    emergencyshortcutcontainer = ``;
    noemergencyshortcut.classList.replace("d-none", "d-block");
    emergencyshortcut.classList.replace("d-block", "d-none");
  }
}
SaveContact.addEventListener("click", AddContact);
function AddContact() {
  const colorClasses = [
    "bg-red",
    "bg-blue",
    "bg-green",
    "bg-yellow",
    "bg-purple",
    "bg-pink",
  ];
  if (!fullName.value || fullName.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Missing Name",
      text: "Please enter a name for the contact! ",
    });
  }
  if (!PhoneNumber.value || PhoneNumber.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Missing phone Number",
      text: "Please enter a Number for the contact! ",
    });
  }
  if (
    fullName.classList.contains("is-valid") &&
    PhoneNumber.classList.contains("is-valid") &&
    email.classList.contains("is-valid") &&
    address.classList.contains("is-valid")
  ) {
    var contact = {
      id: Date.now(),
      img: photoInput.files[0]
        ? `images/${photoInput.files[0].name}`
        : colorClasses[Math.floor(Math.random() * colorClasses.length)],
      fullName: fullName.value,
      PhoneNumber: PhoneNumber.value,
      email: email.value,
      address: address.value,
      group: group.value,
      notes: notes.value,
      isfavourite: isfavourite.checked,
      isemergency: isemergency.checked,
    };
    for (var i = 0; i < contactlist.length; i++) {
      if (contactlist[i].PhoneNumber == contact.PhoneNumber) {
        Swal.fire({
          icon: "error",
          title: "Duplicate Phone Number",
          text: `A contact with this phone number already exists: ${contactlist[i].fullName}`,
        });
        return;
      }
    }
    contactlist.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contactlist));
    displayContactCard(contactlist);
    console.log(contact);
    closeform();
    clear();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    validateform(fullName);
    validateform(PhoneNumber);
    validateform(email);
    validateform(address);
  }
}
function deletecontact(id) {
  var index = contactlist.findIndex((c) => c.id === id);
  Swal.fire({
    title: "Delete Contact?",
    text: `Are you sure you want to delete ${contactlist[index].fullName}? This action cannot be undone.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      contactlist.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(contactlist));
      displayContactCard(contactlist);
      console.log(contactlist);
    }
  });
}

inputSearch.addEventListener("focus", function () {
  inputcontainer.classList.replace("border-gray", "border-purple");
});
inputSearch.addEventListener("blur", function () {
  inputcontainer.classList.replace("border-purple", "border-gray");
});

//open Add form
addBtn.addEventListener("click", function () {
  formBackground.classList.replace("d-none", "d-flex");
});
//close Add form
function closeform() {
  formBackground.classList.replace("d-flex", "d-none");
  if (SaveContact.classList.contains("d-none")) {
    SaveContact.classList.replace("d-none", "d-block");
  }
  if (Saveedit.classList.contains("d-block")) {
    Saveedit.classList.replace("d-block", "d-none");
  }
}
for (var i = 0; i < Close.length; i++) {
  Close[i].addEventListener("click", closeform);
}
function togglefavourite(i) {
  if (contactlist[i].isfavourite == true) {
    contactlist[i].isfavourite = false;
  } else {
    contactlist[i].isfavourite = true;
  }
  localStorage.setItem("contacts", JSON.stringify(contactlist));
  displayContactCard(contactlist);
}
function toggleEmergency(i) {
  if (contactlist[i].isemergency == true) {
    contactlist[i].isemergency = false;
  } else {
    contactlist[i].isemergency = true;
  }
  localStorage.setItem("contacts", JSON.stringify(contactlist));
  displayContactCard(contactlist);
}
function totalfavourite() {
  var counter = 0;
  for (var i = 0; i < contactlist.length; i++) {
    if (contactlist[i].isfavourite == true) {
      counter++;
    }
  }
  favourite.innerHTML = counter;
  return counter;
}
function totalemergency() {
  var count = 0;
  for (var i = 0; i < contactlist.length; i++) {
    if (contactlist[i].isemergency == true) {
      count++;
    }
  }
  emergency.innerHTML = count;
  return count;
}
function totalcontacts(i) {
  totalContacts.innerHTML = i;
  totalcontactsnum.innerHTML = i;
}
function validateform(element) {
  var isvalid = true;
var regex = {
  fullName: /^[\u0600-\u06FFa-zA-Z\s]{2,50}$/,
  PhoneNumber: /^(010|011|012|015)\d{8}$/,
  email: /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/,
  address: /^([\u0600-\u06FFa-zA-Z0-9\s,.\-/]{0,200})?$/,
  notes: /^([\u0600-\u06FFa-zA-Z0-9\s,.\-!?;:()'"/\n]{0,500})?$/,
};
  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
  }
}
function searchcontact(inputvalue) {
  var inputvalue = inputvalue.toLowerCase().trim();
  if (inputvalue === "") {
    displayContactCard(contactlist);
  } else {
    var filtercontacts = contactlist.filter(function (contact) {
      return (
        contact.fullName.toLowerCase().includes(inputvalue) ||
        contact.PhoneNumber.includes(inputvalue) ||
        contact.email.toLowerCase().includes(inputvalue) ||
        contact.address.toLowerCase().includes(inputvalue)
      );
    });
    displayContactCard(filtercontacts);
  }
}

inputSearch.addEventListener("keydown", function () {
  searchcontact(inputSearch.value);
});

function clear() {
  formicon.innerHTML = `<i class="fa-solid fa-user text-white fs-3"></i>`;
  fullName.value = "";
  PhoneNumber.value = "";
  email.value = "";
  address.value = "";
  notes.value = "";
  isfavourite.checked = false;
  isemergency.checked = false;
}

photoInput.addEventListener("change", function () {
  if (photoInput.files[0] !== null) {
    formimg.setAttribute("src", "./images/" + photoInput.files[0].name);
    formicon.classList.replace("d-flex", "d-none");
    formpic.classList.replace("d-none", "d-flex");
  }
});
var editingContactIndex;
function openeditform(id) {
  editingContactIndex = contactlist.findIndex((c) => c.id === id);

  fullName.value = contactlist[editingContactIndex].fullName;
  PhoneNumber.value = contactlist[editingContactIndex].PhoneNumber;
  email.value = contactlist[editingContactIndex].email;
  address.value = contactlist[editingContactIndex].address;
  group.value = contactlist[editingContactIndex].group;
  notes.value = contactlist[editingContactIndex].notes;
  isfavourite.checked = contactlist[editingContactIndex].isfavourite;
  isemergency.checked = contactlist[editingContactIndex].isemergency;
  if (contactlist[editingContactIndex].img.startsWith("images/")) {
    formimg.setAttribute("src", contactlist[editingContactIndex].img);
    formicon.classList.replace("d-flex", "d-none");
    formpic.classList.replace("d-none", "d-flex");
  } else {
    photoInput.value = null;
    var firstcharacter = contactlist[editingContactIndex].fullName.slice(0, 1);
    formicon.innerHTML = `${firstcharacter}`;
    formicon.classList.add("fs-3");
  }
  SaveContact.classList.replace("d-block", "d-none");
  Saveedit.classList.replace("d-none", "d-block");
  formBackground.classList.replace("d-none", "d-flex");
}
function saveEditedForrm() {
  if (!fullName.value || fullName.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Missing Name",
      text: "Please enter a name for the contact! ",
    });
    return;
  }
  if (!PhoneNumber.value || PhoneNumber.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Missing phone Number",
      text: "Please enter a Number for the contact! ",
    });
    return;
  }
  if (
    fullName.classList.contains("is-valid") &&
    PhoneNumber.classList.contains("is-valid") &&
    email.classList.contains("is-valid") &&
    address.classList.contains("is-valid")
  ) {
    for (var i = 0; i < contactlist.length; i++) {
      if (contactlist[i].PhoneNumber == PhoneNumber.value) {
        if (
          contactlist[i].PhoneNumber ==
          contactlist[editingContactIndex].PhoneNumber
        ) {
          continue;
        }
        Swal.fire({
          icon: "error",
          title: "Duplicate Phone Number",
          text: `A contact with this phone number already exists: ${contactlist[i].fullName}`,
        });
        return;
      }
    }

    contactlist[editingContactIndex].fullName = fullName.value;
    contactlist[editingContactIndex].PhoneNumber = PhoneNumber.value;
    contactlist[editingContactIndex].email = email.value;
    contactlist[editingContactIndex].address = address.value;
    contactlist[editingContactIndex].group = group.value;
    contactlist[editingContactIndex].notes = notes.value;
    contactlist[editingContactIndex].isfavourite = isfavourite.checked;
    contactlist[editingContactIndex].isemergency = isemergency.checked;
    if (photoInput.files[0]) {
      contactlist[
        editingContactIndex
      ].img = `images/${photoInput.files[0].name}`;
    }
    localStorage.setItem("contacts", JSON.stringify(contactlist));
    formBackground.classList.replace("d-flex", "d-none");
    Saveedit.classList.replace("d-block", "d-none");
    SaveContact.classList.replace("d-none", "d-block");
    displayContactCard(contactlist);
    clear();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Contact updated successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    validateform(fullName);
    validateform(PhoneNumber);
    validateform(email);
    validateform(address);
  }
}
Saveedit.addEventListener("click", saveEditedForrm);
