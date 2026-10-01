---
id: "en-php-function-gearmanclient-dolowbackground"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::doLowBackground"
title: "Run a low priority task in the background"
signature: "public string GearmanClient::doLowBackground(string $function, string $workload, string|null $unique = null)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.dolowbackground.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Run a low priority task in the background

## Description

```php
public string GearmanClient::doLowBackground(string $function, string $workload, string|null $unique = null)
```

Runs a low priority task in the background, returning a job handle which can be used to get the status of the running task. Normal and high priority tasks take precedence over low priority tasks in the job queue.

## Parameters

- **`$function`** — A registered function the worker is to execute
- **`$workload`** — Serialized data to be processed
- **`$unique`** — A unique ID used to identify a particular task

## Return Values

The job handle for the submitted task.

## See Also

 `GearmanClient::doNormal()` `GearmanClient::doHigh()` `GearmanClient::doLow()` `GearmanClient::doBackground()` `GearmanClient::doHighBackground()`
