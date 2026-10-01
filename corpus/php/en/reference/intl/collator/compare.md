---
id: "en-php-function-collator-compare"
language: "php"
lang: "en"
category: "function"
name: "Collator::compare"
aliases: ["collator_compare"]
title: "Compare two Unicode strings"
signature: "public int|false Collator::compare(string $string1, string $string2)"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.compare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compare two Unicode strings

## Description

Object-oriented style

```php
public int|false Collator::compare(string $string1, string $string2)
```

Procedural style

```php
int|false collator_compare(Collator $object, string $string1, string $string2)
```

Compare two Unicode strings according to collation rules.

## Parameters

- **`$object`** — `Collator` object.
- **`$string1`** — The first string to compare.
- **`$string2`** — The second string to compare.

## Return Values

Return comparison result:

- 1 if `$string1` is *greater* than `$string2` ;
- 0 if `$string1` is *equal* to `$string2`;
- -1 if `$string1` is *less* than `$string2` .

Returns `false` on failure.

> This function may return Boolean `false`, but may also return a non-Boolean value which evaluates to `false`. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

## Examples

**`collator_compare()` example**

```php


<?php
$s1 = 'Hello';
$s2 = 'hello';

$coll = collator_create( 'en_US' );
$res  = collator_compare( $coll, $s1, $s2 );

if ($res === false) {
    echo collator_get_error_message( $coll );
} else if( $res > 0 ) {
    echo "s1 is greater than s2\n";
} else if( $res < 0 ) {
    echo "s1 is less than s2\n";
} else {
    echo "s1 is equal to s2\n";
}
?>

    
```

The above example will output:

```text

     s1 is greater than s2
    
```

**Comparing strings without diacritics or case-sensitivity**

```php


<?php
$c = new Collator( 'en' );
$c->setStrength( Collator::PRIMARY );

if ( $c->compare( 'Séan', 'Sean' ) == 0 )
{
    echo "The same\n";
}

    
```

The above example will output:

```text

     The same
    
```

This example instructs the collator to compare with only taking the base characters into account. The documentation for `Collator->setStrength()` explains the different strengths.

## See Also

`collator_sort()`
