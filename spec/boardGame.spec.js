/* eslint-disable */
const { BoardGame } = require("../src/boardGame.js")

describe("Board Game", function () {
  let boardGame

  beforeEach(() => {
    boardGame = new BoardGame()
  })

  it("Moving a piece forward", () => {
    // set up
    const expected = [0, 1, "N"]

    // execute
    boardGame.updatePosition()
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Changing piece direction to the right", () => {
    // set up
    const expected = [0, 0, "E"]

    // execute
    boardGame.changePlayerDirection("R")
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Check piece will be N when clicked right x4", () => {
    // set up
    const expected = [0, 0, "N"]

    // execute
    boardGame.changePlayerDirection("R")
    boardGame.changePlayerDirection("R")
    boardGame.changePlayerDirection("R")
    boardGame.changePlayerDirection("R")
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Changing piece direction to the left", () => {
    // set up
    const expected = [0, 0, "O"]

    // execute
    boardGame.changePlayerDirection("L")
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Check piece will be N when clicked left x4", () => {
    // set up
    const expected = [0, 0, "N"]

    // execute
    boardGame.changePlayerDirection("L")
    boardGame.changePlayerDirection("L")
    boardGame.changePlayerDirection("L")
    boardGame.changePlayerDirection("L")
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving a piece forward and right", () => {
    // set up
    const expected = [0, 1, "E"]

    // execute
    boardGame.updatePosition()
    boardGame.changePlayerDirection("R")
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving a piece positionX -1 would stay at positionX 0", () => {
    // set up
    const expected = [0, 0, "O"]

    // execute
    boardGame.changePlayerDirection("L")
    boardGame.checkMove("M")
    boardGame.updatePosition()
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving a piece positionY 5 would stay at positionY 4", () => {
    // set up
    const expected = [0, 4, "N"]

    // execute
    boardGame.checkMove("M")
    boardGame.updatePosition()
    boardGame.checkMove("M")
    boardGame.updatePosition()
    boardGame.checkMove("M")
    boardGame.updatePosition()
    boardGame.checkMove("M")
    boardGame.updatePosition()
    boardGame.checkMove("M")
    boardGame.updatePosition()
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving a piece positionX 5 would stay at positionX 4", () => {
    // set up
    const expected = [4, 0, "E"]

    // execute
    boardGame.changePlayerDirection("R")
    boardGame.checkMove("M")
    boardGame.updatePosition()
    boardGame.checkMove("M")
    boardGame.updatePosition()
    boardGame.checkMove("M")
    boardGame.updatePosition()
    boardGame.checkMove("M")
    boardGame.updatePosition()
    boardGame.checkMove("M")
    boardGame.updatePosition()
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving a piece positionY -1 would stay at positionY 0", () => {
    // set up
    const expected = [0, 0, "S"]

    // execute
    boardGame.changePlayerDirection("L")
    boardGame.changePlayerDirection("L")
    boardGame.checkMove("M")
    boardGame.updatePosition()
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving authorised", () => {
    // set up
    const expectedOne = "MOVE AUTHORISED"
    const expectedTwo = [3, 2, "N"]

    // execute
    boardGame.changePlayerDirection("R")
    boardGame.updatePosition()
    boardGame.updatePosition()
    boardGame.updatePosition()
    boardGame.changePlayerDirection("L")
    boardGame.updatePosition()
    boardGame.updatePosition()
    boardGame.checkMove("M")
    const resultOne = boardGame.checkMove()
    const resultTwo = boardGame.playerPosition()

    // verify
    expect(resultOne).toEqual(expectedOne)
    expect(resultTwo).toEqual(expectedTwo)
  })
})
