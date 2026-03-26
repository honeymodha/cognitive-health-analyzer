function analyze(){
 
  let sleep = document.getElementById("sleep").value;
  let screen = document.getElementById("screen").value;
  let reading = document.getElementById("reading").value;
  let phone = document.getElementById("phone").value;
 
  let score = 50;
  let rec = [];
 
  /* Sleep scoring */
  if(sleep >= 7 && sleep <= 9){
    score += 20;
  }else if(sleep < 6){
    score -= 15;
    rec.push("Increase sleep to at least 7 hours for better cognitive performance.");
  }
 
  /* Screen time scoring */
  if(screen > 6){
    score -= 20;
    rec.push("Reduce screen time to less than 5 hours daily.");
  }else if(screen < 4){
    score += 10;
  }
 
  /* Reading scoring */
  if(reading >= 30){
    score += 15;
  }else{
    rec.push("Increase reading time to at least 30 minutes daily.");
  }
 
  /* Phone before sleep */
  if(phone === "yes"){
    score -= 10;
    rec.push("Avoid phone usage 30 minutes before bedtime.");
  }else{
    score += 5;
  }
 
  /* Limit score */
  if(score > 100) score = 100;
  if(score < 0) score = 0;
 
  /* Determine status */
  let status = "";
  let className = "";
 
  if(score >= 75){
    status = "Good Cognitive Health";
    className = "good";
  }
  else if(score >= 50){
    status = "Moderate Cognitive Health";
    className = "moderate";
  }
  else{
    status = "Poor Cognitive Health";
    className = "poor";
  }
 
  /* Recommendations */
  let recommendations = rec.length > 0
    ? "<ul><li>" + rec.join("</li><li>") + "</li></ul>"
    : "Great job! Your habits support good cognitive health.";
 
  /* Output */
  document.getElementById("output").innerHTML =
    `<div class="result ${className}">
      Cognitive Score: ${score}/100
      <br>
      Status: ${status}
      <div class="recommendations">
        <h4>Recommendations</h4>
        ${recommendations}
      </div>
    </div>`;
}