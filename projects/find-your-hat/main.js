import inquirer from "inquirer";

function logger(message = "") {
  console.log(`////////////////////////////////////////////////////////////`);
  console.log(`${message}`);
  console.log(`////////////////////////////////////////////////////////////`);
}

class Field {

  constructor(field = []) {

    this.field = field;
    this.marker = {
      user: "*",
      field: "░",
      hole: "O",
      hat: "^"
    };
    this.position = { x: 0, y: 0 };
    this.prevPosition = { x: 0, y: 0 };

    // start game
    this.run();

  }

  printPrevPosition() {
    console.log('PrevPosition', this.prevPosition);
  }

  printPosition() {
    console.log('Position', this.position);
  }

  printField() {
    console.log(this.field);
  }

  updateField() {

    let fieldPosition = this.field[ this.position.y ][ this.position.x ];

    switch (fieldPosition) {
      case "O": {
        logger("Oops! You fell in the hole. Game Over :(");
        break;
      }
      case "^": {
        logger("Congratulations! You found your hat! You Win :)");
        break;
      }
      default: {

        // assign 'user' marker to new position in field
        this.field[this.position.y][this.position.x] = this.marker.user;
        this.field[this.prevPosition.y][this.prevPosition.x] = this.marker.field;

        // print field with new markers to user
        this.printField();

        // update previous position to reflect current position in prep for next move
        this.prevPosition.y = this.position.y;
        this.prevPosition.x = this.position.x;

        // re-prompt user
        this.promptUser();

        break;

      }
    }

  }

  moveUser(direction = "") {

    let position = this.position;
    let maxDown = this.field.length - 1;
    let maxRight = this.field[position.y].length - 1;

    switch(direction) {
      case "Up": {
        if ( position.y === 0 ) {
          logger("Oops! Cannot move up!");
        } else {
          this.moveUp();
        }
        break;
      }
      case "Down": {
        if ( position.y === maxDown ) {
          logger("Oops! Cannot move down!");
        } else {
          this.moveDown();
        }
        break;
      }
      case "Left": {
        if ( position.x === 0 ) {
          logger("Oops! Cannot move left!");
        } else {
          this.moveLeft();
        }
        break;
      }
      case "Right": {
        if ( position.x === maxRight ) {
          logger("Oops! Cannot move right!");
        } else {
          this.moveRight();
        }
        break;
      }
    }

    this.updateField();

  }

  promptUser() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "options",
          message: "Move throught the field!",
          choices: [ "Up", "Down", "Left", "Right", "Exit" ],
        },
      ])
      .then((answers) => {
        if ( answers.options == "Exit" ) {
          process.exit()
        } else {
          this.moveUser(answers.options);
        }
      });
  }

  moveRight() {
    this.position.x++;
  }

  moveLeft() {
    this.position.x--;
  }

  moveDown() {
    this.position.y++;
  }

  moveUp() {
    this.position.y--;
  }

  run() {
    this.printField();
    this.promptUser();
  }

  static generateField(width=5, height=5) {

    const field = [];
    const markers = [ "░", "O", "^" ];

    for ( let i = 0; i < height; i++ ) {

      const fieldRow = [];
      let holeCount = 0;

      for ( let j = 0; j < width; j++ ) {

        if ( i === 0 && j === 0 ) {
          fieldRow.push("*");
        } else {

          let randomIndex = Math.floor(Math.random()*markers.length);
          let randomMarker = markers[randomIndex];

          if ( randomMarker === "^" ) {
            markers.splice(randomIndex, 1);
          }

          if ( randomMarker === "O" ) {
            if ( holeCount > 0 ) {
              randomMarker = "░";
            } else {
               holeCount++;
            }
          }

          fieldRow.push(randomMarker);

        }

      }

      field.push(fieldRow);

    }

    return field;

  }

}

const myField = new Field(Field.generateField(3,3));
