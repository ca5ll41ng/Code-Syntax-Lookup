---
id: "en-php-function-gearmanclient-ping"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::ping"
title: "Send data to all job servers to see if they echo it back"
signature: "public bool GearmanClient::ping(string $workload)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.ping.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send data to all job servers to see if they echo it back

## Description

```php
public bool GearmanClient::ping(string $workload)
```

Sends some arbitrary data to all job servers to see if they echo it back. The data sent is not used or processed in any other way. Primarily used for testing and debugging.

## Parameters

- **`$workload`** — Some arbitrary serialized data to be echo back

## Return Values

Returns `true` on success or `false` on failure.
