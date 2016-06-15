// Question 1
function maxOfTwoNumbers(num1,num2) {
	if(num1>num2) {
		return num1;
	} else if(num1===num2){
		console.log("the numbers are the same");
	} else {
		return num2;
	}
}

// Question 2
function maxOfThree(num1,num2,num3) {
	if(num1===num2 && num2===num3){
		console.log("all three numbers are the same!");
	} else if(num1>=num2){
		if(num1>=num3) {
			return num1;
		} else {
			return num3;
		}
	} else if(num2>=num3) {
		return num2;
	}else {
		return num3;
	}
}


// Question 3
function isCharacterAVowel(str) {
	if(str.length>1){
		console.log("you must provide a string with a length of 1");
	} else if(str.charAt(0)==="a" || str.charAt(0)==="e" || str.charAt(0)==="i" || str.charAt(0)==="o" || str.charAt(0)==="u") {
		return true;
	} else {
		return false;
	}
}


// Question 4
function sumArray(arr) {
	 var sum=0;
	 for(i=0; i<arr.length; i++) {
	 	sum+=arr[i];
	 }
	 return sum;
}

// Question 4
function multiplyArray(arr) {
	var prod=arr[0];
	for(i=1; i<arr.length; i++) {
		prod *= arr[i];
	}
	return prod;
}


// Question 5
var numberOfArguments = function(){
	return arguments.length;  
}

// Question 6
var reverseString = function (str){
	  var revString="";
	  for (var i=str.length-1; i>=0; i--) {
	  	revString+=str.charAt(i);
	  }
	  return revString;
}


// Question 7
function findLongestWord (arr) {
	var maxLen=0;
	for (var i=0; i<arr.length; i++) {
		if(arr[i].length>maxLen) {
			maxLen=arr[i].length;
		}
	}
	return maxLen;
}

// Question 8
function filterLongWords (arr,i) {
	  var longWords=[];
	  for(var x=0; x<arr.length; x++) {
	  	if(arr[x].length>i) {
	  		longWords.push(arr[x]);
	  	}
	  }
	  return longWords;
}


// Bonus 1
function charactersOccurencesCount(str) {
  var letterCounts={};
  for(var i=0; i<str.length; i++) {
  	if(letterCounts[str[i]]===undefined) {
  		letterCounts[str[i]]=1;
  	} else {
  		letterCounts[str[i]]++;
  	}
  }
  return letterCounts;
}

console.log(charactersOccurencesCount("general assembly"));