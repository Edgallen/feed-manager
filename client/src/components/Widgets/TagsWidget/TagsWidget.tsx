import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import TagButton from "../../Ui/TagButton/TagButton";

import feedStore from "../../../stores/feedStore";

import styles from "./TagsWidget.scss";

interface IProps {
  id: number;
  title: string;
}

const TagsWidget = observer(() => {
  const [tagList] = useState<Array<IProps>>([
    { id: 1, title: "Все" },
    { id: 2, title: "UI" },
    { id: 3, title: "UX" },
    { id: 4, title: "Enhancement" },
    { id: 5, title: "Bug" },
    { id: 6, title: "Feature" },
  ]);

  const handleTagClick = (newTag: string) => {
    feedStore.changeActiveTag(newTag);
  };

  return (
    <div className={styles.tagsWiget__container}>
      {tagList.map((tag) => (
        <TagButton
          title={tag.title}
          active={feedStore.activeTag === tag.title}
          onClickCallback={handleTagClick}
          cursor={"pointer"}
          key={tag.id}
        />
      ))}
    </div>
  );
});

export default TagsWidget;
