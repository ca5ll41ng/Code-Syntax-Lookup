---
id: "en-php-function-arrayobject-uksort"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::uksort"
title: "Sort the entries by keys using a user-defined comparison function"
signature: "public true ArrayObject::uksort(callable $callback)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.uksort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort the entries by keys using a user-defined comparison function

## Description

```php
public true ArrayObject::uksort(callable $callback)
```

This function sorts the keys of the entries using a user-supplied comparison function. The key to entry correlations will be maintained.

> If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

## Parameters

- **`$callback`** — The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.
  > Returning *non-integer* values from the comparison function, such as `float`, will result in an internal cast to `int` of the callback's return value. So values such as `0.99` and `0.1` will both be cast to an integer value of `0`, which will compare such values as equal.



## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

**`ArrayObject::uksort()` example**

```php


<?php
function cmp($a, $b) {
    $a = preg_replace('@^(a|an|the) @', '', $a);
    $b = preg_replace('@^(a|an|the) @', '', $b);
    return strcasecmp($a, $b);
}

$array = array("John" => 1, "the Earth" => 2, "an apple" => 3, "a banana" => 4);
$arrayObject = new ArrayObject($array);
$arrayObject->uksort('cmp');

foreach ($arrayObject as $key => $value) {
    echo "$key: $value\n";
}
?>

    
```

The above example will output:

```text


an apple: 3
a banana: 4
the Earth: 2
John: 1

    
```

## See Also

`ArrayObject::asort()` `ArrayObject::ksort()` `ArrayObject::natsort()` `ArrayObject::natcasesort()` `ArrayObject::uasort()` `uksort()`
