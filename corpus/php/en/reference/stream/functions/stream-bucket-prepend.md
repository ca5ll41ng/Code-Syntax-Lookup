---
id: "en-php-function-function-stream-bucket-prepend"
language: "php"
lang: "en"
category: "function"
name: "stream_bucket_prepend"
title: "Prepend bucket to brigade"
signature: "void stream_bucket_prepend(resource $brigade, StreamBucket $bucket)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-bucket-prepend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepend bucket to brigade

## Description

```php
void stream_bucket_prepend(resource $brigade, StreamBucket $bucket)
```

This function can be called to prepend a bucket to a bucket brigade. It is typically called from `php_user_filter::filter()`.

## Parameters

- **`$brigade`** — `$brigade` is a resource pointing to a `bucket brigade` which contains one or more `bucket` objects.
- **`$bucket`** — A bucket object.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$bucket` expects a `StreamBucket` instance now; previously, an `stdClass` was expected. |

## Examples

**`stream_bucket_prepend()` examples**

```php


<?php

class foo extends php_user_filter {
  protected $calls = 0;
  public function filter($in, $out, &$consumed, $closing) {
    while ($bucket = stream_bucket_make_writeable($in)) {
      $consumed += $bucket->datalen;
      if ($this->calls++ == 2) {
        // This bucket will appear again before any other bucket.
        stream_bucket_prepend($in, $bucket);
      }
    }
    return PSFS_FEED_ME;
  }
}
stream_filter_register('test', 'foo');
print  file_get_contents('php://filter/read=test/resource=foo');
?>

    
```
