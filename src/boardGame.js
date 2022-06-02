const MOVE_AUTHORISED = "MOVE AUTHORISED"

class BoardGame {
  constructor() {
    this.position = []
    this.positionX = 0
    this.positionY = 0
    this.directionsArray = ["N", "E", "S", "O"]
    this.directionNumber = 0
    this.direction = "N"
  }

  updatePosition() {
    if (this.direction === "N") {
      this.positionY = this.positionY + 1
      return
    }
    if (this.direction === "E") {
      this.positionX = this.positionX + 1
      return
    }
    if (this.direction === "S") {
      this.positionY = this.positionY - 1
      return
    }
    if (this.direction === "O") {
      this.positionX = this.positionX - 1
      return
    }
  }

  changePlayerDirection(move) {
    if (move === "R") {
      this.directionNumber = this.directionNumber + 1
      if (this.directionNumber === 4) {
        this.directionNumber = 0
      }
      this.direction = this.directionsArray[this.directionNumber]
      return
    }
    if (move === "L") {
      this.directionNumber = this.directionNumber - 1
      if (this.directionNumber === -1) {
        this.directionNumber = 3
      }
      this.direction = this.directionsArray[this.directionNumber]
      return
    }
  }

  checkMove(move) {
    if (move === "M" && this.positionX === 0 && this.direction === "O") {
      this.positionX = this.positionX + 1
    }
    if (move === "M" && this.positionY === 4 && this.direction === "N") {
      this.positionY = this.positionY - 1
    }
    if (move === "M" && this.positionX === 4 && this.direction === "E") {
      this.positionX = this.positionX - 1
    }
    if (move === "M" && this.positionY === 0 && this.direction === "S") {
      this.positionY = this.positionY + 1
    } else {
      return MOVE_AUTHORISED
    }
  }

  playerPosition() {
    this.position.push(this.positionX, this.positionY, this.direction)
    return this.position
  }
}

module.exports = {
  BoardGame,
}
