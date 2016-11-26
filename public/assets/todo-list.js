$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');//target the input field
      var todo = {item: item.val()};//store the value of the input in a variable as an object like in todoController

      $.ajax({
        type: 'POST',
        url: '/',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }//get the data and reload page
      });//AJAX: pass data from the variable todo as POST to the route
      return false;
  });//set eventListener on submit

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");//store the text of the list item
      $.ajax({
        type: 'DELETE',
        url: '/' + item,//send delete to this url
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }//get the data and reload page
      });//AJAX
  });

});
