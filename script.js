$(document).ready(function () {
  var saveButtons = $('.saveBtn');
  var taskForTheDay = $('.description');
  var currentHour = dayjs().hour();
  console.log ("currentHour= ", currentHour);
  //Function to save to local storage

  function saveTask(event) {
    event.preventDefault();
    var hourId = $(this).parent().attr('id');
    var task = $(this).siblings('.description').val();

    localStorage.setItem(hourId, task);
    alert('Saved Successfully!');
  }

  //add event listener to save button
  saveButtons.on('click', saveTask);

  //classes for time blocks
  $('.time-block').each(function () {
    var hourId = parseInt($(this).attr('id').split('-')[1]);
    console.log  ("hourId= ", hourId);
    if (hourId < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (hourId === currentHour) {
      $(this).addClass('present').removeClass('past future');
    } else {
      $(this).addClass('future').removeClass('past present');
    }
  });

  // var labelTime = dayjs().hour(hourId).format ('hA');
  // $(this).find('.hour').text(timeLabel);

});

//display current date

$('#currentDay').text(dayjs().format('MMMM DD, YYYY'));

$('.time-block').each(function () {
  var hourId = $(this).attr('id');
  var savedTask = localStorage.getItem(hourId);

  if (savedTask) {
    $(this).find('.description').val(savedTask);
  }

});




