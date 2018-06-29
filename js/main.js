function getAverage(marks){
 var mean = 0;
 marks.forEach(function(el){
 mean = mean += el
 })
 mean = Math.floor(mean/marks.length);
 return mean
 console.log(mean)
}
