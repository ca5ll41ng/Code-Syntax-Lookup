---
id: "en-php-function-gearmantask-recvdata"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::recvData"
title: "Read work or result data into a buffer for a task"
signature: "public false|array GearmanTask::recvData(int $data_len)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.recvdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read work or result data into a buffer for a task

## Description

```php
public false|array GearmanTask::recvData(int $data_len)
```

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## Parameters

- **`$data_len`** — Length of data to be read.

## Return Values

An array whose first element is the length of data read and the second is the data buffer. Returns `false` if the read failed.

## See Also

 `GearmanTask::sendData()`
