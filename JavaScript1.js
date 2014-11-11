var saveDelimiter = document.getElementById("delimiterInput");//כאן נשמר הערך של מה שיפריד ביו האייטמים באריי
var itemToSave = document.getElementById("itemToAddInput");//כאן נשמרים האייטמים שהמשתמש מכניס
var theArrayToPush = [];//למערך הזה נעשה פוש לכל אייטם.
var divToShowArray = document.getElementById("arrayString");//הדיב שבו יוצג המערך לאחר הג'וין
var theUl=document.getElementById("theUl");

var pushToArray = function () {
    theArrayToPush.push(itemToSave.value);
    makeListFromItem();
    resetTheItem();
};
/*הפונקציה הזאת דוחפת למערך כל אייטם*/

var makeListFromItem = function () {
    var liForItem = document.createElement("li");
    liForItem.innerHTML = itemToSave.value;
    theUl.appendChild(liForItem);
}
/*הפונקציה הזאת יוצרת תגית אל איי ונותנת לה כאינר את הוליו
של האינפוט אייטם ומוסיפה את האל איי כילד ליול.
ואז כאשר נלחץ פוש טו אריי אז גם הוליו יוצג בליסט.*/

var resetTheItem = function () {
    itemToSave.value = "";
};
/*עושה ריסט לשדה של האייטם*/

var resetAllFildes = function () {
    saveDelimiter.value = "";
    resetTheItem();
};
/*עושה ריסט לכל השדות*/

var joinArray = function () {
    if (!(saveDelimiter.value.length < 1)) {
        divToShowArray.innerHTML = theArrayToPush.join(saveDelimiter.value);
        resetAllFildes();
        theArrayToPush = [];
        theUl.innerHTML = "";
    }

};
/* מציגה את המערך שנוצר רק כאשר יש ערך בשדה של הדלימיטר ולאחר מכן מרוקנת
את המערך ואת היול כדי שהמשתמש יוכל להכניס מערך חדש.*/
