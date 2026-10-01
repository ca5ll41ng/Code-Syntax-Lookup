---
id: "en-php-function-function-imap-expunge"
language: "php"
lang: "en"
category: "function"
name: "imap_expunge"
title: "Delete all messages marked for deletion"
signature: "true imap_expunge(IMAP\\Connection $imap)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-expunge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete all messages marked for deletion

## Description

```php
true imap_expunge(IMAP\Connection $imap)
```

Deletes all the messages marked for deletion by `imap_delete()`, `imap_mail_move()`, or `imap_setflag_full()`.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
