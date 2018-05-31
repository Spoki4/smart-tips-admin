import React from 'react';
import {CafesApi} from "../services/cafes";
import {CafesFormPage} from "../components/CafesFormPage";
import {WaitersApi} from "../services/waiters";

export class EditCafeContainer extends React.Component {
  state = {
    cafe: null,
    loading: true,
    error: null,
    message: null,
    waiters: {list: [], loading: true, error: null}
  };

  componentDidMount() {
    this.setState({loading: true, error: null});

    const cafeId = this.props.match.params.id;

    CafesApi.getOne(cafeId)
      .then((cafe) => {
        this.setState({cafe, loading: false})
      })
      .catch(error => {
        this.setState({loading: false, error: error.message})
      })

    this.setState((state) => ({waiters: {...state.waiters, loading: true, error: null}}));
    WaitersApi.getAllByCafe(cafeId)
      .then(waiters => {
        this.setState((state) => ({waiters: {...state.waiters, list: waiters, loading: false}}));
      })
      .catch(error => {
        this.setState((state) => ({waiters: {...state.waiters, error: error.message, loading: false}}));
      })
  }

  onSave = (data) => {
    this.setState({loading: true, error: null});
    CafesApi.updateOne(this.state.cafe.id, data)
      .then(cafe => {
        this.setState({loading: false, error: null, cafe: cafe, message: "Ресторан сохранен"});
      })
      .catch(err => {
        this.setState({error: err.message, loading: false})
      })
  };

  render() {
    return (
      <CafesFormPage {...this.state} onSave={this.onSave} />
    );
  }
}
