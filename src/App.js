import React, { Component } from 'react';
import './App.css';
import * as currencyConverter from './currency/CurrencyConverter';
import * as currencyNaming from './currency/CurrencyNaming';
import { mainConfig } from './config/config';
import { twoDecimal } from './helper/Helper';

class App extends Component {
  constructor(){
    super();
    this.state = {
      error: null,
      response: null,
      baseCurrency: 1,    // default value for user input in base currency
      shownCurrency: mainConfig.BASE_CURRENCY   // list of currencies that shown
    };
    this.setCurrencyChange = this.setCurrencyChange.bind(this);
    this.removeTab = this.removeTab.bind(this);
    this.toogleDropdown = this.toogleDropdown.bind(this);
    this.clickDropdown = this.clickDropdown.bind(this);
    this.getNameCode = this.getNameCode.bind(this);
  }

  componentDidMount() {   // send API call to get currencies data
    fetch(mainConfig.API_EXCHANGE_RATE_URL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: currencyConverter.reconvertToUsd(result)    // convert response into USD base currency
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  setCurrencyChange(e) {    // change baseCurrency state depends on user input
    this.setState({
      baseCurrency: e.target.value
    });
  }

  removeTab(e) {    // hide selected currency
    document.getElementById("tr" + e.target.id).className = "display-none";
    var tempIndex = this.state.shownCurrency.indexOf(e.target.id);
    if (tempIndex >= 0) this.state.shownCurrency.splice(tempIndex, 1);    // remove selected currency from shownCurrency list
  }

  toogleDropdown(e) {   // show list of hiding currencies
    var divDropdown = document.getElementById("divDropdown");
    if (divDropdown.className === "currency-dropdown-content display-none") {   // dropdown to show
      divDropdown.className = "currency-dropdown-content display-block";
      while (divDropdown.firstChild) {    // remove list first to refresh the data
          divDropdown.removeChild(divDropdown.firstChild);
      }
      for (var currency in this.state.response.rates) {   // fill the data
        if (this.state.shownCurrency.includes(currency)) continue;    // shown currency must not appear
        var tempDiv = document.createElement("div");
        tempDiv.setAttribute("id", "dropdown"+currency);
        tempDiv.setAttribute("data-key", currency);
        tempDiv.setAttribute("data-value", this.state.response.rates[currency]);
        tempDiv.onclick = this.clickDropdown;
        tempDiv.innerHTML  = currency;
        divDropdown.appendChild(tempDiv);
      }
    }
    else {    // dropdown to hide
      divDropdown.className = "currency-dropdown-content display-none";
    }
  }

  clickDropdown(e) {    // when user select from dropdown list
    var tempKey = e.target.getAttribute("data-key");
    document.getElementById("tr"+tempKey).className = "";   // show the list

    var divDropdown = document.getElementById("divDropdown");
    var tempSelectedCurrency = document.getElementById("dropdown"+tempKey);
    divDropdown.removeChild(tempSelectedCurrency);    // remove selected currency from dropdown
    this.state.shownCurrency.push(tempKey);   // add selected currency to shownCurrency list
    divDropdown.className = "currency-dropdown-content display-none";   // close the dropdown
  }

  getNameCode(key) {    // parsing Promise return
    currencyNaming.getCurrencyName(key).then(function(result) {
      document.getElementById("nameCode"+key).innerHTML = key + " - " + result;
    });
  }

  render() {    // Begin Rendering the Table
    if (!this.state.response) return null;    // wait async job to finish
    if (this.state.error) return "<h1>:( Sorry to say error : " + this.state.error + "</h1>";
    const { response } = this.state;
    const rates = this.state.response.rates;
    return (
      <div className="currency-container">
        <table cellSpacing="10">
          <thead>
            <tr>
              <th>
                <div className="currency-tablehead-container">
                  <div className="currency-tablehead-name">
                    {mainConfig.BASE_CODE} - {mainConfig.BASE_NAME}
                  </div>
                  <div className="currency-tablehead-codename">
                    <div>{response.base}</div>
                    <div><input type="number" className="currency-tablehead-value input-no-style" placeholder="1.00" min="0" onChange={this.setCurrencyChange} /></div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody id="tbodyCurrency">
            {Object.keys(rates).map((key, index) => (
                <tr key={key} id={"tr" + key} className={ !this.state.shownCurrency.includes(key) ? "display-none" : "" }>
                  <td id="tdRates" key={key}>
                    <div className="currency-list-detail">
                      <div className="currency-list-detail-codevalue">
                        <div>
                          {key}
                        </div>
                        <div>
                          <input type="text" name={key} className="currency-list-nominal input-no-style" value={twoDecimal(rates[key] * this.state.baseCurrency)} disabled />
                        </div>
                      </div>
                      <div id={"nameCode"+key} className="currency-list-name">
                        {this.getNameCode(key)}
                      </div>
                      <div className="currency-list-perone">
                        1 {response.base} = {twoDecimal(rates[key])} {key} 
                      </div>
                    </div>
                    <div className="remove-tab" id={key} onClick={this.removeTab}>
                      x
                    </div>
                  </td>
                </tr>
            ))}
            <tr>
              <td className="currency-dropdown" id="tdDropdown" onClick={this.toogleDropdown}>
                <div className="currency-dropdown-button">Add More Currencies</div>
                <div id="divDropdown" className="currency-dropdown-content display-none">
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          Data imported {response.date}
        </div>
      </div>
    );
  }
}

export default App;