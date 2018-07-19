import React from "react";

const Logo = () => (
  <h1>
    menu
    <style jsx>{`
      h1 {
        margin: 0;
        grid-column-start: 2;
        justify-self: flex-end;
        transform: rotate(-5deg);
        padding: 20px;
        font-size: 5rem;
      }
    `}</style>
  </h1>
);

const Subcategory = ({ data = { menuItems: [] }, ...props }) => (
  <div className="subcategory" {...props}>
    <h2>{data.name}</h2>
    <ul>
      {data.menuItems.map(element => (
        <li key={element.description}>
          {element.description}
          <span className="price">{element.price}</span>
        </li>
      ))}
    </ul>
    <style jsx>{`
      ul,
      h2 {
        margin: 0;
        text-transform: lowercase;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        text-transform: uppercase;
        margin-bottom: 10px;
        font-family: Arial;
      }
      .subcategory {
        display: flex;
        flex-direction: column;
        padding: 20px;
        transform: rotate(-5deg);
        justify-content: flex-end;
      }
      @media (min-width: 750px) {
        .subcategory {
          flex-direction: row;
        }
      }
      .subcategory > h2 {
        font-size: 3rem;
        margin-right: 20px;
        margin-bottom: 20px;
      }
      .price {
        margin-left: 20px;
      }
    `}</style>
  </div>
);

const Category = ({ data = { subcategories: [] }, ...props }) => (
  <section className="category" {...props}>
    <Logo />
    {data.subcategories.map(subcategory => (
      <Subcategory key={subcategory.name} data={subcategory} />
    ))}
    <style jsx>{`
      .category:nth-child(even) {
        background: #0b0b09;
      }
      .category:nth-child(odd) {
        background: #a72203;
      }
      .category {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 90vw 1fr;
      }
      @media (min-width: 750px) {
        .category {
          grid-template-columns: 1fr 700px 1fr;
        }
      }
      .category > :global(div) {
        grid-column-start: 2;
      }
    `}</style>
  </section>
);

const Menu = ({ data = { categories: [] } }) => {
  return (
    <article className="menu">
      {data.categories.map(category => (
        <Category key={category.name} data={category} />
      ))}
      <style jsx>{`
        .menu {
          color: #eee;
          background: #eee;
          /* System font stack: https://css-tricks.com/snippets/css/system-font-stack/ */
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
          padding: 10px;
          max-width: 100%;
          overflow: hidden;
          min-height: 100vh;
        }
      `}</style>
    </article>
  );
};

export default Menu;
