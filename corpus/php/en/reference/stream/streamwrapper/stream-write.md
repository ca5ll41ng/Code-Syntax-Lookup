---
id: "en-php-function-streamwrapper-stream-write"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_write"
title: "Write to stream"
signature: "public int streamWrapper::stream_write(string $data)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write to stream

## Description

```php
public int streamWrapper::stream_write(string $data)
```

This method is called in response to `fwrite()`.

> Remember to update the current position of the stream by number of bytes that were successfully written.

## Parameters

- **`$data`** — Should be stored into the underlying stream.
  > If there is not enough room in the underlying stream, store as much as possible.



## Return Values

Should return the number of bytes that were successfully stored, or 0 if none could be stored.

## Errors/Exceptions

 {{{ 

Emits `E_WARNING` if call to this method fails (i.e. not implemented).

> If the return value is greater the length of `$data`, `E_WARNING` will be emitted and the return value will truncated to its length.

 }}} 

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_write</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## See Also

`fwrite()`
