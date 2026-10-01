---
id: "en-php-function-function-ps-setmiterlimit"
language: "php"
lang: "en"
category: "function"
name: "ps_setmiterlimit"
title: "Sets the miter limit"
signature: "bool ps_setmiterlimit(resource $psdoc, float $value)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setmiterlimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the miter limit

## Description

```php
bool ps_setmiterlimit(resource $psdoc, float $value)
```

If two lines join in a small angle and the line join is set to `PS_LINEJOIN_MITER`, then the resulting spike will be very long. The miter limit is the maximum ratio of the miter length (the length of the spike) and the line width.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$value`** — The maximum ratio between the miter length and the line width. Larger values (> 10) will result in very long spikes when two lines meet in a small angle. Keep the default unless you know what you are doing.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_setlinecap()` `ps_setlinejoin()` `ps_setlinewidth()`
