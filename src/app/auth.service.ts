export class AuthService {

    isLoggedIn = false;

    isAuth(){
        return new Promise((resolve, reject) => {
            resolve (this.isLoggedIn);
        })
    }

    logIn(){
        this.isLoggedIn = true;
    }

    logOut(){
        this.isLoggedIn = false;
    }

}