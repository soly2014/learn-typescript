import React, { Component } from "react";
import { TODO, TODOAction } from "./store/actions";
import connect from "react-redux";
import { initialState } from "./store/index";
import { ActionTypes } from "./store/types";

interface AppProps {
	color?: string;
}

const _App = (props: AppProps): JSX.Element[] => {
	return [1, 2].map(x => <p>damn</p>);
};

const mapStateToProps = ({ todos }: initialState) => {
	return { todos };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch1: () => {
//       dispatch(actionCreator)
//     }
//   }
// }

// export const App = connect(mapStateToProps, { ActionTypes.fetchTodos })(_App);
