---
id: "en-php-function-streamwrapper-rename"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::rename"
title: "Renames a file or directory"
signature: "public bool streamWrapper::rename(string $path_from, string $path_to)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.rename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Renames a file or directory

## Description

```php
public bool streamWrapper::rename(string $path_from, string $path_to)
```

This method is called in response to `rename()`.

Should attempt to rename `$path_from` to `$path_to`

> In order for the appropriate error message to be returned this method should *not* be defined if the wrapper does not support renaming files.

## Parameters

- **`$path_from`** — The URL to the current file.
- **`$path_to`** — The URL which the `$path_from` should be renamed to.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

 {{{ 

Emits `E_WARNING` if call to this method fails (i.e. not implemented).

 }}} 

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::rename</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## Notes

 {{{ 

> The `streamWrapper::$context` property is updated if a valid context is passed to the caller function.

 }}} 

## See Also

`rename()`
