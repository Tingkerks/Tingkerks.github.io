const backgroundVideo = new BackgroundVideo('.bv-video', {
      src: [
        'img/flowers.mp4',
        
      ],
      onReady: function () {
        // Use onReady() to prevent flickers or force loading state
        const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
        vidParent.classList.add('bv-video-wrap--ready');
      }
    });

 fullpage.initialize('#fullpage', {
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    css3:true
  });