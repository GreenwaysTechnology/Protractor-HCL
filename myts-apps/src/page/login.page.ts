

class LoginPage {
    constructor(){
        console.log('login page')
    }
    getTextElement():Promise<any>{
        return Promise.resolve('TextBox');
    }
}

export default LoginPage;