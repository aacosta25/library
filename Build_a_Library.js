class Media {
  	constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }

//getters
  get title() {
    return this._title;
  }
  
  get isCheckedOut(){ 
    return this._isCheckedOut;
    
  }
  
  get ratings() {
    return this._ratings;
  }
  
  //methods
  toggleCheckOutStatus() {
    if(this._isCheckedOut === true){
       this._isCheckedOut = false;
       }else{
       this._isCheckedOut = true;
       }
  }
  

  getAverageRating() {
    let sumRatings = this.ratings.reduce((a,b) => { a + b});
     let averageRatings = (sumRatings / this.ratings.length);
    return averageRatings;
  }
	
    addRating(adding) {
    this._ratings.push(adding);
  } 
  
}

class Book extends Media{
  constructor(title,author,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get author(){
    return this._author;
  }
  
  get pages(){
    return this._pages;
  }
  
}


class Movie extends Media{
  constructor(title,director,runTime){
  	super(title);
 	 	this._director = director;
  	this._runTime = runTime;
	}
  
  get director(){
    return this._director;
    
  }
  
  get runTime(){
    return this._runTime;
  }
}
//Instances calling

const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

