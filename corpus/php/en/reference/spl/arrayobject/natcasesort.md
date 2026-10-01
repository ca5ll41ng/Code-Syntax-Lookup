---
id: "en-php-function-arrayobject-natcasesort"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::natcasesort"
title: "Sort an array using a case insensitive \"natural order\" algorithm"
signature: "public true ArrayObject::natcasesort()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.natcasesort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort an array using a case insensitive "natural order" algorithm

## Description

```php
public true ArrayObject::natcasesort()
```

This method is a case insensitive version of ArrayObject::natsort.

This method implements a sort algorithm that orders alphanumeric strings in the way a human being would while maintaining key/value associations. This is described as a "natural ordering".

> If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

**`ArrayObject::natcasesort()` example**

```php


<?php
$array = array('IMG0.png', 'img12.png', 'img10.png', 'img2.png', 'img1.png', 'IMG3.png');

$arr1 = new ArrayObject($array);
$arr2 = clone $arr1;

$arr1->asort();
echo "Standard sorting\n";
var_dump($arr1);

$arr2->natcasesort();
echo "\nNatural order sorting (case-insensitive)\n";
var_dump($arr2);
?>

    
```

The above example will output:

```text


Standard sorting
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(6) {
    [0]=>
    string(8) "IMG0.png"
    [5]=>
    string(8) "IMG3.png"
    [4]=>
    string(8) "img1.png"
    [2]=>
    string(9) "img10.png"
    [1]=>
    string(9) "img12.png"
    [3]=>
    string(8) "img2.png"
  }
}

Natural order sorting (case-insensitive)
object(ArrayObject)#2 (1) {
  ["storage":"ArrayObject":private]=>
  array(6) {
    [0]=>
    string(8) "IMG0.png"
    [4]=>
    string(8) "img1.png"
    [3]=>
    string(8) "img2.png"
    [5]=>
    string(8) "IMG3.png"
    [2]=>
    string(9) "img10.png"
    [1]=>
    string(9) "img12.png"
  }
}

    
```

For more information see: Martin Pool's [Natural Order String Comparison]() page.

## See Also

`ArrayObject::asort()` `ArrayObject::ksort()` `ArrayObject::natsort()` `ArrayObject::uasort()` `ArrayObject::uksort()` `natcasesort()`
