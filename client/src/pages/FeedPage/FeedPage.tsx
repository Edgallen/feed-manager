import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import FeedHeader from "../../components/FeedHeader/FeedHeader";
import FeedList from "../../components/FeedList/FeedList";
import FeedModal from "../../components/Modals/components/FeedModal/FeedModal";
import RoadMapWidget from "../../components/Widgets/RoadMapWidget/RoadMapWidget";
import TagsWidget from "../../components/Widgets/TagsWidget/TagsWidget";
import TitleWidget from "../../components/Widgets/TitleWidget/TitleWidget";

import modalStore from "../../stores/modalStore";

import styles from "./feedPage.scss";

export const FeedPage: FC = observer(() => {
  return (
    <section className={styles.feedPage}>
      <div className={styles.widgets}>
        <TitleWidget />
        <TagsWidget />
        <RoadMapWidget />
      </div>
      <div className={styles.feed}>
        <FeedHeader />
        <FeedList />
      </div>

      {modalStore.isModalActive && <FeedModal />}
    </section>
  );
});

export default FeedPage;
