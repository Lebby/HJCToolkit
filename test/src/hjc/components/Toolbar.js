(function ($)
{
  hjc["_"].createObject(Toolbar, hjc.Container, "hjc");
  function Toolbar()
  {
    hjc.Container.call(this, selector);
  }


  //jQuery attach
  window.hjc.Toolbar = Toolbar;
})(jQuery);
