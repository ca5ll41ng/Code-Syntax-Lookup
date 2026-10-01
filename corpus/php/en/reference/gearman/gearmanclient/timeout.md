---
id: "en-php-function-gearmanclient-timeout"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::timeout"
title: "Get current socket I/O activity timeout value"
signature: "public int GearmanClient::timeout()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.timeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get current socket I/O activity timeout value

## Description

```php
public int GearmanClient::timeout()
```

Returns the timeout in milliseconds to wait for I/O activity.

## Parameters

This function has no parameters.

## Return Values

Timeout in milliseconds to wait for I/O activity. A negative value means an infinite timeout.

## See Also

 `GearmanClient::setTimeout()`
