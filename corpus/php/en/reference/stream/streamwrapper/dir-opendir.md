---
id: "en-php-function-streamwrapper-dir-opendir"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::dir_opendir"
title: "Open directory handle"
signature: "public bool streamWrapper::dir_opendir(string $path, int $options)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.dir-opendir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Open directory handle

## Description

```php
public bool streamWrapper::dir_opendir(string $path, int $options)
```

This method is called in response to `opendir()`.

## Parameters

- **`$path`** — Specifies the URL that was passed to `opendir()`.
  > The URL can be broken apart with `parse_url()`.


- **`$options`**

## Return Values

Returns `true` on success or `false` on failure.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::dir_opendir</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## See Also

`opendir()` `streamWrapper::dir_closedir()` `parse_url()`
