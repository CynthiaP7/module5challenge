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

  //add event listener to save button
  saveButtons.on('click', saveTask);

  //claases for time blocks
  $('time-block').each(function (){
    var hour = parseInt($(this).attr('id').split('-')[1]);
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addclass('future');
    }
  });

})

