---
id: "en-php-function-eventbuffer-pullup"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::pullup"
title: "Linearizes data within buffer and returns its contents as a string"
signature: "public string EventBuffer::pullup(int $size)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.pullup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Linearizes data within buffer and returns its contents as a string

## Description

```php
public string EventBuffer::pullup(int $size)
```

"Linearizes" the first `$size` bytes of the buffer, copying or moving them as needed to ensure that they are all contiguous and occupying the same chunk of memory. If size is negative, the function linearizes the entire buffer.

> Calling `EventBuffer::pullup()` with a large size can be quite slow, since it potentially needs to copy the entire buffer's contents.

## Parameters

- **`$size`** — The number of bytes required to be contiguous within the buffer.

## Return Values

If `$size` is greater than the number of bytes in the buffer, the function returns `null`. Otherwise, `EventBuffer::pullup()` returns string.

## See Also

  `EventBuffer::copyout()`   `EventBuffer::drain()`   `EventBuffer::read()`   `EventBuffer::readLine()`   `EventBuffer::appendFrom()`
