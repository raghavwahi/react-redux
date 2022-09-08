import React from "react";
import { connect } from "react-redux";
import actions from "./actions";

import Course from "./Course";

class Courses extends React.Component {
  async componentDidMount() {
    const url = "http://localhost:6556/courses";
    const options = {
      method: "GET",
    };

    const res = await fetch(url, options);
    const status = res.status;
    if (status === 200) {
      const courses = await res.json();
      this.props.storeCourses(courses);
    }
  }

  render() {
    let content = "";
    if (this.props.courses) {
      content = this.props.courses.map((course) => {
        return (
          <Course
            key={course.id}
            title={course.title}
            duration={course.duration}
            id={course.id}
          ></Course>
        );
      });
    } else {
      content = <h1>ERROR RETREIVING COURSES</h1>;
    }
    return <>{content}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses.courses,
  };
};

const mapDispatchToProps = {
  storeCourses: actions.storeCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
