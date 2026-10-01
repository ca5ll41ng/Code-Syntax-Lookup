---
id: "en-php-function-memcached-setoptions"
language: "php"
lang: "en"
category: "function"
name: "Memcached::setOptions"
title: "Set Memcached options"
signature: "public bool Memcached::setOptions(array $options)"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.setoptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set Memcached options

## Description

```php
public bool Memcached::setOptions(array $options)
```

`Memcached::setOptions()` is a variation of the `Memcached::setOption()` that takes an array of options to be set.

## Parameters

- **`$options`** — An associative array of options where the key is the option to set and the value is the new value for the option.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Setting Memcached options**

```php


<?php
$m = new Memcached();
var_dump($m->getOption(Memcached::OPT_HASH) == Memcached::HASH_DEFAULT);

$m->setOptions(array(Memcached::OPT_HASH => Memcached::HASH_MURMUR, Memcached::OPT_PREFIX_KEY => "widgets"));

var_dump($m->getOption(Memcached::OPT_HASH) == Memcached::HASH_DEFAULT);
echo "Prefix key is now: ", $m->getOption(Memcached::OPT_PREFIX_KEY), "\n";
?>

    
```

The above example will output:

```text


bool(true)
bool(false)
Prefix key is now: widgets

    
```

## See Also

`Memcached::getOption()` `Memcached::setOption()` Memcached Constants
