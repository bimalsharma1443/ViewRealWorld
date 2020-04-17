export const namespaced = true;

export const state = {
  user: { id: "1", name: "Bimal Sharma" }
};

export const actions = {
  actionCall() {
    console.log("this action call from event");
  }
};
