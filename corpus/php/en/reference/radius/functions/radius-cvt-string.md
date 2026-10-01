---
id: "en-php-function-function-radius-cvt-string"
language: "php"
lang: "en"
category: "function"
name: "radius_cvt_string"
title: "Converts raw data to string"
signature: "string radius_cvt_string(string $data)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-cvt-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts raw data to string

## Description

```php
string radius_cvt_string(string $data)
```

Converts raw data to string

## Parameters

- **`$data`** — Input data

## Return Values

Returns the string, retrieved from data.

## Examples

**`radius_cvt_string()` example**

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

    case RADIUS_FILTER_ID:
        $id = radius_cvt_string($data);
        echo "Filter ID: $id<br>\n";
        break;
    }
}
?>

   
```

## See Also

 `radius_cvt_addr()` `radius_cvt_int()`
