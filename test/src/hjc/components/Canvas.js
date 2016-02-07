(function ($)
{
  function Canvas()
  {
    var _items;
    var _selector;
    
    
    this.selector = function(selector)
    {
      if (selector == undefined ) return _selector;
      else _selector = selector;
      return this;
    };
  }


  //jQuery attach
  window.hjc.Canvas = Canvas;
})(jQuery);