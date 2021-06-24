const expect = (actualResult) => ({
    toEqual(expectedResult){
      if(actualResult !== expectedResult){
        return new Error(`${actualResult} is not equal to ${expectedResult}`);
      }
      return actualResult;
    }
  })
  

  String.prototype.validate = function(){
  const argRegExp = /^.*-s/i;
    
    switch(true){
              case this.length != "" && this.length > 0 && this.length < 3:
                  return true;
        
              case this.length > 30:
                  return false;
        
              case !(this.length <= 10):
                  return true;
        
              case this.length === 3:
                  return false;
        
              case argRegExp.test(this):
                  return true;
        
              default:
                  return false;
          }
  }
  
  
  //expect(0).toEqual(true);
  expect("le".validate()).toEqual(true);
  expect("leeeeeeeeeeeeeeeeeeeeeeeeeeeeee".validate()).toEqual(false);
  expect("leeeeeeeeee".validate()).toEqual(true);
  expect("lee".validate()).toEqual(false);
  expect(" ".validate()).toEqual(true);
  
  
  
