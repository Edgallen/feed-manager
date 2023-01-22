import React, { useState } from "react";

import InputElement from "../../../Ui/InputElement/InputElement";
import MainButton from "../../../Ui/MainButton/MainButton";
import TextAreaElement from "../../../Ui/TextAreaElement/TextAreaElement";
import ModalBody from "../../ModalBody";
import Tag from "../../../Ui/Tag/Tag";

import feedStore from "../../../../stores/feedStore";
import modalStore from "../../../../stores/modalStore";

import type { IFeedNewPost } from "../../../../types/feedTypes";

import styles from "./FeedModal.scss";

interface IFeedInputs {
  idea: string;
  tagName: string;
  description: string;
}

const FeedModal = () => {
  const [inputs, setInputs] = useState<IFeedInputs>({
    idea: "",
    tagName: "",
    description: "",
  });
  const [tagList, setTagList] = useState<Array<string>>([]);

  const handleInputChange = (value: string, inputKey: keyof IFeedInputs) => {
    const newInputs = { ...inputs, [inputKey]: value };
    setInputs(newInputs);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPost: IFeedNewPost = {
      title: inputs.idea,
      tags: tagList,
      description: inputs.description,
    };
    feedStore.addNewPost(newPost);
    modalStore.hideModal();
  };

  const handleTagAdd = () => {
    if (inputs.tagName.length < 1) {
      return;
    }
    setTagList([...tagList, inputs.tagName]);
    setInputs({ ...inputs, tagName: "" });
  };

  const handleTagDelete = (tagToDelete: string) => {
    const filteredTagList = tagList.filter((oldTag) => oldTag !== tagToDelete);
    setTagList(filteredTagList);
  };

  const closeModal = () => {
    modalStore.hideModal();
  };

  return (
    <ModalBody remixIconClass="ri-add-line">
      <form
        className={styles.feedModal}
        onSubmit={(event) => handleSubmit(event)}
      >
        <h1 className={styles.feedModal__title}>Добавить новое идею</h1>

        <div className={styles.feedModal__wrapper}>
          <h2 className={styles.feedModal__subtitle}>Название идеи</h2>
          <span className={styles.feedModal__span}>
            Добавьте короткий и информативный заголовок
          </span>
          <InputElement
            value={inputs.idea}
            onChangeCallback={handleInputChange}
            isRequired={true}
            minlength={1}
            type="text"
            inputKey="idea"
            name="Название идеи"
          />
        </div>

        <div className={styles.feedModal__wrapper}>
          <h2 className={styles.feedModal__subtitle}>Категория</h2>
          <span className={styles.feedModal__span}>
            Добавьте категорию для вашей идеи
          </span>
          <div className={styles.categoryInput__wrapper} id="TagForm">
            <InputElement
              value={inputs.tagName}
              onChangeCallback={handleInputChange}
              type="text"
              inputKey="tagName"
              name="Категория"
            />
            <button
              className={styles.categoryInput__button}
              type="submit"
              form="TagForm"
              name="Добавить тэг"
              title="Добавить тэг"
              onClick={handleTagAdd}
            >
              <i className="ri-add-line"></i>
            </button>
          </div>

          <div className={styles.taglist__container}>
            {tagList.map((tag, index) => (
              // TODO Изменить ключ
              <Tag text={tag} deleteCallback={handleTagDelete} key={index} />
            ))}
          </div>
        </div>

        <div className={styles.feedModal__wrapper}>
          <h2 className={styles.feedModal__subtitle}>Описание идеи</h2>
          <span className={styles.feedModal__span}>
            Добавьте комментарий, чтобы хотелось улучшить, добавить и т.д.
          </span>
          <TextAreaElement
            value={inputs.description}
            onChangeCallback={handleInputChange}
            inputKey="description"
          />
        </div>

        <div className={styles.buttons__wrapper}>
          <MainButton text="Добавить" type="submit" />
          <MainButton
            text="Отмена"
            clickCallback={closeModal}
            color={"secondary"}
          />
        </div>
      </form>
    </ModalBody>
  );
};

export default FeedModal;
