---
id: "en-php-function-function-com-create-guid"
language: "php"
lang: "en"
category: "function"
name: "com_create_guid"
title: "Generate a globally unique identifier (GUID)"
signature: "string|false com_create_guid()"
module: "com"
source_url: "https://www.php.net/manual/en/function.com-create-guid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate a globally unique identifier (GUID)

## Description

```php
string|false com_create_guid()
```

Generates a Globally Unique Identifier (GUID).

A GUID is generated in the same way as DCE UUID's, except that the Microsoft convention is to enclose a GUID in curly braces.

## Parameters

This function has no parameters.

## Return Values

Returns the GUID as a string, or `false` on failure.

## See Also

`uuid_create()` in the PECL uuid extension
