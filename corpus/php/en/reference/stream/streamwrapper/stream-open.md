---
id: "en-php-function-streamwrapper-stream-open"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_open"
title: "Opens file or URL"
signature: "public bool streamWrapper::stream_open(string $path, string $mode, int $options, string|null $opened_path)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Opens file or URL

## Description

```php
public bool streamWrapper::stream_open(string $path, string $mode, int $options, string|null $opened_path)
```

This method is called immediately after the wrapper is initialized (f.e. by `fopen()` and `file_get_contents()`).

## Parameters

- **`$path`** — Specifies the URL that was passed to the original function.
  > The URL can be broken apart with `parse_url()`. Note that only URLs delimited by :// are supported. : and :/ while technically valid URLs, are not.


- **`$mode`** — The mode used to open the file, as detailed for `fopen()`.
  > Remember to check if the `$mode` is valid for the `$path` requested.


- **`$options`** — Holds additional flags set by the streams API. It can hold one or more of the following values OR'd together. | Flag | Description | | --- | --- | | `STREAM_USE_PATH` | If `$path` is relative, search for the resource using the include_path. | | `STREAM_REPORT_ERRORS` | If this flag is set, you are responsible for raising errors using `trigger_error()` during opening of the stream. If this flag is not set, you should not raise any errors. |
- **`$opened_path`** — If the `$path` is opened successfully, and `STREAM_USE_PATH` is set in `$options`, `$opened_path` should be set to the full path of the file/resource that was actually opened.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

 {{{ 

Emits `E_WARNING` if call to this method fails (i.e. not implemented).

 }}} 

 {{{ <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_open</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> }}}

## Notes

 {{{ 

> The `streamWrapper::$context` property is updated if a valid context is passed to the caller function.

 }}} 

## See Also

`fopen()` `parse_url()`
