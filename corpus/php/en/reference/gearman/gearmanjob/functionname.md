---
id: "en-php-function-gearmanjob-functionname"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::functionName"
title: "Get function name"
signature: "public false|string GearmanJob::functionName()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.functionname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get function name

## Description

```php
public false|string GearmanJob::functionName()
```

Returns the function name for this job. This is the function the work will execute to perform the job.

## Parameters

This function has no parameters.

## Return Values

The name of a function, or `false` if the job has not yet been initialized.

## See Also

 `GearmanTask::function()`
