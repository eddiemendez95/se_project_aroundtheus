class UserInfo {
    constructor(name, job){
        this.name = name;
        this.job = job;
    }

    getUserInfo(){
        return{
            name: this.name;
            job: this.job;
        }
    }

    setUserInfo(name, job){
        this.name = name;
        this.job = job;
    }
}

export default UserInfo