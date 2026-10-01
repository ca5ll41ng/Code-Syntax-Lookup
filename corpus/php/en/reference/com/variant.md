---
id: "en-php-guide-class-variant"
language: "php"
lang: "en"
category: "guide"
name: "class.variant"
title: "variant class"
module: "com"
source_url: "https://www.php.net/manual/en/class.variant.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# variant class

variant

   Introduction  The VARIANT is COM's equivalent of the PHP zval; it is a structure that can contain a value with a range of different possible types. The variant class provided by the COM extension allows you to have more control over the way that PHP passes values to and from COM.      Class Synopsis    `variant`        variant examples  
**variant example**

```php

<?php
$v = new variant(42);
print "The type is " . variant_get_type($v) . "<br/>";
print "The value is " . $v . "<br/>";
?>

     
```

   
> When returning a value or fetching a variant property, the variant is converted to a PHP value only when there is a direct mapping between the types that would not result in a loss of information. In all other cases, the result is returned as an instance of the variant class. You can force PHP to convert or evaluate the variant as a PHP native type by using a casting operator explicitly, or implicitly casting to a string by `print()`ing it. You may use the wide range of variant functions to perform arithmetic operations on variants without forcing a conversion or risking a loss of data.

  See also `variant_get_type()`.
