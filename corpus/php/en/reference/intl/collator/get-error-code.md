---
id: "en-php-function-collator-geterrorcode"
language: "php"
lang: "en"
category: "function"
name: "Collator::getErrorCode"
aliases: ["collator_get_error_code"]
title: "Get collator's last error code"
signature: "public int|false Collator::getErrorCode()"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.geterrorcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get collator's last error code

## Description

Object-oriented style

```php
public int|false Collator::getErrorCode()
```

Procedural style

```php
int|false collator_get_error_code(Collator $object)
```

## Parameters

- **`$object`** — `Collator` object.

## Return Values

Error code returned by the last Collator API function call, or `false` on failure.

## Examples

**`collator_get_error_code()` example**

```php


<?php
$coll = collator_create( 'en_US' );
if( collator_get_attribute( $coll, Collator::FRENCH_COLLATION ) === false )
        handle_error( collator_get_error_code() );
?>

    
```

## See Also

`collator_get_error_message()`
