(function ($)
{

  hjc["_"].createObject(Canvas, hjc.Container, "hjc");
  function Canvas(selector)
  {
    hjc.Container.call(this,selector);
    
  }


  //jQuery attach
  window.hjc.Canvas = Canvas;
})(jQuery);