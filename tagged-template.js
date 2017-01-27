console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
function cleanString(stringToClean) {
  var safeString;
  safeString = stringToClean.replace(/&/g, '&amp;');
  safeString = safeString.replace(/>/g, '&gt;');
  safeString = safeString.replace(/</g, '&lt;');
  safeString = safeString.replace(/"/g, '&quot;');
  safeString = safeString.replace(/'/g, '&apos;');
  return safeString;
}
function html(stringArray, userName, comment) {
  var safeComment = cleanString(comment);
  var safeUser = cleanString(userName);
  var finalResult = `${stringArray[0]}${safeUser}${stringArray[1]}${safeComment}${stringArray[2]}`;
  return finalResult;
}
module.exports = html;