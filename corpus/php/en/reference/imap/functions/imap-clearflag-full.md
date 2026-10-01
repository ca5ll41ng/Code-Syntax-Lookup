---
id: "en-php-function-function-imap-clearflag-full"
language: "php"
lang: "en"
category: "function"
name: "imap_clearflag_full"
title: "Clears flags on messages"
signature: "true imap_clearflag_full(IMAP\\Connection $imap, string $sequence, string $flag, int $options = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-clearflag-full.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clears flags on messages

## Description

```php
true imap_clearflag_full(IMAP\Connection $imap, string $sequence, string $flag, int $options = 0)
```

This function causes a store to delete the specified `$flag` to the flags set for the messages in the specified `$sequence`.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$sequence`** — A sequence of message numbers. You can enumerate desired messages with the `X,Y` syntax, or retrieve all messages within an interval with the `X:Y` syntax
- **`$flag`** — The flags which you can unset are "\\Seen", "\\Answered", "\\Flagged", "\\Deleted", and "\\Draft" (as defined by [RFC2060](2060))
- **`$options`** — `$options` are a bit mask and may contain the single option: - `ST_UID` - The sequence argument contains UIDs instead of sequence numbers

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws a `ValueError` if `$options` is invalid.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
| 8.0.0 | A `ValueError` is now thrown on invalid `$options` parameter values. Previously, a warning was emitted and the function returned `false`. |

## See Also

`imap_setflag_full()`
