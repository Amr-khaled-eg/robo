import React from "react";
import CardList from "./cardList.js";
import Search from "./search.js";
import robots from "../robots.js";
import { connect } from "react-redux";
import { setSearchField, requstRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    search: state.searchRobots.search,
    robots: state.getRobots.robots,
    isPending: state.getRobots.isPending,
    error: state.getRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onGetRobots: () => dispatch(requstRobots()),
  };
};
class App extends React.Component {
  componentDidMount() {
    this.props.onGetRobots();
  }
  render() {
    const { search, onSearchChange, robots } = this.props;
    let filterdRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });

    return (
      <div>
        <Search searchChange={onSearchChange} />
        <CardList robots={filterdRobots} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
