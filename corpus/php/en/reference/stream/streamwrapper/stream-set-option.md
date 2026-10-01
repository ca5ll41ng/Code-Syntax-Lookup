---
id: "en-php-function-streamwrapper-stream-set-option"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_set_option"
title: "Change stream options"
signature: "public bool streamWrapper::stream_set_option(int $option, int $arg1, int $arg2)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-set-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change stream options

## Description

```php
public bool streamWrapper::stream_set_option(int $option, int $arg1, int $arg2)
```

This method is called to set options on the stream.

## Parameters

- **`$option`** — One of: `STREAM_OPTION_BLOCKING` (The method was called in response to `stream_set_blocking()`) `STREAM_OPTION_READ_TIMEOUT` (The method was called in response to `stream_set_timeout()`) `STREAM_OPTION_READ_BUFFER` (The method was called in response to `stream_set_read_buffer()`) `STREAM_OPTION_WRITE_BUFFER` (The method was called in response to `stream_set_write_buffer()`)
- **`$arg1`** — If `$option` is `STREAM_OPTION_BLOCKING`: requested blocking mode (1 meaning block 0 not blocking). `STREAM_OPTION_READ_TIMEOUT`: the timeout in seconds. `STREAM_OPTION_READ_BUFFER`: buffer mode (`STREAM_BUFFER_NONE` or `STREAM_BUFFER_FULL`). `STREAM_OPTION_WRITE_BUFFER`: buffer mode (`STREAM_BUFFER_NONE` or `STREAM_BUFFER_FULL`).
- **`$arg2`** — If `$option` is `STREAM_OPTION_BLOCKING`: This option is not set. `STREAM_OPTION_READ_TIMEOUT`: the timeout in microseconds. `STREAM_OPTION_READ_BUFFER`: the requested buffer size. `STREAM_OPTION_WRITE_BUFFER`: the requested buffer size.

## Return Values

Returns `true` on success or `false` on failure. If `$option` is not implemented, `false` should be returned.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_set_option</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## See Also

`stream_set_blocking()` `stream_set_timeout()` `stream_set_write_buffer()`
