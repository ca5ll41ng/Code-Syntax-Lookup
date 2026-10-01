---
id: "en-php-function-gearmanclient-dojobhandle"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::doJobHandle"
title: "Get the job handle for the running task"
signature: "public string GearmanClient::doJobHandle()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.dojobhandle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the job handle for the running task

## Description

```php
public string GearmanClient::doJobHandle()
```

Gets that job handle for a running task. This should be used between repeated `GearmanClient::doNormal()` calls. The job handle can then be used to get information on the task.

## Parameters

This function has no parameters.

## Return Values

The job handle for the running task.

## See Also

 `GearmanClient::jobStatus()`
