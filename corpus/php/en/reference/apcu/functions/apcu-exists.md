---
id: "en-php-function-function-apcu-exists"
language: "php"
lang: "en"
category: "function"
name: "apcu_exists"
title: "Checks if entry exists"
signature: "bool|array apcu_exists(string|array $keys)"
module: "apcu"
source_url: "https://www.php.net/manual/en/function.apcu-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if entry exists

## Description

```php
bool|array apcu_exists(string|array $keys)
```

Checks if one or more APCu entries exist.

## Parameters

- **`$keys`** — A `string`, or an `array` of strings, that contain keys.

## Return Values

Returns `true` if the key exists, otherwise `false` Or if an `array` was passed to `$keys`, then an array is returned that contains all existing keys, or an empty array if none exist.

## Examples

**`apcu_exists()` example**

```php


<?php
$fruit  = 'apple';
$veggie = 'carrot';

apcu_store('foo', $fruit);
apcu_store('bar', $veggie);

if (apcu_exists('foo')) {
    echo "Foo exists: ";
    echo apcu_fetch('foo');
} else {
    echo "Foo does not exist";
}

echo PHP_EOL;
if (apcu_exists('baz')) {
    echo "Baz exists.";
} else {
    echo "Baz does not exist";
}

echo PHP_EOL;

$ret = apcu_exists(array('foo', 'donotexist', 'bar'));
var_dump($ret);

?>

   
```

The above example will output something similar to:

```text


Foo exists: apple
Baz does not exist
array(2) {
  ["foo"]=>
  bool(true)
  ["bar"]=>
  bool(true)
}

   
```

## See Also

 `apcu_cache_info()` `apcu_fetch()`
