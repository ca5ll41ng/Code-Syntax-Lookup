---
id: "en-php-function-function-imap-sort"
language: "php"
lang: "en"
category: "function"
name: "imap_sort"
title: "Gets and sort messages"
signature: "array|false imap_sort(IMAP\\Connection $imap, int $criteria, bool $reverse, int $flags = 0, string|null $search_criteria = null, string|null $charset = null)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets and sort messages

## Description

```php
array|false imap_sort(IMAP\Connection $imap, int $criteria, bool $reverse, int $flags = 0, string|null $search_criteria = null, string|null $charset = null)
```

Gets and sorts message numbers by the given parameters.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$criteria`** — Criteria can be one (and only one) of the following: - `SORTDATE` - message Date - `SORTARRIVAL` - arrival date - `SORTFROM` - mailbox in first From address - `SORTSUBJECT` - message subject - `SORTTO` - mailbox in first To address - `SORTCC` - mailbox in first cc address - `SORTSIZE` - size of message in octets
- **`$reverse`** — Whether to sort in reverse order.
- **`$flags`** — The `$flags` are a bitmask of one or more of the following: - `SE_UID` - Return UIDs instead of sequence numbers - `SE_NOPREFETCH` - Don't prefetch searched messages
- **`$search_criteria`** — IMAP2-format search criteria string. For details see `imap_search()`.
- **`$charset`** — MIME character set to use when sorting strings.

## Return Values

Returns an array of message numbers sorted by the given parameters, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
| 8.0.0 | `$reverse` is now `bool` instead of `int`. |
| 8.0.0 | `$search_criteria` and `$charset` are now `nullable`. |
