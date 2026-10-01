---
id: "en-php-function-function-stream-bucket-make-writeable"
language: "php"
lang: "en"
category: "function"
name: "stream_bucket_make_writeable"
title: "Returns a bucket object from the brigade to operate on"
signature: "StreamBucket|null stream_bucket_make_writeable(resource $brigade)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-bucket-make-writeable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a bucket object from the brigade to operate on

## Description

```php
StreamBucket|null stream_bucket_make_writeable(resource $brigade)
```

This function is called whenever there is the need to access and operate on the content contains in a brigade. It is typically called from `php_user_filter::filter()`.

## Parameters

- **`$brigade`** — The brigade to return a bucket object from.

## Return Values

Returns a bucket object or `null`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | This function returns a `StreamBucket` instance now; previously, an `stdClass` was returned. |

## See Also

`stream_bucket_append()` `stream_bucket_prepend()`
