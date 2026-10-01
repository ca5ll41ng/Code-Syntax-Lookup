---
id: "en-php-function-streamwrapper-stream-tell"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_tell"
title: "Retrieve the current position of a stream"
signature: "public int streamWrapper::stream_tell()"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-tell.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the current position of a stream

## Description

```php
public int streamWrapper::stream_tell()
```

This method is called in response to `fseek()` to determine the current position.

## Parameters

This function has no parameters.

## Return Values

Should return the current position of the stream.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_tell</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## See Also

`streamWrapper::stream_tell()`
