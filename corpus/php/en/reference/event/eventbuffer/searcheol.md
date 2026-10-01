---
id: "en-php-function-eventbuffer-searcheol"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::searchEol"
title: "Scans the buffer for an occurrence of an end of line"
signature: "public mixed EventBuffer::searchEol(int $start = -1, int $eol_style = EventBuffer::EOL_ANY)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.searcheol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scans the buffer for an occurrence of an end of line

## Description

```php
public mixed EventBuffer::searchEol(int $start = -1, int $eol_style = EventBuffer::EOL_ANY)
```

Scans the buffer for an occurrence of an end of line specified by `$eol_style` parameter . It returns numeric position of the string, or `false` if the string was not found.

If the `$start` argument is provided, it represents the position at which the search should begin; otherwise, the search is performed from the start of the string. If `$end` argument provided, the search is performed between start and end buffer positions.

## Parameters

- **`$start`** — Start search position.
- **`$eol_style`** — One of EventBuffer:EOL_* constants.

## Return Values

Returns numeric position of the first occurrence of end-of-line symbol in the buffer, or `false` if not found.

> This function may return Boolean `false`, but may also return a non-Boolean value which evaluates to `false`. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

## See Also

  `EventBuffer::search()`
