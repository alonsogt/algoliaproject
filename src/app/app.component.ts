import { Component } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('MG98SMZEYN', '9886fb6d605b0be53250e78e01c03b22');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config = {
    indexName: 'test_index',
    searchClient,
  };
}
