var instance = new vidbg('.video', {
    mp4: 'video/world.mp4', // URL формат MP4 video
    webm: 'video/world.webm', // URL формат webm video
    poster: 'video/poster.jpg', // постер если видео не загружается
    overlay: false // Boolean to display the overlay or not
  });
  //подстроить размер
  instance.resize();

  var rellax = new Rellax('.rocket');
  //убираем паралакс при экране 576
  if (document.body.clientWidth < 576) {
    rellax.destroy();
  }

  AOS.init();
  