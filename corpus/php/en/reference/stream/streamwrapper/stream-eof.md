---
id: "en-php-function-streamwrapper-stream-eof"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_eof"
title: "Tests for end-of-file on a file pointer"
signature: "public bool streamWrapper::stream_eof()"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-eof.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tests for end-of-file on a file pointer

## Description

```php
public bool streamWrapper::stream_eof()
```

This method is called in response to `feof()`.

## Parameters

This function has no parameters.

## Return Values

Should return `true` if the read/write position is at the end of the stream and if no more data is available to be read, or `false` otherwise.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_eof</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## Notes

 {{{ 

> When reading the whole file (for example, with `file_get_contents()`), PHP will call `streamWrapper::stream_read()` followed by `streamWrapper::stream_eof()` in a loop but as long as `streamWrapper::stream_read()` returns a non-empty string, the return value of `streamWrapper::stream_eof()` is ignored.

 }}} 

## See Also

`feof()`
