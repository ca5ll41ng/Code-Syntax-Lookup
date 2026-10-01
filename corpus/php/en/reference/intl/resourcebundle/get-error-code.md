---
id: "en-php-function-resourcebundle-geterrorcode"
language: "php"
lang: "en"
category: "function"
name: "ResourceBundle::getErrorCode"
aliases: ["resourcebundle_get_error_code"]
title: "Get bundle's last error code"
signature: "public int ResourceBundle::getErrorCode()"
module: "intl"
source_url: "https://www.php.net/manual/en/resourcebundle.geterrorcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get bundle's last error code

## Description

Object-oriented style

```php
public int ResourceBundle::getErrorCode()
```

Procedural style

```php
int resourcebundle_get_error_code(ResourceBundle $bundle)
```

Get error code from the last function performed by the bundle object.

## Parameters

- **`$bundle`** — `ResourceBundle` object.

## Return Values

Returns error code from last bundle object call.

## Examples

**`resourcebundle_get_error_code()` example**

```php


<?php
$r = resourcebundle_create( 'es', "/usr/share/data/myapp");
echo $r['somestring'];
if(intl_is_failure(resourcebundle_get_error_code($r))) {
    report_error("Bundle error");
}
?>

   
```

**OO example**

```php


<?php
$r = new ResourceBundle( 'es', "/usr/share/data/myapp");
echo $r['somestring'];
if(intl_is_failure(ResourceBundle::getErrorCode($r))) {
    report_error("Bundle error");
}
?>

   
```

## See Also

`resourcebundle_get_error_message()` `intl_get_error_code()` `intl_is_failure()`
