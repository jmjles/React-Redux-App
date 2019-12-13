import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFilms } from "./redux/actions";
import { Container } from "@material-ui/core";
import List from "./components/list";
function App(props) {
  const films = props.fetchFilms;
  useEffect(() => {
    films();
  }, [films]);

  return (
    <div className="App">
      <Container >
        <List films={props.films} />
      </Container>
    </div>
  );
}
const mapState = state => ({
  films: state.list.films
});
export default connect(mapState, { fetchFilms })(App);
