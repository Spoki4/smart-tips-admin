import React, {Component} from 'react';
import {WaitersApi} from "../services/waiters";
import {WaitersListPage} from "../components/WaitersListPage";

export class WaitersListContainer extends Component {
  state = {waiters: [], loading: true, error: null};

  componentDidMount() {
    this.setState({loading: true, error: null});
    WaitersApi.getAll()
      .then(waiters => {
        this.setState({waiters, loading: false})
      })
      .catch(error => {
        this.setState({loading: false, error: error.message})
      })
  }

  onEditClick = (id) =>
    this.props.history.push(`${this.props.match.url}/edit/${id}`);

  onRemoveClick = (id) => {
    const waiterForDelete = this.state.waiters.find(item => item.id === id);
    const canDelete = confirm(`Вы уверены что хотите удалить официанта \"${waiterForDelete.name} ${waiterForDelete.surname}\"`);

    if (!canDelete)
      return;

    this.setState({loading: true, error: null});
    WaitersApi.removeOne(id)
      .then(_ => {
        this.setState((state => ({waiters: state.waiters.filter(item => item.id !== id), loading: false})))
      })
      .catch(error => {
        this.setState({loading: false, error: error.message})
      })
  };

  onCreateClick = () =>
    this.props.history.push(`${this.props.match.url}/create`);


  render() {
    return <WaitersListPage {...this.state} onCreateClick={this.onCreateClick} onEditClick={this.onEditClick} onRemoveClick={this.onRemoveClick}/>;
  }
}
