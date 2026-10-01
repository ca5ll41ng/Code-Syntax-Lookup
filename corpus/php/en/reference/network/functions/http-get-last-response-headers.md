---
id: "en-php-function-function-http-get-last-response-headers"
language: "php"
lang: "en"
category: "function"
name: "http_get_last_response_headers"
title: "Retrieve last HTTP response headers"
signature: "array|null http_get_last_response_headers()"
module: "network"
source_url: "https://www.php.net/manual/en/function.http-get-last-response-headers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve last HTTP response headers

## Description

```php
array|null http_get_last_response_headers()
```

Returns an `array` containing the last HTTP response headers received via the HTTP wrapper. If there are none, `null` is returned instead.

## Parameters

This function has no parameters.

## Return Values

Returns an indexed `array` of HTTP headers which were received while using the HTTP wrapper. If there are none, `null` is returned instead.

## Examples

**`http_get_last_response_headers()` example**

Description.

```php


<?php
file_get_contents("http://example.com");
var_dump(http_get_last_response_headers());
?>

   
```

The above example will output something similar to:

```text


array(14) {
  [0]=>
  string(15) "HTTP/1.1 200 OK"
  [1]=>
  string(20) "Accept-Ranges: bytes"
  [2]=>
  string(11) "Age: 326940"
  [3]=>
  string(29) "Cache-Control: max-age=604800"
  [4]=>
  string(38) "Content-Type: text/html; charset=UTF-8"
  [5]=>
  string(35) "Date: Mon, 11 Nov 2024 13:34:09 GMT"
  [6]=>
  string(23) "Etag: "3147526947+gzip""
  [7]=>
  string(38) "Expires: Mon, 18 Nov 2024 13:34:09 GMT"
  [8]=>
  string(44) "Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT"
  [9]=>
  string(24) "Server: ECAcc (nyd/D16C)"
  [10]=>
  string(21) "Vary: Accept-Encoding"
  [11]=>
  string(12) "X-Cache: HIT"
  [12]=>
  string(20) "Content-Length: 1256"
  [13]=>
  string(17) "Connection: close"
}

   
```

## See Also

 `http_clear_last_response_headers()`
