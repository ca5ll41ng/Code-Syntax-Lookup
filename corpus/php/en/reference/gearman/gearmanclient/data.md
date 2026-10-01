---
id: "en-php-function-gearmanclient-data"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::data"
title: "Get the application data (deprecated)"
signature: "public string GearmanClient::data()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the application data (deprecated)

## Description

```php
public string GearmanClient::data()
```

Get the application data previously set with `GearmanClient::setData()`.

> This method was replaced by `GearmanClient::setContext()` in the 0.6.0 release of the Gearman extension.

## Parameters

This function has no parameters.

## Return Values

The same string data set with `GearmanClient::setData()`

## See Also

 `GearmanClient::setData()`
