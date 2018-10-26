import React, { Component } from "react";
import { connect } from "react-redux";
import Switch from "react-switch";
import { convertPbs } from "../actions/pbsActions";
import { changeScaleAsync } from "../actions/settingsActions";

class SettingsPage extends Component {
  state = {
    checked: this.props.scale === "kg"
  };

  handleChange = checked => {
    this.setState({ checked }, () => {
      this.props.changeScaleAsync().then(() => {
        this.props.convertPbs(this.props.scale);
      });
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="scale-switch">
          <span>Scale:</span>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "orange",
                  paddingRight: 2
                }}
              >
                KG
              </div>
            }
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "orange",
                  paddingRight: 2
                }}
              >
                LB
              </div>
            }
            id="scale-switch"
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  scale: state.settings.scale
});

const mapDispatchToProps = dispatch => ({
  convertPbs: scale => dispatch(convertPbs(scale)),
  changeScaleAsync: () => dispatch(changeScaleAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);
