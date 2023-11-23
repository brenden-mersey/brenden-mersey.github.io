function uniqueLength(nums) {
  if (nums.length === 0) {
    return 0;
  }
  
  let i = 0;
  let j = 1;
  
  while( j < nums.length ) {
    if ( nums[j] !== nums[i] ) {
      i++;
      nums[i] = nums[j];
      j++;
    } else {
      j++;
    }
  }
  
  return i + 1;
  
}

// Should return 5
const result = uniqueLength([1,1,2,3,4,5,5]);
// console.log(result);

// Should return 1
const result2 = uniqueLength([1,1,1,1]);
// console.log(result2);


const talkingPlushie = {
  home: 'Imagination Land!',
  composition: 'part cat, part elephant, part dolphin',
  fur: 'Fluffy. Pink and striped.',
  greet(name) {
    console.log(`Hello ${name}, welcome to ${this.home}.`);
  },
  introduce() {
    console.log(`I'm mostly cotton candy but technically. I'm ${this.composition}.`);
  },
  spreadingJoy() {
    console.log("BRRRR.... SPREADING JOY.... BRR.");
  },
  unspreadingJoy() {
    console.log("Booting...laser eyes...acquiring target...");
  },
};

talkingPlushie.greet("Asaye");
talkingPlushie.introduce();

console.log(talkingPlushie);
delete talkingPlushie.introduce;
console.log(talkingPlushie);