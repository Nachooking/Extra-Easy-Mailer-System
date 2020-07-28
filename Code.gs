function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var first=ss.getSheetByName("Mailer Sheet");
  first.activate();
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Script').addItem('Emailer', 'menuItem1')
  .addToUi();
}
function menuItem1() {
  var html = HtmlService.createHtmlOutputFromFile('Pages')
      .setTitle('Mailer Service')
      .setWidth(300);
  SpreadsheetApp.getUi()
      .showSidebar(html)
}

function gettickedemails() {
      var ss = SpreadsheetApp.openById("1fRdNHahQ8K_5opsFk_I9-dYKXER9Cm_bnw46g9TsRIw");
      var first=ss.getSheetByName("Mailer Sheet");
      first.activate();
      var data=first.getRange(2, 1, first.getLastRow()-1, 2).getValues();
      Logger.log(data);
      return data;
}

function SendEmails(subject,body) {
      var ss = SpreadsheetApp.openById("1fRdNHahQ8K_5opsFk_I9-dYKXER9Cm_bnw46g9TsRIw");
      var first=ss.getSheetByName("Mailer Sheet");
      first.activate();
      var data=first.getRange(2, 1, first.getLastRow()-1, 2).getValues();
      data=data.filter(function(r){ return r[1] == true});
      data.forEach(function(row){
      MailApp.sendEmail(row[0],subject,body);
      });
   }