const SecureSheetDB = require('../index.js')
const creds = require( '../google-generated-creds.json');
const { test, success, output, done } = require('./TestHelpers.js')

// ------ Run Test Main Function ------
let run = async () => {
  console.log("⚠️ ⚠️  Start Tests ⚠️ ⚠️ \n");

  // First Test
  test(1, "Testing for db connection")
  await SecureSheetDB.connect('1xusj_IWRF05dHlgnZnP5p1W4N7YNquA2fv4AHMzHq4c', creds )
  success()

  // Second Test
  test(2, "Testing for listing out of all tables")
  let tables = await SecureSheetDB.getAllTableTitles()
  output(tables)
  success()

  //Third Test
  test(3, "Testing for data insertion")
  let insertion = await SecureSheetDB.insert("Sheet3", {})
  output(insertion);
  success()

  //Fourth Test
  // test(4, "Testing to get table headers")
  // let headers = await SecureSheetDB.getAllTableHeaderTitles("Sheet1")
  // output(headers)
  // success()

  // Fifth Test
  // test(5, "Testing for data updating")
  // let updating = await SecureSheetDB.update("Sheet1", {lol: "zzz"})
  // output(updating)
  // success()

  done()
}

// Run test
run().catch((error) => {
  console.log(error);
})
