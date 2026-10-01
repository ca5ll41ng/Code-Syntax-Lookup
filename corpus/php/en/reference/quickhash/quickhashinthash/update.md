---
id: "en-php-function-quickhashinthash-update"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntHash::update"
title: "This method updates an entry in the hash with a new value"
signature: "public bool QuickHashIntHash::update(int $key, int $value)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashinthash.update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method updates an entry in the hash with a new value

## Description

```php
public bool QuickHashIntHash::update(int $key, int $value)
```

This method updates an entry with a new value, and returns whether the entry was update. If there are duplicate keys, only the first found element will get an updated value. Use `QuickHashIntHash::CHECK_FOR_DUPES` during hash creation to prevent duplicate keys from being part of the hash.

## Parameters

- **`$key`** — The key of the entry to update.
- **`$value`** — The new value to update the entry with.

## Return Values

`true` when the entry was found and updated, and `false` if the entry was not part of the hash already.

## Examples

**`QuickHashIntHash::update()` example**

```php


<?php
$hash = new QuickHashIntHash( 1024 );

var_dump( $hash->add( 141421, 173205 ) );
var_dump( $hash->update( 141421, 223606 ) );
var_dump( $hash->get( 141421 ) );
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(true)
int(223606)

   
```
