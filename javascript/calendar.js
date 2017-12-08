
    ///https://www.youtube.com/watch?v=DFu_636ndec&app=deskto
    //1. create a function
    //2.create variables
    //- Date, Months[months of the year array], Year
    //3.create method (properly containing function inside variables) 

    //************ 1

window.onload = function () {

    //************ 2  
    var day = new Date();
    //Date 2017-12-08T17:40:59.054Z
    var months = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //************ 3 - mothods and function inside variable. Fuction are    
    var current_day = day.getDay();

    var current_month = day.getMonth();
    //0 to 11
    var current_year = day.getFullYear();
    //2014
    var first_date_of_month = months[current_month] + " " + 1 + " " + current_year;
    //**********  4 
    var tmp = new Date(first_date_of_month).toDateString();

    ///cut the day name in to three 3 letters mon
    var first_day = tmp.substring(0, 3);
    var day_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var day_numbers_current_month = day_names.indexOf(first_day); //1-6
    var days_of_current_month = new Date(current_year, current_month + 1, 0).getDate(); //30
    // alert(day_numbers_current_month);
    //The Sep 30 210

    var my_calendar = get_calendar(day_numbers_current_month, days_of_current_month);
    //document.getElementById('calendar-mm-yyyy').innertHTML = months[current_month]+ " " + current_year;
    
    document.getElementById('calendar-dates').appendChild(my_calendar);

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
    document.getElementById("today").innertHTML = today;
    alert(dd);
    alert(months[current_month]+ "/"+dd+"/" + current_year);
}
    //end windown function

function get_calendar (day_numbers_current_month, days_of_current_month){
//    alert(days_of_current_month); 
   //Create table
    var table= document.createElement('table');
   
   //Create first row
    var table_row= document.createElement('tr');
     
    //days loop looks for dat on array and instert on table cell
    
     for (var table_column=0; table_column<=6; table_column++) {
         
         var table_cell=document.createElement('td');
         table_cell.innerHTML = "SMTWTFS"[table_column];
         table_row.appendChild(table_cell);
         }

         table.appendChild(table_row);

         // Create second row
        
         table_row= document.createElement('tr');
         var table_column;
         for (table_column = 0; table_column <= 6; table_column++) {
             if (table_column == day_numbers_current_month) {
                 break;
             }
             var table_cell = document.createElement('td');
             table_cell.innerHTML = "";
             table_row.appendChild(table_cell);
         }
             var count =1
    
    for (; table_column <= 6; table_column++) {
        var table_cell = document.createElement('td');
        table_cell.innerHTML = count;
        //increment count by one
        count++;
        table_row.appendChild(table_cell);
    }
             table.appendChild(table_row);
            

          
         // Create Third Row and the rest

    for(var table_row_number = 3; table_row_number <= 7; table_row_number++) {
        table_row = document.createElement('tr');
        for (var table_column = 0; table_column <= 6; table_column++) {
            if( count > days_of_current_month){
                table.appendChild(table_row);
                return table;
            }
            var table_cell = document.createElement('td');
            table_cell.innerHTML = count;
            count++;
            table_row.appendChild(table_cell);
        }
        table.appendChild(table_row);
    }

    

return table;

         } 

