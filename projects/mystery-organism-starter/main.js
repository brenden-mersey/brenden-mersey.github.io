// Returns a random DNA base
const dnaBases = ['A', 'T', 'C', 'G'];
const dnaLength = 15;

const returnRandBase = () => {
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < dnaLength; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = ( num = 0, arr = [] ) => {
  return {
    _specimenNum: num,
    _dna: arr,
    get specimenNum() {
      return this._specimenNum;
    },
    get dna() {
      return this._dna;
    },
    compareDNA( pAequorObj = {} ) {
      
      let dna = this._dna;
      let compareDna = pAequorObj.dna;
      let similarityCount = 0;
      
      for ( let i = 0; i < dna.length; i++ ) {
        if ( dna[i] === compareDna[i] ) {
          similarityCount++;
        } 
      }
      
      let similarityPercentage = ((similarityCount/dnaLength) * 100).toFixed(2);
      
      return `specimen #1 and specimen #2 have ${similarityPercentage}% DNA in common`;

    },
    mutate() {

      let dna = this._dna;
      let randomIndex = Math.floor(Math.random() * dna.length);
      let randomBase = dna[randomIndex];

      let tempBases = dnaBases.filter((base) => {
        return randomBase !== base;
      });
      
      dna[randomIndex] = tempBases[Math.floor(Math.random()*tempBases.length)];
      
      this._dna = dna;
  
      return dna;
      
    },
    willLikelySurvive() {
      
      let dna = this._dna;
      let survivalBases = [ "C", "G" ];
      let willSurvive = false;
            
      for ( survivalBase of survivalBases ) {
        let frequency = dna.filter((base) => {
          return survivalBase === base;
        });
        let survivalPercentage = ((frequency.length/dnaLength) * 100).toFixed(2);
        if ( survivalPercentage >= 60.00 ) {
          willSurvive = true;
          break;
        }
      }

      return willSurvive;

    }
  }
}

const batch = [];
for (let i = 1; i <= 30; i++ ) {
  batch.push( pAequorFactory( i, mockUpStrand() ) );
}

console.log(batch); // should print an array with 30 pAequor objects