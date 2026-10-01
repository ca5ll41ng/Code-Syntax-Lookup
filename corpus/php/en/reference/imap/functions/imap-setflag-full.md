---
id: "en-php-function-function-imap-setflag-full"
language: "php"
lang: "en"
category: "function"
name: "imap_setflag_full"
title: "Sets flags on messages"
signature: "true imap_setflag_full(IMAP\\Connection $imap, string $sequence, string $flag, int $options = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-setflag-full.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets flags on messages

## Description

```php
true imap_setflag_full(IMAP\Connection $imap, string $sequence, string $flag, int $options = 0)
```

Causes a store to add the specified `$flag` to the flags set for the messages in the specified `$sequence`.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$sequence`** — A sequence of message numbers. You can enumerate desired messages with the `X,Y` syntax, or retrieve all messages within an interval with the `X:Y` syntax
- **`$flag`** — The flags which you can set are `\Seen`, `\Answered`, `\Flagged`, `\Deleted`, and `\Draft` as defined by [RFC2060](2060).
- **`$options`** — A bit mask that may contain the single option: - `ST_UID` - The sequence argument contains UIDs instead of sequence numbers

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws a `ValueError` if `$options` is invalid.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
| 8.0.0 | A `ValueError` is now thrown on invalid `$options` parameter values. Previously, a warning was emitted and the function returned `false`. |

## Examples

**`imap_setflag_full()` example**

```php


<?php
$mbox = imap_open("{imap.example.org:143}", "username", "password")
     or die("can't connect: " . imap_last_error());

$status = imap_setflag_full($mbox, "2,5", "\\Seen \\Flagged");

echo gettype($status) . "\n";
echo $status . "\n";

imap_close($mbox);
?>

    
```

## See Also

`imap_clearflag_full()`
