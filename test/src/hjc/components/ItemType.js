(function ($)
{
  var _defaultConfiguration =
  {
    parentType : undefined,
    childrenType : undefined,    
    name : undefined,
    description : undefined,
    type : undefined,
    toolbarItem :
    {
      icon: undefined,
      name: undefined,
      parent : undefined,
      chidren : undefined
    },
    canvasItem:
    {
      dataTemplate:{}
    }
    
  };
  function ItemType(configuration)
  {
    var _conf = {};


    this.conf = function (configuration)
    {
      if (configuration == undefined)
      {
        return _conf;
      } else
      {
        _conf = configuration;
        return this;
      }
    };
  }


  //jQuery attach
  window.hjc.ItemType = ItemType;
})(jQuery);