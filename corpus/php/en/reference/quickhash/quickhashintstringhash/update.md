---
id: "en-php-function-quickhashintstringhash-update"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntStringHash::update"
title: "This method updates an entry in the hash with a new value"
signature: "public bool QuickHashIntStringHash::update(int $key, string $value)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintstringhash.update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method updates an entry in the hash with a new value

## Description

```php
public bool QuickHashIntStringHash::update(int $key, string $value)
```

This method updates an entry with a new value, and returns whether the entry was update. If there are duplicate keys, only the first found element will get an updated value. Use QuickHashIntStringHash::CHECK_FOR_DUPES during hash creation to prevent duplicate keys from being part of the hash.

## Parameters

- **`$key`** — The key of the entry to update.
- **`$value`** — The new value for the entry. If a non-string is passed, it will be converted to a string automatically if possible.

## Return Values

`true` when the entry was found and updated, and `false` if the entry was not part of the hash already.

## Examples

**`QuickHashIntStringHash::update()` example**

```php


<?php
$hash->add( 161803398, "--" );
$hash->add( 314159265, "a lot" );

echo $hash->get( 161803398 ), "\n";
echo $hash->get( 314159265 ), "\n";

var_dump( $hash->update( 314159265, "a lot plus one" ) );
var_dump( $hash->update( 314159999, "a lot plus one" ) );

echo $hash->get( 161803398 ), "\n";
echo $hash->get( 314159265 ), "\n";
?>

   
```

The above example will output something similar to:

```text


--
a lot
bool(true)
bool(false)
--
a lot plus one

   
```
