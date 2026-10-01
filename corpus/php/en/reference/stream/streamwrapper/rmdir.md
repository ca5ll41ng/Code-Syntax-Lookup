---
id: "en-php-function-streamwrapper-rmdir"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::rmdir"
title: "Removes a directory"
signature: "public bool streamWrapper::rmdir(string $path, int $options)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.rmdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a directory

## Description

```php
public bool streamWrapper::rmdir(string $path, int $options)
```

This method is called in response to `rmdir()`.

> In order for the appropriate error message to be returned this method should *not* be defined if the wrapper does not support removing directories.

## Parameters

- **`$path`** — The directory URL which should be removed.
- **`$options`** — A bitwise mask of values, such as `STREAM_MKDIR_RECURSIVE`.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

 {{{ 

Emits `E_WARNING` if call to this method fails (i.e. not implemented).

 }}} 

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::rmdir</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## Notes

 {{{ 

> The `streamWrapper::$context` property is updated if a valid context is passed to the caller function.

 }}} 

## See Also

`rmdir()` `streamwrapper::mkdir()` `streamwrapper::unlink()`
