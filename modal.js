let dialog_window = document.querySelector('.modal-window');
let open_button = document.getElementById('open-model-window');
let dialog_background = document.querySelector('.modal-background');
let close_button = document.querySelector('.modal-cross');

open_button.onclick = function () {
    dialog_background.classList.add('show')
    dialog_window.show()

  };

  close_button.onclick = function () {
    dialog_window.close();
    dialog_background.classList.remove('show')
};
