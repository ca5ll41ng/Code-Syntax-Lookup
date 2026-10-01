---
id: "en-php-function-function-radius-cvt-int"
language: "php"
lang: "en"
category: "function"
name: "radius_cvt_int"
title: "Converts raw data to integer"
signature: "int radius_cvt_int(string $data)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-cvt-int.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts raw data to integer

## Description

```php
int radius_cvt_int(string $data)
```

Converts raw data to integer

## Parameters

- **`$data`** — Input data

## Return Values

Returns the integer, retrieved from data.

## Examples

**`radius_cvt_int()` example**

```php


<?php
while ($resa = radius_get_attr($res)) {

    if (!is_array($resa)) {
        printf ("Error getting attribute: %s\n",  radius_strerror($res));
        exit;
    }

    $attr = $resa['attr'];
    $data = $resa['data'];

    switch ($attr) {

    case RADIUS_FRAMED_MTU:
        $mtu = radius_cvt_int($data);
        echo "MTU: $mtu<br>\n";
        break;
    }
}
?>

   
```

## See Also

 `radius_cvt_addr()` `radius_cvt_string()`
