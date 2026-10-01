---
id: "en-php-guide-class-dotnet"
language: "php"
lang: "en"
category: "guide"
name: "class.dotnet"
title: "The dotnet class"
module: "com"
source_url: "https://www.php.net/manual/en/class.dotnet.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The dotnet class

dotnet

   Introduction  The dotnet class allows you to instantiate a class from a .Net assembly and call its methods and access its properties, if the class and the methods and properties are [visible to COM]().    Neither instantiating static classes nor calling static methods is supported. Instantiating generic classes such as `System.Collections.Generic.List` is not supported either.    Some .Net classes do not implement IDispatch, so while they can be instantiated, calling methods or accessing properties on these classes is not supported.   
> You need to install the .Net runtime on your web server to take advantage of this feature.

 
> Prior to PHP 8.0.0, .Net framework 4.0 and later were not supported by the `dotnet` class. If assemblies had been registered with regasm.exe, the classes could be instantiated as `com` objects, though. As of PHP 8.0.0, .Net framework 4.0 and later are supported via the php.ini directive com.dotnet_version.

    Class Synopsis    `dotnet`   `extends` `variant`        Overloaded Methods  The returned object is an overloaded object, which means that PHP does not see any fixed methods as it does with regular classes; instead, any property or method accesses are passed through to COM and from there to DOTNET. In other words, the .Net object is mapped through the COM interoperability layer provided by the .Net runtime.    Once you have created a dotnet object, PHP treats it identically to any other COM object; all the same rules apply.     dotnet examples  
**dotnet example**

```php

<?php
$stack = new dotnet("mscorlib", "System.Collections.Stack");
$stack->Push(".Net");
$stack->Push("Hello ");
echo $stack->Pop() . $stack->Pop();
?>

     
```
