---
id: "en-php-function-gearmantask-sendworkload"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::sendWorkload"
title: "Send data for a task"
signature: "public int|false GearmanTask::sendWorkload(string $data)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.sendworkload.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send data for a task

## Description

```php
public int|false GearmanTask::sendWorkload(string $data)
```

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## Parameters

- **`$data`** — Data to send to the worker.

## Return Values

The length of data sent, or `false` if the send failed.

## See Also

 `GearmanTask::recvData()`
