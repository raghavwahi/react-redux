import React from "react";
import { connect } from "react-redux";

import Enquiry from "./Enquiry";
import actions from "./actions";

class Enquries extends React.Component {
  async componentDidMount() {
    const url = "http://localhost:6556/enquries";
    const options = {
      method: "GET",
    };

    const res = await fetch(url, options);
    const enquries = await res.json();
    const status = res.status;
    if (status === 200) {
      this.props.storeEnquiries(enquries);
    }
  }

  render() {
    let content = "";
    if (this.props.enquries) {
      content = this.props.enquries.map((enquiry) => {
        return (
          <Enquiry
            key={enquiry.id}
            name={enquiry.name}
            email={enquiry.email}
            enquiry={enquiry.enquiry}
            course_title={enquiry.course_title}
          ></Enquiry>
        );
      });
    } else {
      content = <h1>ERROR RETREIVING ENQURIES</h1>;
    }
    return <>{content}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    enquries: state.enquries.enquires,
  };
};

const mapDispatchToProps = {
  storeEnquiries: actions.storeEnquiries,
};

export default connect(mapStateToProps, mapDispatchToProps)(Enquries);
