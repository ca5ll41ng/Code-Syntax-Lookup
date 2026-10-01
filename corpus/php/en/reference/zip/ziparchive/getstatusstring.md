---
id: "en-php-function-ziparchive-getstatusstring"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::getStatusString"
title: "Returns the status error message, system and/or zip messages"
signature: "public string ZipArchive::getStatusString()"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.getstatusstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the status error message, system and/or zip messages

## Description

```php
public string ZipArchive::getStatusString()
```

Returns the status error message, system and/or zip messages.

## Parameters

This function has no parameters.

## Return Values

Returns a `string` with the status message.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL zip 1.18.0 | This method can be called on closed archive. |
| 8.0.0, PECL zip 1.18.0 | This method no longer returns `false` on failure. |
