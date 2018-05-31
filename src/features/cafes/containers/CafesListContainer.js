import React, {Component} from 'react';
import {CafesApi} from "../services/cafes";
import {CafesListPage} from "../components/CafesListPage";

export class CafesListContainer extends Component {
  state = {cafes: [], loading: true, error: null};

  componentDidMount() {
    this.setState({loading: true, error: null});
    CafesApi.getAll()
      .then(cafes => {
        this.setState({cafes, loading: false})
      })
      .catch(error => {
        this.setState({loading: false, error: error.message})
      })
  }

  onEditClick = (id) =>
    this.props.history.push(`${this.props.match.url}/edit/${id}`);

  onRemoveClick = (id) => {
    const cafeForDelete = this.state.cafes.find(item => item.id === id);
    const canDelete = confirm(`Вы уверены что хотите удалить ресторан \"${cafeForDelete.name}\"`);

    if (!canDelete)
      return;

    this.setState({loading: true, error: null});
    CafesApi.removeOne(id)
      .then(_ => {
        this.setState((state => ({cafes: state.cafes.filter(item => item.id !== id), loading: false})))
      })
      .catch(error => {
        this.setState({loading: false, error: error.message})
      })
  };

  onCreateClick = () =>
    this.props.history.push(`${this.props.match.url}/create`);


  render() {
    return <CafesListPage {...this.state} onCreateClick={this.onCreateClick} onEditClick={this.onEditClick} onRemoveClick={this.onRemoveClick}/>;
  }
}
