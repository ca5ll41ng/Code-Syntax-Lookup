---
id: "en-php-function-streamwrapper-stream-stat"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_stat"
title: "Retrieve information about a file resource"
signature: "public array|false streamWrapper::stream_stat()"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-stat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve information about a file resource

## Description

```php
public array|false streamWrapper::stream_stat()
```

This method is called in response to `fstat()`.

## Parameters

This function has no parameters.

## Return Values

See `stat()`.

## Errors/Exceptions

 {{{ 

Emits `E_WARNING` if call to this method fails (i.e. not implemented).

 }}} 

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_stat</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## See Also

`stat()` `streamwrapper::url_stat()`
