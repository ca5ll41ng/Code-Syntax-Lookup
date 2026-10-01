---
id: "en-php-function-function-eio-set-max-poll-time"
language: "php"
lang: "en"
category: "function"
name: "eio_set_max_poll_time"
title: "Set maximum poll time"
signature: "void eio_set_max_poll_time(float $nseconds)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-set-max-poll-time.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set maximum poll time

## Description

```php
void eio_set_max_poll_time(float $nseconds)
```

Polling stops, if poll took longer than `$nseconds` seconds.

## Parameters

- **`$nseconds`** — Number of seconds

## Return Values

No value is returned.
