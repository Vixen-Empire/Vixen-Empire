  //Google API info
  // clientId:26301325702-51hihv2tkbh1njfq13b7ndcm0iq73e04.apps.googleusercontent.com
  // clientSecret:6aOOABKSdPefq21HeG8o84Db

  
export function responseFailure (res){
  console.log(res)
}


// User token last 1hr to refresh without signing user out
export function refreshTokenSetup(res){
  let refreshTime =(res.tokenObj.expires_in || 3600-5*60)*1000

  const refreshToken = async () =>{
     const newAuthToken = await res.reloadAuthResponse()
     refreshTime = (newAuthToken.expires_in || 3600-5*60)*1000
     //sets new timer 
     setTimeout(refreshToken,refreshTime)
  }
  //sets up first refresh timer
  setTimeout(refreshToken,refreshTime)
}