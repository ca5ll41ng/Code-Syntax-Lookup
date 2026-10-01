---
id: "en-php-function-streamwrapper-stream-cast"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_cast"
title: "Retrieve the underlying resource"
signature: "public resource|false streamWrapper::stream_cast(int $cast_as)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-cast.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the underlying resource

## Description

```php
public resource|false streamWrapper::stream_cast(int $cast_as)
```

This method is called in response to `stream_select()`.

## Parameters

- **`$cast_as`** — Can be `STREAM_CAST_FOR_SELECT` when `stream_select()` is calling `stream_cast()` or `STREAM_CAST_AS_STREAM` when `stream_cast()` is called for other uses.

## Return Values

Should return the underlying stream resource used by the wrapper, or `false`.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_cast</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## See Also

`stream_select()`
