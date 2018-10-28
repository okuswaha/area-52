/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FSDealerContractService } from './FSDealerContract.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-fsdealercontract',
  templateUrl: './FSDealerContract.component.html',
  styleUrls: ['./FSDealerContract.component.css'],
  providers: [FSDealerContractService]
})
export class FSDealerContractComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  fsDealerContractId = new FormControl('', Validators.required);
  financeSource = new FormControl('', Validators.required);
  dealer = new FormControl('', Validators.required);
  amountPaidToDealer = new FormControl('', Validators.required);

  constructor(public serviceFSDealerContract: FSDealerContractService, fb: FormBuilder) {
    this.myForm = fb.group({
      fsDealerContractId: this.fsDealerContractId,
      financeSource: this.financeSource,
      dealer: this.dealer,
      amountPaidToDealer: this.amountPaidToDealer
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceFSDealerContract.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'com.routeone.area52.FSDealerContract',
      'fsDealerContractId': this.fsDealerContractId.value,
      'financeSource': this.financeSource.value,
      'dealer': this.dealer.value,
      'amountPaidToDealer': this.amountPaidToDealer.value
    };

    this.myForm.setValue({
      'fsDealerContractId': null,
      'financeSource': null,
      'dealer': null,
      'amountPaidToDealer': null
    });

    return this.serviceFSDealerContract.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'fsDealerContractId': null,
        'financeSource': null,
        'dealer': null,
        'amountPaidToDealer': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'com.routeone.area52.FSDealerContract',
      'financeSource': this.financeSource.value,
      'dealer': this.dealer.value,
      'amountPaidToDealer': this.amountPaidToDealer.value
    };

    return this.serviceFSDealerContract.updateAsset(form.get('fsDealerContractId').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceFSDealerContract.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceFSDealerContract.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'fsDealerContractId': null,
        'financeSource': null,
        'dealer': null,
        'amountPaidToDealer': null
      };

      if (result.fsDealerContractId) {
        formObject.fsDealerContractId = result.fsDealerContractId;
      } else {
        formObject.fsDealerContractId = null;
      }

      if (result.financeSource) {
        formObject.financeSource = result.financeSource;
      } else {
        formObject.financeSource = null;
      }

      if (result.dealer) {
        formObject.dealer = result.dealer;
      } else {
        formObject.dealer = null;
      }

      if (result.amountPaidToDealer) {
        formObject.amountPaidToDealer = result.amountPaidToDealer;
      } else {
        formObject.amountPaidToDealer = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'fsDealerContractId': null,
      'financeSource': null,
      'dealer': null,
      'amountPaidToDealer': null
      });
  }

}
