---
id: "en-php-function-function-eio-grp-cancel"
language: "php"
lang: "en"
category: "function"
name: "eio_grp_cancel"
title: "Cancels a request group"
signature: "void eio_grp_cancel(resource $grp)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-grp-cancel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cancels a request group

## Description

```php
void eio_grp_cancel(resource $grp)
```

`eio_grp_cancel()` cancels a group request specified by `$grp` request group resource.

## Parameters

- **`$grp`** — The request group resource returned by `eio_grp()`.

## Return Values

No value is returned.

## See Also

 `eio_grp()` `eio_grp_add()`
