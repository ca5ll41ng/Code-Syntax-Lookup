---
id: "en-php-function-streamwrapper-dir-closedir"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::dir_closedir"
title: "Close directory handle"
signature: "public bool streamWrapper::dir_closedir()"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.dir-closedir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close directory handle

## Description

```php
public bool streamWrapper::dir_closedir()
```

This method is called in response to `closedir()`.

Any resources which were locked, or allocated, during opening and use of the directory stream should be released.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::dir_closedir</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## See Also

`closedir()` `streamWrapper::dir_opendir()`
