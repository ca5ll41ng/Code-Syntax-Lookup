---
id: "en-php-function-collator-geterrormessage"
language: "php"
lang: "en"
category: "function"
name: "Collator::getErrorMessage"
aliases: ["collator_get_error_message"]
title: "Get text for collator's last error code"
signature: "public string|false Collator::getErrorMessage()"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.geterrormessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get text for collator's last error code

## Description

Object-oriented style

```php
public string|false Collator::getErrorMessage()
```

Procedural style

```php
string|false collator_get_error_message(Collator $object)
```

Retrieves the message for the last error.

## Parameters

- **`$object`** — `Collator` object.

## Return Values

Description of an error occurred in the last Collator API function call, or `false` on failure.

## Examples

**`collator_get_error_message()` example**

```php


<?php
$coll = collator_create( 'lt' );
if( collator_compare( $coll, 'y', 'k' ) === false ) {
    echo collator_get_error_message( $coll );
}
?>

    
```

## See Also

`collator_get_error_code()`
