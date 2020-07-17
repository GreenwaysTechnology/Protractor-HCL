//jasmine test suit

describe('some suite', () => {
    //resource intialization once all test cases
    beforeAll(() => {
        console.log('before all is called')
    });
    //resource initalization for each test cases
    beforeEach(() => {
        console.log('before each is called')
    })

    //test case
    it('some test : 1 ', () => {
        let a = true;
        //assertions
        expect(a).toBe(true);
    })
    //test case
    it('some test : 2', () => {
        let a = true;
        //assertions
        expect(a).toBe(true);
    })

    ///async calls and testing

    afterEach(() => {
        console.log('after each')
    })
    afterAll(() => {
        console.log('after all')
    });


});