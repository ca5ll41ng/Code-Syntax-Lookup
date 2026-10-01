---
id: "en-php-function-gearmanclient-setdata"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::setData"
title: "Set application data (deprecated)"
signature: "public bool GearmanClient::setData(string $data)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.setdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set application data (deprecated)

## Description

```php
public bool GearmanClient::setData(string $data)
```

Sets some arbitrary application data that can later be retrieved by `GearmanClient::data()`.

> This method has been replaced by `GearmanClient::setContext()` in the 0.6.0 release of the Gearman extension.

## Parameters

- **`$data`**

## Return Values

Always returns `true`.

## See Also

 `GearmanClient::data()`
