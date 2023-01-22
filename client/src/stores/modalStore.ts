import { makeAutoObservable } from "mobx";

class ModalStore {
  isModalActive = false;

  constructor() {
    makeAutoObservable(this);
  }

  showModal() {
    this.isModalActive = true;
  }

  hideModal() {
    this.isModalActive = false;
  }
}

export default new ModalStore();
