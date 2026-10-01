---
id: "en-php-function-resourcebundle-geterrormessage"
language: "php"
lang: "en"
category: "function"
name: "ResourceBundle::getErrorMessage"
aliases: ["resourcebundle_get_error_message"]
title: "Get bundle's last error message"
signature: "public string ResourceBundle::getErrorMessage()"
module: "intl"
source_url: "https://www.php.net/manual/en/resourcebundle.geterrormessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get bundle's last error message

## Description

Object-oriented style

```php
public string ResourceBundle::getErrorMessage()
```

Procedural style

```php
string resourcebundle_get_error_message(ResourceBundle $bundle)
```

Get error message from the last function performed by the bundle object.

## Parameters

- **`$bundle`** — `ResourceBundle` object.

## Return Values

Returns error message from last bundle object's call.

## Examples

**`resourcebundle_get_error_message()` example**

```php


<?php
$r = resourcebundle_create( 'es', "/usr/share/data/myapp");
echo $r['somestring'];
if(intl_is_failure(resourcebundle_get_error_code($r))) {
    report_error("Bundle error: ".resourcebundle_get_error_message($r));
}
?>

   
```

**OO example**

```php


<?php
$r = new ResourceBundle( 'es', "/usr/share/data/myapp");
echo $r['somestring'];
if(intl_is_failure(ResourceBundle::getErrorCode($r))) {
    report_error("Bundle error: ".ResourceBundle::getErrorMessage($r));
}
?>

   
```

## See Also

`resourcebundle_get_error_code()` `intl_get_error_code()` `intl_is_failure()`
