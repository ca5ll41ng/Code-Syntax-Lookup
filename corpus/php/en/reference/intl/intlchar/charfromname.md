---
id: "en-php-function-intlchar-charfromname"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::charFromName"
title: "Find Unicode character by name and return its code point value"
signature: "public static int|null IntlChar::charFromName(string $name, int $type = IntlChar::UNICODE_CHAR_NAME)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.charfromname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Find Unicode character by name and return its code point value

## Description

```php
public static int|null IntlChar::charFromName(string $name, int $type = IntlChar::UNICODE_CHAR_NAME)
```

Finds a Unicode character by its name and returns its code point value.

The name is matched exactly and completely. If the name does not correspond to a code point, `null` is returned.

A Unicode 1.0 name is matched only if it differs from the modern name. Unicode names are all uppercase. Extended names are lowercase followed by a hyphen followed by an uppercase hexadecimal number, and within angle brackets.

## Parameters

- **`$name`** — Full name of the Unicode character.
- **`$type`** — Which set of names to use for the lookup. Can be any of these constants: `IntlChar::UNICODE_CHAR_NAME` (default) `IntlChar::UNICODE_10_CHAR_NAME` `IntlChar::EXTENDED_CHAR_NAME` `IntlChar::CHAR_NAME_ALIAS` `IntlChar::CHAR_NAME_CHOICE_COUNT`

## Return Values

The Unicode value of the code point with the given name (as an `int`), or `null` if there is no such code point.

## Examples

**Testing different code points**

```php

    
<?php

var_dump(IntlChar::charFromName("LATIN CAPITAL LETTER A"));
var_dump(IntlChar::charFromName("SNOWMAN"));
var_dump(IntlChar::charFromName("RECYCLING SYMBOL FOR TYPE-1 PLASTICS"));
var_dump(IntlChar::charFromName("A RANDOM STRING WHICH DOESN'T CORRESPOND TO ANY UNICODE CHARACTER"));

var_dump(IntlChar::charFromName("<control-08>", IntlChar::EXTENDED_CHAR_NAME));

?>

   
```

The above example will output:

```text

    
int(65)
int(9731)
int(9843)
NULL
int(8)

   
```

## See Also

`IntlChar::charName()` `IntlChar::enumCharNames()`
