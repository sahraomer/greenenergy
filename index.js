// Load your images on page-load
function preloader() {
    const imagesList = [
       "./img/Reduce.png",
       "./img/Reuse.png",
       "./img/Recycle.png"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);





const btns = document.querySelectorAll(".buttons button");
const resources = {
    Reduce: {
        bodyTxt: "Reduce. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim doloremque dolores delectus fugiat quae maxime libero repellat similique. .",
        imgUrl: "./img/reduce.png",
        imgAlt: "Reduce"
    },
    Reuse: {
        bodyTxt: "Reuse. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim doloremque dolores delectus fugiat quae maxime libero repellat similique. ",
        imgUrl: "./img/reuse.png",
        imgAlt: "Reuse"
    },
    Recycle: {
        bodyTxt: "Recycle. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim doloremque dolores delectus fugiat quae maxime libero repellat similique. ",
        imgUrl: "./img/recycle.png",
        imgAlt: "Recycle"
    }
}

const contents = document.querySelector(".main-content");

function pageload() {
    contents.innerHTML = `
                          <div class="row">
                              <div class="col-md-3">
                                  <img src="${resources.Reduce.imgUrl}" alt="${resources.Reduce.imgAlt}">
                              </div>
                              <div class="col-md-9">
                                  <p>${resources.Reduce.bodyTxt}</p>
                              </div>
                          </div>`;
}

function handleSelection (e) {

    let eventTargetObject = e.target;

    eventTargetObject.setAttribute("id", "active-button");

    for (let i = 0; i < btns.length; i++) {
        if (btns[i] !== eventTargetObject) {
            btns[i].removeAttribute("id", "active-button");
        }
    }

    let btnLabel = eventTargetObject.textContent;

    if (btnLabel === "Reduce") {
        contents.innerHTML = `<div class="row">
                                  <div class="col-md-3">
                                      <img src="${resources.Reduce.imgUrl}" alt="${resources.Reduce.imgAlt}">
                                  </div>
                                  <div class="col-md-9">
                                      <p>${resources.Reduce.bodyTxt}</p>
                                  </div>
                              </div>`;
    } else if (btnLabel === "Reuse") {
          contents.innerHTML = `<div class="row">
                                  <div class="col-md-3">
                                      <img src="${resources.Reuse.imgUrl}" alt="${resources.Reuse.imgAlt}">
                                  </div>
                                  <div class="col-md-9">
                                      <p>${resources.Reuse.bodyTxt}</p>
                                  </div>
                              </div>`;
    } else {
        contents.innerHTML = `<div class="row">
                                  <div class="col-md-3">
                                      <img src="${resources.Recycle.imgUrl}" alt="${resources.Recycle.imgAlt}">
                                  </div>
                                  <div class="col-md-9">
                                      <p>${resources.Recycle.bodyTxt}</p>
                                  </div>
                              </div>`;
    }
}

for (let btn of btns) {
    btn.addEventListener("click", handleSelection);
}
