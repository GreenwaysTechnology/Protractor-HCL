describe('hello suit',function(){
    it('hello test case',function(){
        expect('hello').toEqual('hello')
       // console.log('Hello')
       // console.log(browser)
    });
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        browser.sleep(5000)
    
        expect(browser.getTitle()).toEqual('Super Calculator');
      });
})