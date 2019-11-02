import React, { Component } from "react";

class AppChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {}
    };
  }

  componentDidMount() {
    fetch("/api/employees/434324")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ employee: data });
      })
      .catch(error => console.log("error fetching employees", error));
  }
  render() {
    return (
      <div style={{ color: "white" }}>
        <label>printing state fetched from api</label>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default AppChild;
