---
id: "en-php-function-gearmanclient-dolow"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::doLow"
title: "Run a single low priority task"
signature: "public string GearmanClient::doLow(string $function, string $workload, string|null $unique = null)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.dolow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Run a single low priority task

## Description

```php
public string GearmanClient::doLow(string $function, string $workload, string|null $unique = null)
```

Runs a single low priority task and returns a string representation of the result. It is up to the `GearmanClient` and `GearmanWorker` to agree on the format of the result. Normal and high priority tasks will get precedence over low priority tasks in the job queue.

## Parameters

- **`$function`** — A registered function the worker is to execute
- **`$workload`** — Serialized data to be processed
- **`$unique`** — A unique ID used to identify a particular task

## Return Values

A string representing the results of running a task.

## See Also

 `GearmanClient::doNormal()` `GearmanClient::doHigh()` `GearmanClient::doBackground()` `GearmanClient::doHighBackground()` `GearmanClient::doLowBackground()`
