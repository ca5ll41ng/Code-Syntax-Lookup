---
id: "en-php-function-streamwrapper-stream-close"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_close"
title: "Close a resource"
signature: "public void streamWrapper::stream_close()"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close a resource

## Description

```php
public void streamWrapper::stream_close()
```

This method is called in response to `fclose()`.

All resources that were locked, or allocated, by the wrapper should be released.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_close</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## See Also

`fclose()` `streamWrapper::dir_closedir()`
