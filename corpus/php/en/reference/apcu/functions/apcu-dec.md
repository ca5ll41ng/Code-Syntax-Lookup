---
id: "en-php-function-function-apcu-dec"
language: "php"
lang: "en"
category: "function"
name: "apcu_dec"
title: "Decrease a stored number"
signature: "int|false apcu_dec(string $key, int $step = 1, [bool $success = ...], int $ttl = 0)"
module: "apcu"
source_url: "https://www.php.net/manual/en/function.apcu-dec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decrease a stored number

## Description

```php
int|false apcu_dec(string $key, int $step = 1, [bool $success = ...], int $ttl = 0)
```

Decreases a stored integer value.

## Parameters

- **`$key`** — The key of the value being decreased.
- **`$step`** — The step, or value to decrease.
- **`$success`** — Optionally pass the success or fail boolean value to this referenced variable.
- **`$ttl`** — TTL to use if the operation inserts a new value (rather than decrementing an existing one).

## Return Values

Returns the current value of `$key`'s value on success, or `false` on failure

## Examples

**`apcu_dec()` example**

```php


<?php
echo "Let's do something with success", PHP_EOL;

apcu_store('anumber', 42);

echo apcu_fetch('anumber'), PHP_EOL;

echo apcu_dec('anumber'), PHP_EOL;
echo apcu_dec('anumber', 10), PHP_EOL;
echo apcu_dec('anumber', 10, $success), PHP_EOL;

var_dump($success);

echo "Now, let's fail", PHP_EOL, PHP_EOL;

apcu_store('astring', 'foo');

$ret = apcu_dec('astring', 1, $fail);

var_dump($ret);
var_dump($fail);
?>

   
```

The above example will output something similar to:

```text


Let's do something with success
42
41
31
21
bool(true)
Now, let's fail

bool(false)
bool(false)

   
```

## See Also

 `apcu_inc()`
