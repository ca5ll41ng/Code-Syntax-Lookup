---
id: "en-php-function-quickhashstringinthash-update"
language: "php"
lang: "en"
category: "function"
name: "QuickHashStringIntHash::update"
title: "This method updates an entry in the hash with a new value"
signature: "public bool QuickHashStringIntHash::update(string $key, int $value)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashstringinthash.update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method updates an entry in the hash with a new value

## Description

```php
public bool QuickHashStringIntHash::update(string $key, int $value)
```

This method updates an entry with a new value, and returns whether the entry was update. If there are duplicate keys, only the first found element will get an updated value. Use QuickHashStringIntHash::CHECK_FOR_DUPES during hash creation to prevent duplicate keys from being part of the hash.

## Parameters

- **`$key`** — The key of the entry to update.
- **`$value`** — The new value for the entry. If a non-string is passed, it will be converted to a string automatically if possible.

## Return Values

`true` when the entry was found and updated, and `false` if the entry was not part of the hash already.

## Examples

**`QuickHashStringIntHash::update()` example**

```php


<?php
$hash = new QuickHashStringIntHash( 1024 );

$hash->add( 'six', 314159265 );
$hash->add( "a lot", 314159265 );

echo $hash->get( 'six' ), "\n";
echo $hash->get( 'a lot' ), "\n";

var_dump( $hash->update( 'a lot', 314159266 ) );
var_dump( $hash->update( "a lot plus one", 314159999 ) );

echo $hash->get( 'six' ), "\n";
echo $hash->get( 'a lot' ), "\n";
?>

   
```

The above example will output something similar to:

```text


314159265
314159265
bool(true)
bool(false)
314159265
314159266

   
```
