{

    // type Guards

    // typeof --> type Guard
    type AlphaNeumeric = string | number;
    
    const add = (param1: AlphaNeumeric, param2: AlphaNeumeric): AlphaNeumeric =>{
        if(typeof param1 ==="number" && typeof param2 ==="number"){
            return param1 + param2;
        }else{
            return param1.toString() + param2.toString();
        }
    }

    const resp1 = add(1,2);
    const resp2 = add("2", "3")

    console.log(resp1);
    console.log(resp2);

    // in guard

    type NormalUSer={
        name: string;
    }
    type AdminUser={
        name: string;
        role: "Admin"
    }

    const getUser = (user: NormalUSer | AdminUser)=>{
        if("role" in user){
            console.log(`I am ${user.name}, I am ${user.role}`);
        }else{
            console.log(`I am ${user.name}`);
        }
    }

    const normalUser: NormalUSer = {
        name: "Mr. Normal"
    } 
    const adminUser: AdminUser = {
        name: "Mr. Admin",
        role: "Admin"
    } 
    getUser(normalUser)
    getUser(adminUser)
    
    

    // 
}