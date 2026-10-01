---
id: "en-php-function-function-eio-sync"
language: "php"
lang: "en"
category: "function"
name: "eio_sync"
title: "Commit buffer cache to disk"
signature: "resource eio_sync(int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-sync.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Commit buffer cache to disk

## Description

```php
resource eio_sync(int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

## Parameters

This function has no parameters.

## Return Values

`eio_sync()` returns request resource on success, or `false` on failure.
