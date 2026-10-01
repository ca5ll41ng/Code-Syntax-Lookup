---
id: "en-php-guide-class-eventbuffer"
language: "php"
lang: "en"
category: "guide"
name: "class.eventbuffer"
title: "The EventBuffer class"
module: "event"
source_url: "https://www.php.net/manual/en/class.eventbuffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EventBuffer class

EventBuffer

   Introduction  `EventBuffer` represents Libevent's "evbuffer", an utility functionality for buffered I/O.    Event buffers are meant to be generally useful for doing the "buffer" part of buffered network I/O.      Class Synopsis    `EventBuffer`     `EventBuffer`      `const` `int` `EventBuffer::EOL_ANY` 0   `const` `int` `EventBuffer::EOL_CRLF` 1   `const` `int` `EventBuffer::EOL_CRLF_STRICT` 2   `const` `int` `EventBuffer::EOL_LF` 3   `const` `int` `EventBuffer::PTR_SET` 0   `const` `int` `EventBuffer::PTR_ADD` 1    `public` `readonly` `int` `length`   `public` `readonly` `int` `contiguous_space`         Properties 
- **`length`** — The number of bytes stored in an event buffer.
- **`contiguous_space`** — The number of bytes stored contiguously at the front of the buffer. The bytes in a buffer may be stored in multiple separate chunks of memory; the property returns the number of bytes currently stored in the first chunk.

     Predefined Constants 
- **`EventBuffer::EOL_ANY`** — The end of line is any sequence of any number of carriage return and linefeed characters. This format is not very useful; it exists mainly for backward compatibility.
- **`EventBuffer::EOL_CRLF`** — The end of the line is an optional carriage return, followed by a linefeed. (In other words, it is either a `"\r\n"` or a `"\n"` .) This format is useful in parsing text-based Internet protocols, since the standards generally prescribe a `"\r\n"` line-terminator, but nonconformant clients sometimes say just `"\n"`.
- **`EventBuffer::EOL_CRLF_STRICT`** — The end of a line is a single carriage return, followed by a single linefeed. (This is also known as `"\r\n"`. The ASCII values are `0x0D` `0x0A` ).
- **`EventBuffer::EOL_LF`** — The end of a line is a single linefeed character. (This is also known as `"\n"`. It is ASCII value is `0x0A` .)
- **`EventBuffer::PTR_SET`** — Flag used as argument of `EventBuffer::setPosition()` method. If this flag specified, the position pointer is moved to an absolute position within the buffer.
- **`EventBuffer::PTR_ADD`** — The same as `EventBuffer::PTR_SET`, except this flag causes `EventBuffer::setPosition()` method to move position forward up to the specified number of bytes(instead of setting absolute position).
