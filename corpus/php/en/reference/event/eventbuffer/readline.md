---
id: "en-php-function-eventbuffer-readline"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::readLine"
title: "Extracts a line from the front of the buffer"
signature: "public string EventBuffer::readLine(int $eol_style)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.readline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extracts a line from the front of the buffer

## Description

```php
public string EventBuffer::readLine(int $eol_style)
```

Extracts a line from the front of the buffer and returns it in a newly allocated string. If there is not a whole line to read, the function returns `null`. The line terminator is not included in the copied string.

## Parameters

- **`$eol_style`** — One of EventBuffer:EOL_* constants.

## Return Values

On success returns the line read from the buffer, otherwise `null`.

## See Also

  `EventBuffer::copyout()`   `EventBuffer::drain()`   `EventBuffer::pullup()`   `EventBuffer::read()`   `EventBuffer::appendFrom()`
