
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()


function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork()

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }

  const Calculator = {

    add(a,b){
        return a + b
    },
    subtract(a,b){
        return a - b
    },
    multiply(a,b){
        return a * b
    },
    divide(a,b){
        return a/b
    }
  }

  function actionApplyer(a, array){
      
        for (let i = 0; i < array.length; i++ ){ //as long as there is another function it runs 
          a = array[i](a) //calls the function from the array with a as the argument and sets a equal to that result
        }
        return a
      }
  



