---
id: "en-php-function-locale-getkeywords"
language: "php"
lang: "en"
category: "function"
name: "Locale::getKeywords"
aliases: ["locale_get_keywords"]
title: "Gets the keywords for the input locale"
signature: "public static array|false|null Locale::getKeywords(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.getkeywords.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the keywords for the input locale

## Description

Object-oriented style

```php
public static array|false|null Locale::getKeywords(string $locale)
```

Procedural style

```php
array|false|null locale_get_keywords(string $locale)
```

Gets the keywords for the input locale.

## Parameters

- **`$locale`** — The locale to extract the keywords from. If an empty string is passed, the value returned by `locale_get_default()` is used instead.

## Return Values

Associative `array` containing the keyword-value pairs for this locale, `null` if the locale has no keywords, or `false` on failure.

Returns `null` when the length of `$locale` exceeds `INTL_MAX_LOCALE_LEN`.

## Examples

**`locale_get_keywords()` example**

```php


<?php
$keywords_arr = locale_get_keywords('de_DE@currency=EUR;collation=PHONEBOOK');
if (is_array($keywords_arr)) {
    foreach ($keywords_arr as $key => $value) {
        echo "$key = $value\n";
    }
}
?>

   
```

**OO example**

```php


<?php
$keywords_arr = Locale::getKeywords('de_DE@currency=EUR;collation=PHONEBOOK');
if (is_array($keywords_arr)) {
    foreach ($keywords_arr as $key => $value) {
        echo "$key = $value\n";
    }
}
?>

   
```

The above example will output:

```text


collation = PHONEBOOK
currency = EUR

  
```

## See Also

`locale_get_all_variants()` `locale_get_default()` `locale_set_default()`
