function viewPDF() {
    var scale = 1.5;
    var viewport = page.getViewport({ scale: scale, });
    // Support HiDPI-screens.
    var outputScale = window.devicePixelRatio || 1;
    
    var canvas = document.getElementById('the-canvas');
    var context = canvas.getContext('2d');
    
    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = Math.floor(viewport.width) + "px";
    canvas.style.height =  Math.floor(viewport.height) + "px";
    
    var transform = outputScale !== 1
      ? [outputScale, 0, 0, outputScale, 0, 0]
      : null;
    
    var renderContext = {
      canvasContext: context,
      transform: transform,
      viewport: viewport
    };
    page.render(renderContext);
}