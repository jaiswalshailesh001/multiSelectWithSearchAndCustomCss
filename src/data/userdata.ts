export function GetUserData():User[]{
    return [{id :1 ,name:'Shailesh'},{id :2,name:'Vikram'},{id :3,name:'Ankush'},{id :4,name:'Harpal'}];
}

export class User{
    id:number;
    name:string; 
}