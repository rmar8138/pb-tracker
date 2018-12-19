import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import { Container, Row, Col } from 'reactstrap';
import { convertPbs } from '../actions/pbsActions';
import { changeScaleAsync } from '../actions/settingsActions';

class SettingsPage extends Component {
  state = {
    checked: this.props.scale === 'kg',
    disabled: false
  };

  handleChange = checked => {
    this.setState({ checked, disabled: true }, () => {
      this.props
        .changeScaleAsync()
        .then(() => {
          console.log(this.props.scale);
          this.props.convertPbs(this.props.scale);
        })
        .then(() => {
          this.setState({ disabled: false });
        });
    });
  };

  render() {
    return (
      <Container>
        <h1 className="mt-2 text-center">Settings</h1>
        <Row className="justify-content-md-center">
          <Col md="auto" className="text-center">
            <span>Scale:</span>
            <label htmlFor="scale-switch">
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                disabled={this.state.disabled}
                checkedIcon={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      fontSize: 15,
                      color: 'orange',
                      paddingRight: 2
                    }}
                  >
                    KG
                  </div>
                }
                uncheckedIcon={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      fontSize: 15,
                      color: 'orange',
                      paddingRight: 2
                    }}
                  >
                    LB
                  </div>
                }
                id="scale-switch"
              />
            </label>
          </Col>
        </Row>
      </Container>
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
