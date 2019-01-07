import React, { Component } from "react";
import Form from "./components/Form";
import Prayer from "./components/Prayers";
import Titles from "./components/Titles";

class App extends Component {
  state = {
    Asr: "",
    Dhuhr: "",
    Fajr: "",
    Isha: "",
    Maghrib: "",
    Sunrise: "",
    error: ""
  };

  getPrayer = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(
      ` http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`
    );
    const data = await api.json();

    if (city && country) {
      this.setState({
        Asr: data.data.timings.Asr,
        Dhuhr: data.data.timings.Dhuhr,
        Fajr: data.data.timings.Fajr,
        Isha: data.data.timings.Isha,
        Maghrib: data.data.timings.Maghrib,
        Sunrise: data.data.timings.Sunrise,
        error: ""
      });
    } else {
      this.setState({
        Asr: "",
        Dhuhr: "",
        Fajr: "",
        Isha: "",
        Maghrib: "",
        Sunrise: "",
        error: "Wrong Input, Please Check."
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getPrayer={this.getPrayer} />
                  <Prayer
                    city={this.state.city}
                    country={this.state.country}
                    error={this.state.error}
                    Asr={this.state.Asr}
                    Dhuhr={this.state.Dhuhr}
                    Fajr={this.state.Fajr}
                    Isha={this.state.Isha}
                    Maghrib={this.state.Maghrib}
                    Sunrise={this.state.Sunrise}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
