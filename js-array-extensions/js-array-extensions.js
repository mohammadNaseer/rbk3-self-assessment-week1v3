// your code here

var Array=function(array){
	var useful={};
	_.extend(useful,ArrayMethods)
	//useful.first=first;
	//useful.last=last;
	useful.array=array;
	return useful;
	
}

var ArrayMethods ={};
 
 ArrayMethods.first=function(){
 	return this.array.shift();
 }

 ArrayMethods.last=function(){
 	return this.array.pop();
 }