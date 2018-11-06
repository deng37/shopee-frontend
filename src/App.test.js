import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mainConfig } from './config/config';
import * as currencyNaming from './currency/CurrencyNaming';
import * as currencyConverter from './currency/CurrencyConverter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should naming currency', () => {
	currencyNaming.getCurrencyName("IDR").then(function(result) {
		expect(result).toEqual("Indonesian rupiah");
    });
});

it('get list currencies', () => {
	fetch(mainConfig.API_EXCHANGE_RATE_URL)
	.then(result => result.json)
	.then((jsonResult) => {
		expect(jsonResult.base).toEqual("EUR");
	})
});