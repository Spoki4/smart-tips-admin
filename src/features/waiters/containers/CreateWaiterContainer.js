import React from 'react';
import {WaitersApi} from "../services/waiters";
import {WaiterFormPage} from "../components/WaiterFormPage";
import history from "../../../utils/history";
import queryString from "query-string"
import {CafesApi} from "../services/cafes";

export class CreateWaiterContainer extends React.Component {
  state = {cafe: null, waiter: null, loading: true, error: null};

  componentDidMount() {
    const {cafeId} = queryString.parse(location.search);

    if (!cafeId)
      history.push("/waiters");

    CafesApi.getOne(cafeId)
      .then(cafe => this.setState({loading: false, error: null, cafe }))
      .catch(error => this.setState({error: error.message, loading: false}))
  }

  onSave = (data) => {
    this.setState({loading: true, error: null});
    const waiter = {...data, cafe: this.state.cafe.id};
    WaitersApi.createOne(waiter)
      .then(waiter => {
        this.setState({loading: false, error: null, waiter: waiter});
        history.push(`/waiters/edit/${waiter.id}`)
      })
      .catch(err => {
        this.setState({error: err.message, loading: false})
      })
  };

  render() {
    return (
      <WaiterFormPage {...this.state} onSave={this.onSave} />
    );
  }
}
