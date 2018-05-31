import React from 'react';
import {CafesApi} from "../services/cafes";
import {CafesFormPage} from "../components/CafesFormPage";
import history from "../../../utils/history";

export class CreateCafeContainer extends React.Component {
  state = {
    cafe: null,
    loading: false,
    error: null,
    waiters: {list: [], loading: false, error: null}
  };

  onSave = (data) => {
    this.setState({loading: true, error: null});
    CafesApi.createOne(data)
      .then(cafe => {
        this.setState({loading: false, error: null, cafe: cafe, });
        history.push({
          pathname: `/cafes/edit/${cafe.id}`,
          state: {
            message: "Ресторан создан"
          }
        })
      })
      .catch(err => {
        this.setState({error: err.message, loading: false})
      })
  };

  render() {
    return (
      <CafesFormPage {...this.state} onSave={this.onSave} isCreating/>
    );
  }
}
