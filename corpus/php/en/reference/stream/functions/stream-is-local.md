---
id: "en-php-function-function-stream-is-local"
language: "php"
lang: "en"
category: "function"
name: "stream_is_local"
title: "Checks if a stream is a local stream"
signature: "bool stream_is_local(resource|string $stream)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-is-local.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a stream is a local stream

## Description

```php
bool stream_is_local(resource|string $stream)
```

Checks if a stream, or a URL, is a local one or not.

## Parameters

- **`$stream`** — The stream `resource` or URL to check.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`stream_is_local()` example**

Basic usage example.

```php


<?php
var_dump(stream_is_local("http://example.com"));
var_dump(stream_is_local("/etc"));
?>

    
```

The above example will output something similar to:

```text


bool(false)
bool(true)

    
```

 <refsect1 role="seealso"> <title>See Also</title> <para> <simplelist> <member><function>related function name here</function></member> </simplelist> </para> </refsect1>
