/** gets a number between 1 and 10 for the callback
 * @callback numberHandler is passed the number generated
 */
 function getNumber(numberHandler) {
    numberHandler(Math.ceil(Math.random() * 10));
  }

function actionA(callback) {
    callback(true);
  }
  
  function actionB(result: boolean) {
    expect(result).toBeTruthy();
  }
  
  describe("actionA", () => {
    it("should be true", () => {
      actionA(actionB);
    });
  });