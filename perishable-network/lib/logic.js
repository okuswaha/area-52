/**
 * Initialize some test assets and participants useful for running a demo.
 * @param {com.routeone.area52.SetupDemo} setupDemo - the SetupDemo transaction
 * @transaction
 */
async function setupDemo(setupDemo) {  // eslint-disable-line no-unused-vars

    const factory = getFactory();
    const NS = 'com.routeone.area52';
    
    // create Dealer
    const dealer = factory.newResource(NS,'Dealer','dealer@email.com');
    dealer.accountBalance = 0;

    // create FinanceSource
    const financeSource = factory.newResource(NS,'FinanceSource','financesource@email.com');
    financeSource.accountBalance = 0;

    // create Routeone
    const routeone = factory.newResource(NS,'Routeone','routeone@email.com');
    routeone.accountBalance = 0;

    // create Customer
    const customer = factory.newResource(NS,'Customer','customer@email.com');
    customer.accountBalance = 0;

    // create FSDealerContract
    const fsDealerContract = factory.newResource(NS, 'FSDealerContract', 'FS_DEALER_001');
    fsDealerContract.financeSource = factory.newRelationship(NS,'FinanceSource','financesource@email.com');
    fsDealerContract.dealer = factory.newRelationship(NS,'Dealer','dealer@email.com');
    fsDealerContract.amountPaidToDealer = 200;

    // create FSCustomerContract
    const fsCustomerContract = factory.newResource(NS, 'FSCustomerContract', 'FS_CUSTOMER_001');
    fsCustomerContract.financeSource = factory.newRelationship(NS,'FinanceSource','financesource@email.com');
    fsCustomerContract.dealer = factory.newRelationship(NS,'Customer','customer@email.com');
    fsCustomerContract.amountPaidToFS = 1000;

    // create FSRouteoneContract
    const fsRouteoneContract = factory.newResource(NS, 'FSRouteoneContract', 'FS_ROUTEONE_001');
    fsRouteoneContract.financeSource = factory.newRelationship(NS,'FinanceSource','financesource@email.com');
    fsRouteoneContract.routeone = factory.newRelationship(NS,'Routeone','routeone@email.com');
    fsRouteoneContract.amountPaidToRouteone = 15;

    // create car 1
    const car1 = factory.newResource(NS, 'Car','1FTPS2424YHA40001');
    car1.status = 'AVAILABLE';

    // create car 2
    const car2 = factory.newResource(NS, 'Car','1FTPS2424YHA40002');
    car2.status = 'AVAILABLE';

    // create car 3
    const car3 = factory.newResource(NS, 'Car','1FTPS2424YHA40003');
    car3.status = 'AVAILABLE';

    // add Dealers 
    const dealerRegistry = await getParticipantRegistry(NS + '.Dealer');
    await dealerRegistry.addAll([dealer]);

    // add FinanceSource
    const financeSourceRegistry = await getParticipantRegistry(NS + '.FinanceSource');
    await financeSourceRegistry.addAll([financeSource]);

    // add Routeone
    const routeoneRegistry = await getParticipantRegistry(NS + '.Routeone');
    await routeoneRegistry.addAll([routeone]);

    // add Customer
    const customerRegistry = await getParticipantRegistry(NS + '.Customer');
    await customerRegistry.addAll([customer]);

    // add FSDealerContract
    const fsDealerContractRegistry = await getAssetRegistry(NS + '.FSDealerContract');
    await fsDealerContractRegistry.addAll([fsDealerContract]);

    // add FSCustomerContract
    const fsCustomerContractRegistry = await getAssetRegistry(NS + '.FSCustomerContract');
    await fsCustomerContractRegistry.addAll([fsCustomerContract]);

    // add FSRouteoneContract
    const fsRouteoneContractRegistry = await getAssetRegistry(NS + '.FSRouteoneContract');
    await fsRouteoneContractRegistry.addAll([fsRouteoneContract]);

    // add Car 1, Car 2 , Car 3
    const carRegistry = await getAssetRegistry(NS + '.Car');
    await carRegistry.addAll([car1, car2, car3]);

  }
  
  /**
   * Initialize some test assets and participants useful for running a demo.
   * @param {com.routeone.area52.FSAddsCarToDealerInventory} fsAddsCarToDealerInventory - the AddCarToRegisty transaction
   * @transaction
   */
  async function fsAddsCarToDealerInventory(fsAddsCarToDealerInventory) {  // eslint-disable-line no-unused-vars
  
    const factory = getFactory();
    const NS = 'com.routeone.area52';
    console.log('A Car was added to Registry');
  }
  
  /**
   * Initialize some test assets and participants useful for running a demo.
   * @param {com.routeone.area52.CustomerSubscribed} customerSubscribed - the AddCarToRegisty transaction
   * @transaction
   */
  async function customerSubscribed(customerSubscribed) {  // eslint-disable-line no-unused-vars
  
    const factory = getFactory();
    const NS = 'com.routeone.area52';
    console.log('A Customer is approved for loan');
  }
  
  /**
   * Initialize some test assets and participants useful for running a demo.
   * @param {com.routeone.area52.CustomerPaysSubscriptionFee} customerPaysSubscriptionFee - the PaySubscriptionFee transaction
   * @transaction
   */
  async function customerPaysSubscriptionFee(customerPaysSubscriptionFee) {  // eslint-disable-line no-unused-vars
  
    const factory = getFactory();
    const NS = 'com.routeone.area52';
    console.log('customer pays a subscription fee');
  }
  
  /**
   * Initialize some test assets and participants useful for running a demo.
   * @param {com.routeone.area52.CustomerRentsCar} customerRentsCar - the RentCar transaction
   * @transaction
   */
  async function customerRentsCar(customerRentsCar) {  // eslint-disable-line no-unused-vars
  
    const factory = getFactory();
    const NS = 'com.routeone.area52';
    console.log('customer rents a car');
  }
  
  /**
   * Initialize some test assets and participants useful for running a demo.
   * @param {com.routeone.area52.CustomerReturnsCar} customerReturnsCar - the RentCar transaction
   * @transaction
   */
  async function customerReturnsCar(customerReturnsCar) {  // eslint-disable-line no-unused-vars
  
    const factory = getFactory();
    const NS = 'com.routeone.area52';
    console.log('customer returns a car');
  }
  
  