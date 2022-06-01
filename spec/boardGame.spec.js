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

  it("Moving a piece right", () => {
    // set up
    const expected = [0, 0, "E"]

    // execute
    boardGame.changePlayerDirectionR()
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving a piece right x3", () => {
    // set up
    const expected = [0, 0, "O"]

    // execute
    boardGame.changePlayerDirectionR()
    boardGame.changePlayerDirectionR()
    boardGame.changePlayerDirectionR()
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving a piece left", () => {
    // set up
    const expected = [0, 0, "O"]

    // execute
    boardGame.changePlayerDirectionL()
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving a piece left x3", () => {
    // set up
    const expected = [0, 0, "E"]

    // execute
    boardGame.changePlayerDirectionL()
    boardGame.changePlayerDirectionL()
    boardGame.changePlayerDirectionL()
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving a piece forward and right", () => {
    // set up
    const expected = [0, 1, "E"]

    // execute
    boardGame.updatePosition()
    boardGame.changePlayerDirectionR()
    const result = boardGame.playerPosition()

    // verify
    expect(result).toEqual(expected)
  })

  it("Moving a piece positionX -1 would stay at positionX 0", () => {
    // set up
    const expected = [0, 0, "O"]

    // execute
    boardGame.changePlayerDirectionL()
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
    boardGame.changePlayerDirectionR()
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
    boardGame.changePlayerDirectionL()
    boardGame.changePlayerDirectionL()
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
    boardGame.changePlayerDirectionR()
    boardGame.updatePosition()
    boardGame.updatePosition()
    boardGame.updatePosition()
    boardGame.changePlayerDirectionL()
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
