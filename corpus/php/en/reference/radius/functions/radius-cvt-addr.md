---
id: "en-php-function-function-radius-cvt-addr"
language: "php"
lang: "en"
category: "function"
name: "radius_cvt_addr"
title: "Converts raw data to IP-Address"
signature: "string radius_cvt_addr(string $data)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-cvt-addr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts raw data to IP-Address

## Description

```php
string radius_cvt_addr(string $data)
```

Converts raw data to IP-Address

## Parameters

- **`$data`** — Input data

## Return Values

Returns the IP-Address.

## Examples

**`radius_cvt_addr()` example**

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

    case RADIUS_FRAMED_IP_ADDRESS:
        $ip = radius_cvt_addr($data);
        echo "IP: $ip<br>\n";
        break;

    case RADIUS_FRAMED_IP_NETMASK:
        $mask = radius_cvt_addr($data);
        echo "MASK: $mask<br>\n";
        break;
    }
}
?>

   
```

## See Also

 `radius_cvt_int()` `radius_cvt_string()`
