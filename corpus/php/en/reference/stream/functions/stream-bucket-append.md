---
id: "en-php-function-function-stream-bucket-append"
language: "php"
lang: "en"
category: "function"
name: "stream_bucket_append"
title: "Append bucket to brigade"
signature: "void stream_bucket_append(resource $brigade, StreamBucket $bucket)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-bucket-append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Append bucket to brigade

## Description

```php
void stream_bucket_append(resource $brigade, StreamBucket $bucket)
```

> This function is currently not documented; only its argument list is available.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$bucket` expects a `StreamBucket` instance now; previously, an `stdClass` was expected. |
