import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace com.routeone.area52{
   export abstract class Business extends Participant {
      email: string;
      accountBalance: number;
   }
   export class FinanceSource extends Business {
   }
   export class Customer extends Business {
   }
   export class Dealer extends Business {
   }
   export class Routeone extends Business {
   }
   export enum CarStatus {
      AVAILABLE,
      NOT_AVAILABLE,
   }
   export class Car extends Asset {
      vin: string;
      carStatus: CarStatus;
   }
   export class FSDealerContract extends Asset {
      fsDealerContractId: string;
      financeSource: FinanceSource;
      dealer: Dealer;
      amountPaidToDealer: number;
   }
   export class FSCustomerContract extends Asset {
      fsCustomerContractId: string;
      financeSource: FinanceSource;
      customer: Customer;
      amountPaidToFS: number;
   }
   export class FSRouteoneContract extends Asset {
      fsDealerContractId: string;
      financeSource: FinanceSource;
      routeone: Routeone;
      amountPaidToRouteone: number;
   }
   export class SetupDemo extends Transaction {
   }
   export class FSAddsCarToDealerInventory extends Transaction {
      fsDealerContract: FSDealerContract;
      car: Car;
   }
   export class CustomerSubscribed extends Transaction {
      fsRouteoneContract: FSRouteoneContract;
   }
   export class CustomerPaysSubscriptionFee extends Transaction {
      fsCustomerContract: FSCustomerContract;
   }
   export class CustomerRentsCar extends Transaction {
      customer: Customer;
      dealer: Dealer;
      car: Car;
   }
   export class CustomerReturnsCar extends Transaction {
      customer: Customer;
      dealer: Dealer;
      car: Car;
   }
// }
