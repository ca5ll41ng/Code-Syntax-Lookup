---
id: "en-php-function-function-ngettext"
language: "php"
lang: "en"
category: "function"
name: "ngettext"
title: "Plural version of gettext"
signature: "string ngettext(string $singular, string $plural, int $count)"
module: "gettext"
source_url: "https://www.php.net/manual/en/function.ngettext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Plural version of gettext

## Description

```php
string ngettext(string $singular, string $plural, int $count)
```

The plural version of `gettext()`. Some languages have more than one form for plural messages dependent on the count.

## Parameters

- **`$singular`** — The singular message ID.
- **`$plural`** — The plural message ID.
- **`$count`** — The number (e.g. item count) to determine the translation for the respective grammatical number.

## Return Values

Returns correct plural form of message identified by `$singular` and `$plural` for count `$count`.

## Examples

**`ngettext()` example**

```php


<?php

setlocale(LC_ALL, 'cs_CZ');
printf(ngettext("%d window", "%d windows", 1), 1); // 1 okno
printf(ngettext("%d window", "%d windows", 2), 2); // 2 okna
printf(ngettext("%d window", "%d windows", 5), 5); // 5 oken

?>

    
```
