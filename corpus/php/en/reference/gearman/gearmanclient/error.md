---
id: "en-php-function-gearmanclient-error"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::error"
title: "Returns an error string for the last error encountered"
signature: "public string|false GearmanClient::error()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an error string for the last error encountered

## Description

```php
public string|false GearmanClient::error()
```

Returns an error string for the last error encountered.

## Parameters

This function has no parameters.

## Return Values

A human readable error string, or `false` if there is no error message available.

## See Also

 `GearmanClient::getErrno()`
