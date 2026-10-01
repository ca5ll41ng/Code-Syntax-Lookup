---
id: "en-php-function-function-apcu-cas"
language: "php"
lang: "en"
category: "function"
name: "apcu_cas"
title: "Updates an old value with a new value"
signature: "bool apcu_cas(string $key, int $old, int $new)"
module: "apcu"
source_url: "https://www.php.net/manual/en/function.apcu-cas.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Updates an old value with a new value

## Description

```php
bool apcu_cas(string $key, int $old, int $new)
```

`apcu_cas()` updates an already existing integer value if the `$old` parameter matches the currently stored value with the value of the `$new` parameter.

## Parameters

- **`$key`** — The key of the value being updated.
- **`$old`** — The old value (the value currently stored).
- **`$new`** — The new value to update to.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`apcu_cas()` example**

```php


<?php
apcu_store('foobar', 2);
echo '$foobar = 2', PHP_EOL;
echo '$foobar == 1 ? 2 : 1 = ', (apcu_cas('foobar', 1, 2) ? 'ok' : 'fail'), PHP_EOL;
echo '$foobar == 2 ? 1 : 2 = ', (apcu_cas('foobar', 2, 1) ? 'ok' : 'fail'), PHP_EOL;

echo '$foobar = ', apcu_fetch('foobar'), PHP_EOL;

echo '$f__bar == 1 ? 2 : 1 = ', (apcu_cas('f__bar', 1, 2) ? 'ok' : 'fail'), PHP_EOL;

apcu_store('perfection', 'xyz');
echo '$perfection == 2 ? 1 : 2 = ', (apcu_cas('perfection', 2, 1) ? 'ok' : 'epic fail'), PHP_EOL;

echo '$foobar = ', apcu_fetch('foobar'), PHP_EOL;
?>

   
```

The above example will output something similar to:

```text


$foobar = 2
$foobar == 1 ? 2 : 1 = fail
$foobar == 2 ? 1 : 2 = ok
$foobar = 1
$f__bar == 1 ? 2 : 1 = fail
$perfection == 2 ? 1 : 2 = epic fail
$foobar = 1

   
```

## See Also

 `apcu_dec()` `apcu_store()`
