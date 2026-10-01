---
id: "en-php-function-streamwrapper-stream-seek"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_seek"
title: "Seeks to specific location in a stream"
signature: "public bool streamWrapper::stream_seek(int $offset, int $whence)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Seeks to specific location in a stream

## Description

```php
public bool streamWrapper::stream_seek(int $offset, int $whence)
```

This method is called in response to `fseek()`.

The read/write position of the stream should be updated according to the `$offset` and `$whence`.

## Parameters

- **`$offset`** — The stream offset to seek to.
- **`$whence`** — Possible values: `SEEK_SET` - Set position equal to `$offset` bytes. `SEEK_CUR` - Set position to current location plus `$offset`. `SEEK_END` - Set position to end-of-file plus `$offset`.
  > The current implementation never sets `$whence` to `SEEK_CUR`; instead such seeks are internally converted to `SEEK_SET` seeks.



## Return Values

Return `true` if the position was updated, `false` otherwise.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_seek</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## Notes

 {{{ 

> If not implemented, `false` is assumed as the return value.

> Upon success, `streamWrapper::stream_tell()` is called directly after calling `streamWrapper::stream_seek()`. If `streamWrapper::stream_tell()` fails, the return value to the caller function will be set to `false`.

> Not all seeks operations on the stream will result in this function being called. PHP streams have read buffering enabled by default (see also `stream_set_read_buffer()`) and seeking may be done by merely moving the buffer pointer.

 }}} 

## See Also

`fseek()`
