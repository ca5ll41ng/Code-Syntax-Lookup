---
id: "en-php-function-locale-parselocale"
language: "php"
lang: "en"
category: "function"
name: "Locale::parseLocale"
aliases: ["locale_parse"]
title: "Returns a key-value array of locale ID subtag elements"
signature: "public static array|null Locale::parseLocale(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.parselocale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a key-value array of locale ID subtag elements

## Description

Object-oriented style

```php
public static array|null Locale::parseLocale(string $locale)
```

Procedural style

```php
array|null locale_parse(string $locale)
```

Returns a key-value array of locale ID subtag elements.

## Parameters

- **`$locale`** — The locale to extract the subtag array from. Note: The 'variant' and 'private' subtags can take maximum 15 values whereas 'extlang' can take maximum 3 values. If an empty string is passed, the value returned by `locale_get_default()` is used instead.

## Return Values

Returns an array containing a list of key-value pairs, where the keys identify the particular locale ID subtags, and the values are the associated subtag values. The array will be ordered as the locale id subtags e.g. in the locale id if variants are `-varX-varY-varZ` then the returned array will have `variant0=>varX`, `variant1=>varY`, `variant2=>varZ`.

Returns `null` when the length of `$locale` exceeds `INTL_MAX_LOCALE_LEN`.

## Examples

**`locale_parse()` example**

```php


<?php
$arr = locale_parse('sl-Latn-IT-nedis');
if ($arr) {
    foreach ($arr as $key => $value) {
        echo "$key : $value , ";
    }
}
?>

   
```

**OO example**

```php


<?php
$arr = Locale::parseLocale('sl-Latn-IT-nedis');
if ($arr) {
    foreach ($arr as $key => $value) {
        echo "$key : $value , ";
    }
}
?>

   
```

The above example will output:

```text


language : sl , script : Latn , region : IT , variant0 : NEDIS ,

  
```

**Empty string uses the default locale**

```php


<?php
locale_set_default('fr-Latn-FR');
$arr = locale_parse('');
if ($arr) {
    foreach ($arr as $key => $value) {
        echo "$key : $value , ";
    }
}
?>

   
```

The above example will output:

```text


language : fr , script : Latn , region : FR ,

  
```

## See Also

`locale_compose()` `locale_get_default()` `locale_set_default()`
