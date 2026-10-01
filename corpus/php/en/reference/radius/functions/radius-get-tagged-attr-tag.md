---
id: "en-php-function-function-radius-get-tagged-attr-tag"
language: "php"
lang: "en"
category: "function"
name: "radius_get_tagged_attr_tag"
title: "Extracts the tag from a tagged attribute"
signature: "int|false radius_get_tagged_attr_tag(string $data)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-get-tagged-attr-tag.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extracts the tag from a tagged attribute

## Description

```php
int|false radius_get_tagged_attr_tag(string $data)
```

If a tagged attribute has been returned from `radius_get_attr()`, `radius_get_tagged_attr_data()` will return the tag from the attribute.

## Parameters

- **`$data`** — The tagged attribute to be decoded.

## Return Values

Returns the tag from the tagged attribute or `false` on failure.

## Examples

**`radius_get_tagged_attr_tag()` example**

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

 `radius_get_attr()` `radius_get_tagged_attr_data()`
