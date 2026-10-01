---
id: "en-php-function-collator-create"
language: "php"
lang: "en"
category: "function"
name: "Collator::create"
aliases: ["collator_create"]
title: "Create a collator"
signature: "public static Collator|null Collator::create(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a collator

## Description

Object-oriented style

```php
public static Collator|null Collator::create(string $locale)
```

Procedural style

```php
Collator|null collator_create(string $locale)
```

The strings will be compared using the options already specified.

## Parameters

- **`$locale`** — The locale containing the required collation rules. Special values for locales can be passed in - if an empty `string` is passed for the locale, the default locale collation rules will be used. If `"root"` is passed, [UCA]() rules will be used.

## Return Values

Return new instance of `Collator` object, or `null` on error.

## Examples

**`collator_create()` example**

```php


<?php
$coll = collator_create( 'en_US' );

if( !isset( $coll ) ) {
    printf( "Collator creation failed: %s\n", intl_get_error_message() );
    exit( 1 );
}
?>

    
```

## See Also

`Collator::__construct()`
