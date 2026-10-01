---
id: "en-php-function-function-radius-get-attr"
language: "php"
lang: "en"
category: "function"
name: "radius_get_attr"
title: "Extracts an attribute"
signature: "mixed radius_get_attr(resource $radius_handle)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-get-attr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extracts an attribute

## Description

```php
mixed radius_get_attr(resource $radius_handle)
```

Like Radius requests, each response may contain zero or more attributes. After a response has been received successfully by `radius_send_request()`, its attributes can be extracted one by one using `radius_get_attr()`. Each time `radius_get_attr()` is called, it gets the next attribute from the current response.

## Parameters

- **`$radius_handle`** — The RADIUS resource.

## Return Values

Returns an associative array containing the attribute-type and the data, or error number <= 0.

## Examples

**`radius_get_attr()` example**

```php


<?php
while ($resa = radius_get_attr($res)) {

    if (!is_array($resa)) {
        printf("Error getting attribute: %s\n",  radius_strerror($res));
        exit;
    }

    $attr = $resa['attr'];
    $data = $resa['data'];
    printf("Got Attr:%d %d Bytes %s\n", $attr, strlen($data), bin2hex($data));
}
?>

   
```

## See Also

 `radius_put_attr()` `radius_get_vendor_attr()` `radius_put_vendor_attr()` `radius_send_request()`
