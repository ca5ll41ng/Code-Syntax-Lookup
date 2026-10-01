---
id: "en-php-function-gearmanclient-dohigh"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::doHigh"
title: "Run a single high priority task"
signature: "public string GearmanClient::doHigh(string $function, string $workload, string|null $unique = null)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.dohigh.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Run a single high priority task

## Description

```php
public string GearmanClient::doHigh(string $function, string $workload, string|null $unique = null)
```

Runs a single high priority task and returns a string representation of the result. It is up to the `GearmanClient` and `GearmanWorker` to agree on the format of the result. High priority tasks will get precedence over normal and low priority tasks in the job queue.

## Parameters

- **`$function`** — A registered function the worker is to execute
- **`$workload`** — Serialized data to be processed
- **`$unique`** — A unique ID used to identify a particular task

## Return Values

A string representing the results of running a task.

## See Also

 `GearmanClient::doNormal()` `GearmanClient::doLow()` `GearmanClient::doBackground()` `GearmanClient::doHighBackground()` `GearmanClient::doLowBackground()`
