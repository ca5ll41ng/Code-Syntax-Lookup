---
id: "en-php-function-streamwrapper-stream-read"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_read"
title: "Read from stream"
signature: "public string|false streamWrapper::stream_read(int $count)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read from stream

## Description

```php
public string|false streamWrapper::stream_read(int $count)
```

This method is called in response to `fread()` and `fgets()`.

> Remember to update the read/write position of the stream (by the number of bytes that were successfully read).

## Parameters

- **`$count`** — How many bytes of data from the current position should be returned.

## Return Values

If there are less than `$count` bytes available, as many as are available should be returned. If no more data is available, an empty string should be returned. To signal that reading failed, `false` should be returned.

## Errors/Exceptions

 {{{ 

Emits `E_WARNING` if call to this method fails (i.e. not implemented).

> If the return value is longer then `$count` an `E_WARNING` error will be emitted, and excess data will be lost.

 }}} 

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_read</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## Notes

 {{{ 

> `streamWrapper::stream_eof()` is called directly after calling `streamWrapper::stream_read()` to check if EOF has been reached. If not implemented, EOF is assumed.

> When reading the whole file (for example, with `file_get_contents()`), PHP will call `streamWrapper::stream_read()` followed by `streamWrapper::stream_eof()` in a loop but as long as `streamWrapper::stream_read()` returns a non-empty string, the return value of `streamWrapper::stream_eof()` is ignored.

 }}} 

## See Also

`fread()` `fgets()`
