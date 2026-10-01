---
id: "en-php-function-seaslog-analyzercount"
language: "php"
lang: "en"
category: "function"
name: "SeasLog::analyzerCount"
title: "Get log count by level, log_path and key_word"
signature: "public static mixed SeasLog::analyzerCount(string $level, [string $log_path = ...], [string $key_word = ...])"
module: "seaslog"
source_url: "https://www.php.net/manual/en/seaslog.analyzercount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get log count by level, log_path and key_word

## Description

```php
public static mixed SeasLog::analyzerCount(string $level, [string $log_path = ...], [string $key_word = ...])
```

`SeasLog` get count value of `grep -ai '{level}' | grep -aic '{key_word}'` use system pipe and return to PHP (array or int).

## Parameters

- **`$level`** — String. The log information level.
- **`$log_path`** — String. The log information path.
- **`$key_word`** — String. The search key word for log information.

## Return Values

If `level` is SEASLOG_ALL or Empty, return all levels count as `array`. If `level` is SEASLOG_INFO or the other level, return count as `int`.

## Examples

**`SeasLog::analyzerCount()` example**

```php


<?php

$countResult1 = SeasLog::analyzerCount();

//with `level`
$countResult2 = SeasLog::analyzerCount(SEASLOG_DEBUG);

//with `level` and `log_path`
$countResult3 = SeasLog::analyzerCount(SEASLOG_ERROR,date('Ymd',time()));

//with `level` and `key_word`
$countResult4 = SeasLog::analyzerCount(SEASLOG_DEBUG,NULL,'accessToken');

var_dump($countResult1,$countResult2,$countResult3,$countResult4);

?>

   
```

The above example will output something similar to:

```text


array(8) {
  ["DEBUG"]=>
  int(180)
  ["INFO"]=>
  int(214)
  ["NOTICE"]=>
  int(0)
  ["WARNING"]=>
  int(0)
  ["ERROR"]=>
  int(228)
  ["CRITICAL"]=>
  int(244)
  ["ALERT"]=>
  int(1)
  ["EMERGENCY"]=>
  int(0)
}

int(180)

int(228)

int(29)

   
```

## See Also

 `SeasLog::analyzerDetail()`
