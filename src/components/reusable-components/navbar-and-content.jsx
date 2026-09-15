import { useState, Suspense } from "react";

import { NavbarItem, Card, ScrollUpButton, ContentSkeleton } from "../export-components";

import Style from "style-it";

export default function NavbarandContent(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  //The tab being shown, used for both its content and its loading placeholder.
  const activeChild = props.children.find(
    (child) => child.props.label === activeTab
  );

  const styles = `
    .tab-list-item {
        display: inline-block;
        list-style: none;
        padding: 1rem 1rem;
        cursor: pointer;
        font-size: 1.5rem;
    }

    .tab-list {
        text-align: center;
    }

    .tab-list-active {
        font-weight: 600;
        border-bottom: 0.2rem solid var(--accent);
        border-radius: 0.4rem;
        color: var(--heading);
    }

    .tab-list-active::before {
        content: "✿ ";
        color: var(--accent);
    }
    `;

  return Style.it(
    styles,
    <div className="tabs">
      <nav>
        <ol className="tab-list" role="tablist">
          {props.children.map((child) => {
            const { label } = child.props;

            return (
              <NavbarItem
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
      </nav>
      <main className="tab-content">
        <Card>
          <Suspense fallback={activeChild?.props.fallback ?? <ContentSkeleton />}>
            {activeChild ? activeChild.props.children : undefined}
          </Suspense>
        </Card>
      </main>
      <ScrollUpButton />
    </div>
  );
}
