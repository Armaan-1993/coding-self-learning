arrayObject = [
  {
    image_url: "img/echo.image.jpeg",
    name: "Echo",
    place: "Wayanad ,Kerala",
    description: "Self Sufficient Community Living",
    legalProcess: 90,
    plotAvailability: 2,
    currentProjectStatus: "Customer Aquisition",
    projectDetails: "www.google.com",
    enquire: "www.yahoo.com",
  },
  {
    image_url: "img/breeze.image.jpeg",
    name: "Breeze",
    place: "Wayanad ,Kerala",
    description: "Self Sufficient Community Living",
    legalProcess: 80,
    plotAvailability: 4,
    currentProjectStatus: "Customer Aquisition",
    projectDetails: "www.google.com",
    enquire: "www.yahoo.com",
  },
  {
    image_url: "img/dew.image.jpeg",
    name: "Dew",
    place: "Wayanad ,Kerala",
    description: "Self Sufficient Community Living",
    legalProcess: 70,
    plotAvailability: 1,
    currentProjectStatus: "Customer Aquisition",
    projectDetails: "www.google.com",
    enquire: "www.yahoo.com",
  },
  {
    image_url: "img/echo.image.jpeg",
    name: "Echo",
    place: "Wayanad ,Kerala",
    description: "Self Sufficient Community Living",
    legalProcess: 90,
    plotAvailability: 2,
    currentProjectStatus: "Customer Aquisition",
    projectDetails: "www.google.com",
    enquire: "www.yahoo.com",
  },
  {
    image_url: "img/breeze.image.jpeg",
    name: "Breeze",
    place: "Wayanad ,Kerala",
    description: "Self Sufficient Community Living",
    legalProcess: 80,
    plotAvailability: 4,
    currentProjectStatus: "Customer Aquisition",
    projectDetails: "www.google.com",
    enquire: "www.yahoo.com",
  },
  {
    image_url: "img/dew.image.jpeg",
    name: "Dew",
    place: "Wayanad ,Kerala",
    description: "Self Sufficient Community Living",
    legalProcess: 70,
    plotAvailability: 1,
    currentProjectStatus: "Customer Aquisition",
    projectDetails: "www.google.com",
    enquire: "www.yahoo.com",
  },
  {
    image_url: "img/echo.image.jpeg",
    name: "Echo",
    place: "Wayanad ,Kerala",
    description: "Self Sufficient Community Living",
    legalProcess: 90,
    plotAvailability: 2,
    currentProjectStatus: "Customer Aquisition",
    projectDetails: "www.google.com",
    enquire: "www.yahoo.com",
  },
  {
    image_url: "img/breeze.image.jpeg",
    name: "Breeze",
    place: "Wayanad ,Kerala",
    description: "Self Sufficient Community Living",
    legalProcess: 80,
    plotAvailability: 4,
    currentProjectStatus: "Customer Aquisition",
    projectDetails: "www.google.com",
    enquire: "www.yahoo.com",
  },
  {
    image_url: "img/dew.image.jpeg",
    name: "Dew",
    place: "Wayanad ,Kerala",
    description: "Self Sufficient Community Living",
    legalProcess: 70,
    plotAvailability: 1,
    currentProjectStatus: "Customer Aquisition",
    projectDetails: "www.google.com",
    enquire: "www.yahoo.com",
  },
];

let htmlVal = "";
arrayObject.forEach((element) => {
  htmlVal += `
    <div class="echo-main-container">
                        <div>
                            <img src="${element.image_url}" class="echo-img" />
                        </div>
                        <div class="name-div">
                            <a href="" class="name-a">${element.name}</a>
                        </div>
                        <div class="place-div">
                            <span class="place-span">${element.place}</span>
                        </div>
                        <div class="desc-div">
                            <span class="desc-span"
                                >${element.description}</span
                            >
                        </div>
                        <div class="legal-div">
                            <span class="legal-span">Legal Processes</span>
                            <span class="legal-count-span">${element.legalProcess}</span>
                        </div>
                        <div class="plot-div">
                            <span class="plot-span">Plot Availability</span>
                            <span class="plot-count-span">${element.plotAvailability}</span>
                        </div>
                        <div class="current-div">
                            <span class="current-project-span"
                                >Current Project Status :</span
                            >
                            <span class="current-aquisition-span"
                                >Current Aquisition</span
                            >
                        </div>
                        <div class="project-enqiuiry-conatiner-div">
                            <div class="project-details-div">
                                <a href="" class="project-details-a"
                                    >Project Details</a
                                >
                            </div>
                            <div class="enquire-div">
                                <a href="" class="enquire-a">Enquire</a>
                            </div>
                        </div>
                    </div>
                    `;
});
// let html =
document.getElementById("main-container-id").innerHTML = htmlVal;
