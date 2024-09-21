function calculateFinalScore(obj) {

  if (
  
  typeof obj.name === "string" &&
  
  typeof obj.testScore === "number" &&
  
  obj.testScore <= 50 &&
  
  typeof obj.schoolGrade === "number" &&
  
  obj.schoolGrade <= 30 &&
  
  typeof obj.isFFamily === "boolean"
  
  ) {
  
  let finalScore;
  
  if (obj.isFFamily == true) {
  
  finalScore = obj.testScore + obj.schoolGrade + 20;
  
  } else {
  
  finalScore = obj.testScore + obj.schoolGrade;
  
  }
  
  if (80 <= finalScore) {
  
  return "true";
  
  }
  
  return "false";
  
  }
  
  return "Invalid Input";
  
  }
  co