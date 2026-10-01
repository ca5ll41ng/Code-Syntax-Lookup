---
id: "en-php-function-streamwrapper-mkdir"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::mkdir"
title: "Create a directory"
signature: "public bool streamWrapper::mkdir(string $path, int $mode, int $options)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.mkdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a directory

## Description

```php
public bool streamWrapper::mkdir(string $path, int $mode, int $options)
```

This method is called in response to `mkdir()`.

> In order for the appropriate error message to be returned this method should *not* be defined if the wrapper does not support creating directories.

## Parameters

- **`$path`** — Directory which should be created.
- **`$mode`** — The value passed to `mkdir()`.
- **`$options`** — A bitwise mask of values, such as `STREAM_MKDIR_RECURSIVE`.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

 {{{ 

Emits `E_WARNING` if call to this method fails (i.e. not implemented).

 }}} 

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::mkdir</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## Notes

 {{{ 

> The `streamWrapper::$context` property is updated if a valid context is passed to the caller function.

 }}} 

## See Also

`mkdir()` `streamwrapper::rmdir()`
