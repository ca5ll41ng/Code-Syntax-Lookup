---
id: "en-php-function-collator-getsortkey"
language: "php"
lang: "en"
category: "function"
name: "Collator::getSortKey"
aliases: ["collator_get_sort_key"]
title: "Get sorting key for a string"
signature: "public string|false Collator::getSortKey(string $string)"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.getsortkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get sorting key for a string

## Description

Object-oriented style

```php
public string|false Collator::getSortKey(string $string)
```

Procedural style

```php
string|false collator_get_sort_key(Collator $object, string $string)
```

Return collation key for a string. Collation keys can be compared directly instead of strings, though are implementation specific and may change between ICU library versions. Sort keys are generally only useful in databases or other circumstances where function calls are extremely expensive.

## Parameters

- **`$object`** — `Collator` object.
- **`$string`** — The string to produce the key from.

## Return Values

Returns the collation key for the string, or `false` on failure.

> This function may return Boolean `false`, but may also return a non-Boolean value which evaluates to `false`. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

## Examples

**`collator_get_sort_key()` example**

```php


<?php

$s1 = 'Hello';

$coll = collator_create('en_US');
$res  = collator_get_sort_key($coll, $s1);

echo bin2hex($res);
?>

    
```

The above example will output something similar to:

```text

     3832404046010901dc08
    
```

**`Collator::getSortKey()` example with `usort()`**

```php


<?php

$data = [
    [ 'name' => '🇳🇱 Derick Rethans', 'linked_account' => 'https://phpc.social/users/derickr' ],
    [ 'name' => 'Elephpant', 'linked_account' => 'https://phpc.social/phpc' ],
    [ 'name' => '🇫🇷 Marcus Bointon', 'linked_account' => 'https://phpc.social/users/Synchro' ],
];

/* Create the collator */
$col = new Collator('en');

/* Sort upper-case letters before lower-case letters */
$col->setAttribute(Collator::CASE_FIRST, Collator::UPPER_FIRST);

/* Use a user-defined function with sort, that strips out the emojis */
usort(
    $data,
    function($a, $b) use ($col) {
        /* Remove the character class 'S' (the Symbols), and remove whitespace
         * (with trim) */
        $aName = trim(preg_replace('/\p{S}+/u', '', $a['name']));
        $bName = trim(preg_replace('/\p{S}+/u', '', $b['name']));

								/* Create the sort key */
        $aKey = $col->getSortKey($aName);
        $bKey = $col->getSortKey($bName);

								/* Use the sort key to signal which element sorts first */
        return $aKey <=> $bKey;
    }
);

var_dump($data);
?>

    
```

The above example will output something similar to:

```text

array(3) {
  [0] =>
  array(2) {
    'name' =>
    string(25) "🇳🇱 Derick Rethans"
    'linked_account' =>
    string(33) "https://phpc.social/users/derickr"
  }
  [1] =>
  array(2) {
    'name' =>
    string(9) "Elephpant"
    'linked_account' =>
    string(24) "https://phpc.social/phpc"
  }
  [2] =>
  array(2) {
    'name' =>
    string(25) "🇫🇷 Marcus Bointon"
    'linked_account' =>
    string(33) "https://phpc.social/users/Synchro"
  }
}
    
```

## See Also

`collator_sort()` `collator_sort_with_sort_keys()`
