(function ($)
{
  function CanvasItem()
  {
    var _itemType;
    var _parent;
    var _children;
    var _data;


    this.data = function (data)
    {
      if (data == undefined)
      {
        return  _data;
      } else
      {
        _data = data;
        return this;
      }
    };

    this.itemType = function (itemType)
    {
      if (itemType == undefined)
      {
        return  _itemType;
      } else
      {
        _itemType = itemType;
        return this;
      }
    };

    this.parent = function (parent)
    {
      if (parent == undefined)
      {
        return _parent;
      } else
      {
        _parent = parent;
        return this;
      }
    };

    this.children = function (children)
    {
      if (children == undefined)
      {
        return _children;
      } else
      {
        _children = children;
        return this;
      }
    };



  }


  //jQuery attach
  window.hjc.CanvasItem = CanvasItem;
})(jQuery);


