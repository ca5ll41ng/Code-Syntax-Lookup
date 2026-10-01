---
id: "en-php-function-function-radius-get-tagged-attr-data"
language: "php"
lang: "en"
category: "function"
name: "radius_get_tagged_attr_data"
title: "Extracts the data from a tagged attribute"
signature: "string|false radius_get_tagged_attr_data(string $data)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-get-tagged-attr-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extracts the data from a tagged attribute

## Description

```php
string|false radius_get_tagged_attr_data(string $data)
```

If a tagged attribute has been returned from `radius_get_attr()`, `radius_get_tagged_attr_data()` will return the data from the attribute.

## Parameters

- **`$data`** — The tagged attribute to be decoded.

## Return Values

Returns the data from the tagged attribute or `false` on failure.

## Examples

**`radius_get_tagged_attr_data()` example**

```php


<?php
while ($resa = radius_get_attr($res)) {
    if (!is_array($resa)) {
        printf ("Error getting attribute: %s\n",  radius_strerror($res));
        exit;
    }

    $attr = $resa['attr'];
    $data = $resa['data'];

    $tag = radius_get_tagged_attr_tag($data);
    $value = radius_get_tagged_attr_data($data);

    printf("Got tagged attribute with tag %d and value %s\n", $tag, $value);
}
?>

   
```

## See Also

 `radius_get_attr()` `radius_get_tagged_attr_tag()`
