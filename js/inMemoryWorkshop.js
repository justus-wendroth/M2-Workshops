let inMemoryWorkshop;

function init() {
  inMemoryWorkshop = [];
  return Promise.resolve();
}

function getWorkshopList() {
  return new Promise((resolve) => {
    resolve(inMemoryWorkshop);
  });
}

function getWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("name parameter is required"));
    }
    resolve(inMemoryWorkshop.find((workshop) => workshop.name === name));
  });
}

function addWorkshop(name, description) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("Workshop name required"));
    }
    if (!description) {
      reject(new Error("Workshop description required"));
    }
    inMemoryWorkshop.push({
      name,
      description,
    });
    resolve();
  });
}

function removeWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    inMemoryWorkshop = inMemoryWorkshop.filter(
      (workshop) => workshop.name !== name
    );
    resolve();
  });
}

function updateWorkshop(name, description) {
  return new Promise((resolve, reject) => {
    inMemoryWorkshop = inMemoryWorkshop.map((workshop) => {
      if (workshop.name === name) {
        return {
          name,
          description,
        };
      } else {
        return workshop;
      }
    });
    resolve();
  });
}

module.exports = {
  init,
  getWorkshopList,
  getWorkshopByName,
  addWorkshop,
  removeWorkshopByName,
  updateWorkshop,
};
