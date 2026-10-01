---
id: "en-php-function-gearmantask-senddata"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::sendData"
title: "Send data for a task (deprecated)"
signature: "public int GearmanTask::sendData(string $data)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.senddata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send data for a task (deprecated)

## Description

```php
public int GearmanTask::sendData(string $data)
```

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## Parameters

- **`$data`** — Data to send to the worker.

## Return Values

The length of data sent, or `false` if the send failed.

## See Also

 `GearmanTask::recvData()`
