window.tictoc = {
    findSame: function(click, timeClick) {
      var classes = click.split(/\s+/),
          count = this.bigNumber(+document.getElementById('count').value);

      for (var i = 0; i < classes.length; i++) {
            // классы на кликнутый элемент
            var oneByOne = '.' + classes[i];

                // проверяем на наличие совпадений Х и О в одинаковыйх классах
                if (document.querySelectorAll(oneByOne +' > span').length == count) {
                  console.log("X выйграл");
                  document.getElementById("p1").innerHTML = "Выйграл Х";
                  document.getElementById('last_etap').classList.remove('display_none');

                }
                if (document.querySelectorAll(oneByOne +' > p').length == count) {
                  console.log("O выйграл");
                  document.getElementById('last_etap').classList.remove('display_none');
                  document.getElementById("p1").innerHTML = "Выйграл O";
                }
                if (timeClick == (count*count)) {
                  if (document.querySelectorAll(oneByOne +' > p').length != count &&
                      document.querySelectorAll(oneByOne +' > span').length != count) {

                    document.getElementById("p1").innerHTML = "Победила Дружба!!!";
                    document.getElementById('last_etap').classList.remove('display_none');

                  }
                }

           }

  },
  startGame: function(  ){

    var tbody = document.getElementsByTagName('tbody')[0],
        mainPop = document.getElementById('second_etap').className = "display_none",
        // проверяет сколько столбцов, если больше 40 выводит 39, так как таблица будет не красивая
        count = this.bigNumber(+document.getElementById('count').value),
        table = document.getElementById("myTable"),
        myFuncCalls = 1;

    // удаляет таблицу вначале, мало ли + при начале новой игры
    if (tbody) {
        tbody.parentNode.removeChild(tbody)
    }

    // делается таблица
    this.createTable(table, count);

      myFuncCalls = 1;
      document.getElementsByTagName('tbody')[0].onclick = function (e) {
        if(!e.srcElement.innerHTML){
            var timeClick = myFuncCalls++;
            if(myFuncCalls%2 == 0) {
              e.srcElement.innerHTML = "<span>X<span>";
              document.getElementById('moveAl').innerHTML = 'Ходит "O"'
            }
            else{
              e.srcElement.innerHTML = "<p>O</p>";
              document.getElementById('moveAl').innerHTML = 'Ходит "Х"'
            }
            tictoc.findSame(e.srcElement.className, timeClick);
        }
      }

  },
    startAgain: function() {
      document.getElementById('last_etap').className = 'display_none';
      document.getElementById('second_etap').classList.remove('display_none');

    },
    hasClass: function (element, cls) {
      return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    },
    bigNumber:function(count){
      if (count < 1) {
          return 3;
      }
      return (count > 40) ? 39 : count;
    },
    createTable:function(table, count){
      for (var i = 0; i < count; i++) {
          var row = table.insertRow(i);
          for (var k = 0; k < count; k++) {
              var cell = row.insertCell(k);
              table.rows[i].cells[k].classList.add('row'+i);
              table.rows[i].cells[k].classList.add('cell'+k);
              if (i == k) {
                  table.rows[i].cells[k].classList.add('dgn0');
              }
              if (k == count - i - 1) {
                  table.rows[i].cells[k].classList.add('dgn1');
              }
          }
      }
      document.getElementById('moveAl').innerHTML = 'Ходит "Х"'
    }
};
