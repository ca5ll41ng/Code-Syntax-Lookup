---
id: "en-php-function-quickhashintstringhash-set"
language: "php"
lang: "en"
category: "function"
name: "QuickHashIntStringHash::set"
title: "This method updates an entry in the hash with a new value, or adds a new one if the entry doesn't exist"
signature: "public int QuickHashIntStringHash::set(int $key, string $value)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashintstringhash.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method updates an entry in the hash with a new value, or adds a new one if the entry doesn't exist

## Description

```php
public int QuickHashIntStringHash::set(int $key, string $value)
```

This method tries to update an entry with a new value. In case the entry did not yet exist, it will instead add a new entry. It returns whether the entry was added or update. If there are duplicate keys, only the first found element will get an updated value. Use QuickHashIntStringHash::CHECK_FOR_DUPES during hash creation to prevent duplicate keys from being part of the hash.

## Parameters

- **`$key`** — The key of the entry to add or update.
- **`$value`** — The value of the entry to add. If a non-string is passed, it will be converted to a string automatically if possible.

## Return Values

2 if the entry was found and updated, 1 if the entry was newly added or 0 if there was an error.

## Examples

**`QuickHashIntStringHash::set()` example**

```php


<?php
$hash = new QuickHashIntStringHash( 1024 );

echo "Set->Add\n";
var_dump( $hash->get( 46692 ) );
var_dump( $hash->set( 46692, "sixteen thousand ninety one" ) );
var_dump( $hash->get( 46692 ) );

echo "Set->Update\n";
var_dump( $hash->set( 46692, "twenty nine thousand nine hundred six" ) );
var_dump( $hash->get( 46692 ) );
?>

   
```

The above example will output something similar to:

```text


Set->Add
bool(false)
int(2)
string(27) "sixteen thousand ninety one"
Set->Update
int(1)
string(37) "twenty nine thousand nine hundred six"

   
```
