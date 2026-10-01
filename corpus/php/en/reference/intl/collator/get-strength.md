---
id: "en-php-function-collator-getstrength"
language: "php"
lang: "en"
category: "function"
name: "Collator::getStrength"
aliases: ["collator_get_strength"]
title: "Get current collation strength"
signature: "public int Collator::getStrength()"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.getstrength.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get current collation strength

## Description

Object-oriented style

```php
public int Collator::getStrength()
```

Procedural style

```php
int collator_get_strength(Collator $object)
```

## Parameters

- **`$object`** — `Collator` object.

## Return Values

Returns current collation strength, or `false` on failure.

## Examples

**`collator_get_strength()` example**

```php


<?php
$coll     = collator_create( 'en_US' );
$strength = collator_get_strength( $coll );
?>

    
```

 <simpara xmlns="http://docbook.org/ns/docbook">The above example will output:</simpara> <screen> <![CDATA[ // TODO ]]> </screen> 

## See Also

Collator constants `collator_set_strength()` `collator_get_attribute()`
