(function ()
{
  function hjc()
  {
    hjc["_"] = {};
  }
  hjc["_"].createObject = function (objectClass, parent, namespace)
  {

    if (parent != undefined)
    {
      objectClass.prototype = Object.create(parent.prototype);
      objectClass.prototype.construtor = objectClass;
    }

    if (namespace == undefined)
    {
      if (window.objectClass == undefined)
      {
        window.objectClass = objectClass;
      }
    } else
    {
      hjc["_"].createNamespace(namespace).objectClass = objectClass;
    }
  };

  hjc["_"].createNamespace = function (namespace, global)
  {
    if (typeof namespace === "undefined")
    {
      if (global == undefined || global == true)
      {
        if (typeof window.namespace === "undefined")
        {
          window[namespace] = {};
          return window[namespace];
        } else
        {
          return namespace;
        }
      }
    }
  };

  window.hjc = hjc;
})();