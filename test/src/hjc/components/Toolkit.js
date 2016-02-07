(function ($)
{
  function Toolkit()
  {
    var _toolbar;
    var _canvas;



    this.canvas = function (canvas)
    {
      if (canvas == undefined)
      {
        return _canvas;
      } else
      {
        _canvas = canvas;
        return this;
      }
    };

    this.toolbar = function (toolbat)
    {
      if (toolbar == undefined)
        return _toolbar;
      else
        _toolbar = toolbar;
      return this;
    };
  }



  //jQuery attach
  window.hjc.Toolkit = Toolkit;
})(jQuery);