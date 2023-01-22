import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import feedStore from "../../../stores/feedStore";
import TagButton from "../../Ui/TagButton/TagButton";
import styles from "./TagsWidget.module.scss";

interface ITagList {
  id: number;
  title: string;
}

const TagsWidget = observer(() => {
  const [tagList] = useState<Array<ITagList>>([
    { id: 1, title: "Все" },
    { id: 2, title: "UI" },
    { id: 3, title: "UX" },
    { id: 4, title: "Enchancement" },
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
