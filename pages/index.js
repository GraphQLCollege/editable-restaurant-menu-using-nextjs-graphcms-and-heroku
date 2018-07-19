import React from "react";
import fetch from "isomorphic-unfetch";

import Menu from "../components/Menu";

export default class Index extends React.Component {
  static async getInitialProps() {
    const url = `http://localhost:${process.env.PORT || 3000}/static/data.json`;
    const options = { headers: { "Content-Type": "application/json" } };
    const { data } = await fetch(url, options).then(res => res.json());
    return { data };
  }
  render() {
    return (
      <React.Fragment>
        <Menu data={this.props.data} />
        <style global jsx>{`
          html,
          body {
            padding: 0;
            margin: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
