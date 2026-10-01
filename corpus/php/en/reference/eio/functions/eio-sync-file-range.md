---
id: "en-php-function-function-eio-sync-file-range"
language: "php"
lang: "en"
category: "function"
name: "eio_sync_file_range"
title: "Sync a file segment with disk"
signature: "resource eio_sync_file_range(mixed $fd, int $offset, int $nbytes, int $flags, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-sync-file-range.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sync a file segment with disk

## Description

```php
resource eio_sync_file_range(mixed $fd, int $offset, int $nbytes, int $flags, int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL)
```

`eio_sync_file_range()` permits fine control when synchronizing the open file referred to by the file descriptor `$fd` with disk.

## Parameters

- **`$fd`** — File descriptor
- **`$offset`** — The starting byte of the file range to be synchronized
- **`$nbytes`** — Specifies the length of the range to be synchronized, in bytes. If `$nbytes` is zero, then all bytes from `$offset` through to the end of file are synchronized.
- **`$flags`** — A bit-mask. Can include any of the following values: `EIO_SYNC_FILE_RANGE_WAIT_BEFORE`, `EIO_SYNC_FILE_RANGE_WRITE`, `EIO_SYNC_FILE_RANGE_WAIT_AFTER`. These flags have the same meaning as their *SYNC_FILE_RANGE_** counterparts(see `SYNC_FILE_RANGE(2)` man page).
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_sync_file_range()` returns request resource on success, or `false` on failure.
