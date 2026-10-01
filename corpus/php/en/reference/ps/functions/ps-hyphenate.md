---
id: "en-php-function-function-ps-hyphenate"
language: "php"
lang: "en"
category: "function"
name: "ps_hyphenate"
title: "Hyphenates a word"
signature: "array|false ps_hyphenate(resource $psdoc, string $text)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-hyphenate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Hyphenates a word

## Description

```php
array|false ps_hyphenate(resource $psdoc, string $text)
```

Hyphenates the passed word. `ps_hyphenate()` evaluates the value hyphenminchars (set by `ps_set_value()`) and the parameter hyphendict (set by `ps_set_parameter()`). hyphendict must be set before calling this function.

This function requires the locale category `LC_CTYPE` to be set properly. This is done when the extension is initialized by using the environment variables. On Unix systems read the man page of locale for more information.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$text`** — `$text` should not contain any non alpha characters. Possible positions for breaks are returned in an array of integer numbers. Each number is the position of the char in `$text` after which a hyphenation can take place.

## Return Values

An array of integers indicating the position of possible breaks in the text or `false` on failure.

## Examples

**Hyphennate a text**

```php


<?php
$word = "Koordinatensystem";
$psdoc = ps_new();
ps_set_parameter($psdoc, "hyphendict", "hyph_de.dic");
$hyphens = ps_hyphenate($psdoc, $word);
for($i=0; $i<strlen($word); $i++) {
  echo $word[$i];
  if(in_array($i, $hyphens))
    echo "-";
}
ps_delete($psdoc);
?>

    
```

The above example will output:

```text


Ko-ordi-na-ten-sys-tem

    
```

## See Also

`ps_show_boxed()` locale(1)
