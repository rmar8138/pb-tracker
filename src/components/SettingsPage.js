import React, { Component } from "react";
import { connect } from "react-redux";
import { changeScaleAsync } from "../actions/settingsActions";

class SettingsPage extends Component {
  render() {
    return (
      <div>
        <p>Scale: {this.props.scale}</p>
        <button onClick={this.props.changeScaleAsync}>Change scale</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  scale: state.settings.scale
});

const mapDispatchToProps = dispatch => ({
  changeScaleAsync: () => dispatch(changeScaleAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);
