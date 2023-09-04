$(document).ready(function() {
  var saveButtons = $('.saveBtn');
  var taskForTheDay = $('.description');
  var currentHour = dayjs().hour();

  //Function to save to local storage

  function saveTask (event) {
    event.preventDefault ();
    var hourId = $(this).parent().attr('id');
    var task = $(this).siblings('.description').val();

    localStorage.setItem(hourId, task);
    alert('Saved Successfully!');
  }

}

