---
id: "en-php-guide-class-streambucket"
language: "php"
lang: "en"
category: "guide"
name: "class.streambucket"
title: "The StreamBucket class"
module: "stream"
source_url: "https://www.php.net/manual/en/class.streambucket.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The StreamBucket class

StreamBucket

  Introduction  A stream bucket is a chunk of a stream which can be extracted from bucket brigades.     Class Synopsis   `final` `StreamBucket`    `public` `readonly` `resource` `bucket`   `public` `readonly` `string` `data`   `public` `readonly` `int` `datalen`   `public` `readonly` `int` `dataLength`     Properties 
- **resource `bucket`** — A `userfilter.bucket` resource.
- **string `data`** — The current string in the bucket.
- **int `datalen`** — The length of the string in the bucket. Deprecated as of PHP 8.4 in favor of `StreamBucket::$dataLength`.
- **int `dataLength`** — The length of the string in the bucket.

   See Also  `stream_bucket_new()` `stream_bucket_append()` `stream_bucket_prepend()` `stream_bucket_make_writeable()`
