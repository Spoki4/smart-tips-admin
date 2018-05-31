import React from 'react';
import {WaitersApi} from "../services/waiters";
import {WaiterFormPage} from "../components/WaiterFormPage";

export class EditWaiterContainer extends React.Component {
  state = {
    waiter: null,
    loading: true,
    error: null,
    message: null,
  };

  componentDidMount() {
    this.setState({loading: true, error: null});

    const waiterId = this.props.match.params.id;

    WaitersApi.getOne(waiterId)
      .then((waiter) => {
        this.setState({waiter, loading: false})
      })
      .catch(error => {
        this.setState({loading: false, error: error.message})
      })
  }

  onSave = (data) => {
    this.setState({loading: true, error: null});
    WaitersApi.updateOne(this.state.waiter.id, data)
      .then(waiter => {
        this.setState({loading: false, error: null, waiter: waiter, message: "Официант сохранен"});
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
