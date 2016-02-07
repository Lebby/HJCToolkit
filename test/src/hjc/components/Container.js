(function ($)
{

  function Container(selector)
  {
    var _items = [];
    var _selector;

    if (selector != undefined)
      _selector = selector;
    else
      selector = "body";

    this.selector = function (selector)
    {
      if (selector == undefined)
        return _selector;
      else
        _selector = selector;
      return this;
    };

    this.items = function ()
    {
      return _items;
    };

  }


  //jQuery attach
  window.hjc.Container = Container;
})(jQuery);