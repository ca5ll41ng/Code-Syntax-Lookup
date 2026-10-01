---
id: "en-php-function-gearmanclient-echo"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::echo"
title: "Send data to all job servers to see if they echo it back [deprecated]"
signature: "public bool GearmanClient::echo(string $workload)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.echo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send data to all job servers to see if they echo it back [deprecated]

## Description

```php
public bool GearmanClient::echo(string $workload)
```

The `GearmanClient::echo()` method is deprecated as of pecl/gearman 1.0.0. Use `GearmanClient::ping()`.

## Parameters

- **`$workload`** — Some arbitrary serialized data to be echo back

## Return Values

Returns `true` on success or `false` on failure.
