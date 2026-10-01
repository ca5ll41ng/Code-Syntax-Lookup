---
id: "en-php-function-function-imap-timeout"
language: "php"
lang: "en"
category: "function"
name: "imap_timeout"
title: "Set or fetch imap timeout"
signature: "int|bool imap_timeout(int $timeout_type, int $timeout = -1)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-timeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set or fetch imap timeout

## Description

```php
int|bool imap_timeout(int $timeout_type, int $timeout = -1)
```

Sets or fetches the imap timeout.

## Parameters

- **`$timeout_type`** — One of the following: `IMAP_OPENTIMEOUT`, `IMAP_READTIMEOUT`, `IMAP_WRITETIMEOUT`, or `IMAP_CLOSETIMEOUT`.
- **`$timeout`** — The timeout, in seconds.

## Return Values

If the `$timeout` parameter is set, this function returns `true` on success and `false` on failure.

If `$timeout` is not provided or evaluates to -1, the current timeout value of `$timeout_type` is returned as an integer.

## Examples

**`imap_timeout()` example**

```php


<?php

echo "The current read timeout is " . imap_timeout(IMAP_READTIMEOUT) . "\n";

?>

    
```
