---
id: "en-php-function-function-stream-isatty"
language: "php"
lang: "en"
category: "function"
name: "stream_isatty"
title: "Check if a stream is a TTY"
signature: "bool stream_isatty(resource $stream)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-isatty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if a stream is a TTY

## Description

```php
bool stream_isatty(resource $stream)
```

Determines if stream `$stream` refers to a valid terminal type device. This is a more portable version of `posix_isatty()`, since it works on Windows systems too.

## Parameters

- **`$stream`**

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`stream_isatty()` example**

This command can be used to determine if a standard output / standard error stream is redirected to a file.

```sh

     php -r "var_export(stream_isatty(STDERR));"
    
```

The above example will output something similar to:

```text

     true
    
```

```sh

     php -r "var_export(stream_isatty(STDERR));" 2>output.txt
    
```

The above example will output something similar to:

```text

     false
    
```
