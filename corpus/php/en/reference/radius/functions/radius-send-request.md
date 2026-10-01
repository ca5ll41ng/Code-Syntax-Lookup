---
id: "en-php-function-function-radius-send-request"
language: "php"
lang: "en"
category: "function"
name: "radius_send_request"
title: "Sends the request and waits for a reply"
signature: "int radius_send_request(resource $radius_handle)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-send-request.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sends the request and waits for a reply

## Description

```php
int radius_send_request(resource $radius_handle)
```

After the Radius request has been constructed, it is sent by `radius_send_request()`.

The `radius_send_request()` function sends the request and waits for a valid reply, retrying the defined servers in round-robin fashion as necessary.

## Parameters

- **`$radius_handle`** — The RADIUS resource.

## Return Values

If a valid response is received, `radius_send_request()` returns the Radius code which specifies the type of the response. This will typically be `RADIUS_ACCESS_ACCEPT`, `RADIUS_ACCESS_REJECT`, or `RADIUS_ACCESS_CHALLENGE`. If no valid response is received, `radius_send_request()` returns `false`.

## See Also

 `radius_create_request()`
