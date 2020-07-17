//Get DOM under test
let XLSX = require('xlsx')

describe('Protractor : DOM Testing',()=>{

    let url;
    beforeEach(()=>{
        url='http://juliemr.github.io/protractor-demo/';
    });
    //case 1
    it('Site Title ',()=>{
       //load website under test
         browser.get(url);
         //expect 
         expect(browser.getTitle()).toEqual('Super Calculator')
    })
    //case 2
    it('Should add two numbers',()=>{
    
        //load url under test
        browser.get(url);
        //read excel file
        let workbook =  XLSX.readFile('./testdata.xlsx')
        let worksheet = workbook.Sheets['Sheet1'];
        let cellX='A2'
        let cellY='B2'

        console.log(worksheet[cellX].v,worksheet[cellY].v)
       
        //getlement and set values
        element(by.model('first')).sendKeys(worksheet[cellX].v);
        element(by.model('second')).sendKeys(worksheet[cellY].v);
       //trigger click event
        element(by.id('gobutton')).click();
        //if i want to see for browser some time
        //expectation
        let result =element(by.binding('latest'))
        expect(result.getText()).toEqual('200');
        browser.sleep(5000);

    });
    it('first textbox should contain only postive number',()=>{
        element(by.model('first')).sendKeys(-100);
    
    })
    it('first textbox should not  contain special character',()=>{
        element(by.model('first')).sendKeys(100);    
    })


});