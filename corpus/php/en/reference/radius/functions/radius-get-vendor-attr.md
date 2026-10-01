---
id: "en-php-function-function-radius-get-vendor-attr"
language: "php"
lang: "en"
category: "function"
name: "radius_get_vendor_attr"
title: "Extracts a vendor specific attribute"
signature: "array|false radius_get_vendor_attr(string $data)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-get-vendor-attr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extracts a vendor specific attribute

## Description

```php
array|false radius_get_vendor_attr(string $data)
```

If `radius_get_attr()` returns `RADIUS_VENDOR_SPECIFIC`, `radius_get_vendor_attr()` may be called to determine the vendor.

## Parameters

- **`$data`** — Input data

## Return Values

Returns an associative array containing the attribute-type, vendor and the data, or `false` on error.

## Examples

**`radius_get_vendor_attr()` example**

```php


<?php
while ($resa = radius_get_attr($res)) {

    if (!is_array($resa)) {
        printf ("Error getting attribute: %s\n",  radius_strerror($res));
        exit;
    }

    $attr = $resa['attr'];
    $data = $resa['data'];
    printf("Got Attr:%d %d Bytes %s\n", $attr, strlen($data), bin2hex($data));
    if ($attr == RADIUS_VENDOR_SPECIFIC) {

        $resv = radius_get_vendor_attr($data);
        if (is_array($resv)) {
            $vendor = $resv['vendor'];
            $attrv = $resv['attr'];
            $datav = $resv['data'];
            printf("Got Vendor Attr:%d %d Bytes %s\n", $attrv, strlen($datav), bin2hex($datav));
        }

    }
}
?>

   
```

## See Also

 `radius_get_attr()` `radius_put_vendor_attr()`
