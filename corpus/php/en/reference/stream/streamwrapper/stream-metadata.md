---
id: "en-php-function-streamwrapper-stream-metadata"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_metadata"
title: "Change stream metadata"
signature: "public bool streamWrapper::stream_metadata(string $path, int $option, mixed $value)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-metadata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change stream metadata

## Description

```php
public bool streamWrapper::stream_metadata(string $path, int $option, mixed $value)
```

This method is called to set metadata on the stream. It is called when one of the following functions is called on a stream URL: `touch()` `chmod()` `chown()` `chgrp()` Please note that some of these operations may not be available on your system.

## Parameters

- **`$path`** — The file path or URL to set metadata. Note that in the case of a URL, it must be a :// delimited URL. Other URL forms are not supported.
- **`$option`** — One of: `STREAM_META_TOUCH` (The method was called in response to `touch()`) `STREAM_META_OWNER_NAME` (The method was called in response to `chown()` with string parameter) `STREAM_META_OWNER` (The method was called in response to `chown()`) `STREAM_META_GROUP_NAME` (The method was called in response to `chgrp()`) `STREAM_META_GROUP` (The method was called in response to `chgrp()`) `STREAM_META_ACCESS` (The method was called in response to `chmod()`)
- **`$value`** — If `$option` is `STREAM_META_TOUCH`: `Array` consisting of two arguments of the `touch()` function. `STREAM_META_OWNER_NAME` or `STREAM_META_GROUP_NAME`: The name of the owner user/group as `string`. `STREAM_META_OWNER` or `STREAM_META_GROUP`: The value owner user/group argument as `int`. `STREAM_META_ACCESS`: The argument of the `chmod()` as `int`.

## Return Values

Returns `true` on success or `false` on failure. If `$option` is not implemented, `false` should be returned.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_set_option</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## See Also

`touch()` `chmod()` `chown()` `chgrp()`
