---
id: "en-php-function-streamwrapper-unlink"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::unlink"
title: "Delete a file"
signature: "public bool streamWrapper::unlink(string $path)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.unlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete a file

## Description

```php
public bool streamWrapper::unlink(string $path)
```

This method is called in response to `unlink()`.

> In order for the appropriate error message to be returned this method should *not* be defined if the wrapper does not support removing files.

## Parameters

- **`$path`** — The file URL which should be deleted.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

 {{{ 

Emits `E_WARNING` if call to this method fails (i.e. not implemented).

 }}} 

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::unlink</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## Notes

 {{{ 

> The `streamWrapper::$context` property is updated if a valid context is passed to the caller function.

 }}} 

## See Also

`unlink()` `streamWrapper::rmdir()`
