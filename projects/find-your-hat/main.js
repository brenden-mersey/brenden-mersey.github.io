import inquirer from 'inquirer';

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {

  constructor(field = []) {

    this.field = field;
    this.old = {
      position: [ 0, 0 ],
      marker: '*'
    };
    this.current = {
      position: [ 0, 0 ],
      marker: '*'
    };

    this.run();

  }

  status() {
    console.log(`////////////////////////////////////////////////////////////`);
    console.log({
      old: this.old,
      current: this.current,
    });
  }

  moveResult() {

    let oldMarker = this.old.marker;
    let newMarker = this.field[ this.current.position[0] ][ this.current.position[1] ];

    console.log({ oldMarker, newMarker });
    this.status();

  }

  print() {
    console.log(this.field);
  }

  move( direction = "" ) {

    let currentPosition = this.current.position;
    let maxUp = 0;
    let maxDown = this.field.length - 1;
    let maxLeft = 0;
    let maxRight = this.field[currentPosition[0]].length - 1;

    switch(direction) {
      case 'Up': {
        if ( currentPosition[0] === maxUp ) {
          console.log("*** Cannot move Up! ***");
        } else {
          this.decreaseCurrentPositionRowIndex();
        }
        break;
      }
      case 'Down': {
        if ( currentPosition[0] === maxDown ) {
          console.log("*** Cannot move Down! ***");
        } else {
          this.increaseCurrentPositionRowIndex();
        }
        break;
      }
      case 'Left': {
        if ( currentPosition[1] === maxLeft ) {
          console.log("*** Cannot move Left! ***");
        } else {
          this.decreaseCurrentPositionColIndex();
        }
        break;
      }
      case 'Right': {
        if ( currentPosition[1] === maxRight ) {
          console.log("*** Cannot move Right! ***");
        } else {
          this.increaseCurrentPositionColIndex();
        }
        break;
      }
    }

    this.moveResult();
    this.prompt();

  }

  prompt() {

    inquirer
      .prompt([
        {
          type: 'list',
          name: 'options',
          message: 'Move throught the field!',
          choices: [ 'Up', 'Down', 'Left', 'Right', 'Exit' ],
        },
      ])
      .then((answers) => {
        if ( answers.options == "Exit" ) {
          process.exit()
        } else {
          this.move(answers.options);
        }
      });
  }

  run() {
    this.prompt();
  }

  increaseCurrentPositionRowIndex() {
    this.current.position[0]++;
  }

  decreaseCurrentPositionRowIndex() {
    this.current.position[0]--;
  }

  increaseCurrentPositionColIndex() {
    this.current.position[1]++;
  }

  decreaseCurrentPositionColIndex() {
    this.current.position[1]--;
  }

}

const myField = new Field([
  ['*', '░', 'O', '░'],  // row 0
  ['░', 'O', '░', '░'],  // row 1
  ['░', '^', '░', '░'],  // row 2
  ['░', '░', '░', '░']   // row 3
]);
