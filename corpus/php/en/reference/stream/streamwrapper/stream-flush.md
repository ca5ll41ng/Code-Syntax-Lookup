---
id: "en-php-function-streamwrapper-stream-flush"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_flush"
title: "Flushes the output"
signature: "public bool streamWrapper::stream_flush()"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Flushes the output

## Description

```php
public bool streamWrapper::stream_flush()
```

This method is called in response to `fflush()` and when the stream is being closed while any unflushed data has been written to it before.

If you have cached data in your stream but not yet stored it into the underlying storage, you should do so now.

## Parameters

This function has no parameters.

## Return Values

Should return `true` if the cached data was successfully stored (or if there was no data to store), or `false` if the data could not be stored.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_flush</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## Notes

 {{{ 

> If not implemented, `false` is assumed as the return value.

 }}} 

## See Also

`fflush()`
