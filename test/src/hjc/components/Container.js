(function ($)
{
  
  function Container(selector)
  {
    var _items;
    var _selector;

    this.selector = function (selector)
    {
      if (selector == undefined)
        return _selector;
      else
        _selector = selector;
      return this;
    };

    this.items = function (items)
    {
      _items = items;
    };
    
  }


  //jQuery attach
  window.hjc.Container = Container;
})(jQuery);