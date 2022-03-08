type Coin = "heads" | "tails";
type userError = ["Error", Error]
type userSuccess = ["Success", {userName: string, id:number}];
type getUserDataResult = userError | userSuccess;
export{Coin, getUserDataResult};