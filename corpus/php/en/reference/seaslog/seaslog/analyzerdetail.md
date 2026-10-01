---
id: "en-php-function-seaslog-analyzerdetail"
language: "php"
lang: "en"
category: "function"
name: "SeasLog::analyzerDetail"
title: "Get log detail by level, log_path, key_word, start, limit, order"
signature: "public static mixed SeasLog::analyzerDetail(string $level, [string $log_path = ...], [string $key_word = ...], [int $start = ...], [int $limit = ...], [int $order = ...])"
module: "seaslog"
source_url: "https://www.php.net/manual/en/seaslog.analyzerdetail.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get log detail by level, log_path, key_word, start, limit, order

## Description

```php
public static mixed SeasLog::analyzerDetail(string $level, [string $log_path = ...], [string $key_word = ...], [int $start = ...], [int $limit = ...], [int $order = ...])
```

`SeasLog` get results of `grep -ai '{level}' | grep -ai '{key_word}' | sed -n '{start},{limit}'p` use system pipe and return array to PHP.

## Parameters

- **`$level`** — String. The log information level.
- **`$log_path`** — String. The log information path.
- **`$key_word`** — String. The search key word for log information.
- **`$start`** — Int. Default is `1`.
- **`$limit`** — Int. Default is `20`.
- **`$order`** — Int. Default is SEASLOG_DETAIL_ORDER_ASC. See also: SEASLOG_DETAIL_ORDER_ASC SEASLOG_DETAIL_ORDER_DESC

## Return Values

Return results as array.

> When `start`,`limit` is not NULL and in Windows, SeasLog will threw exception with message 'Param start and limit don't support Windows'.

## Examples

**`SeasLog::analyzerDetail()` example**

```php


<?php

$result1 = SeasLog::analyzerDetail(SEASLOG_ERROR);

//with `logger` and `key_word`
$result2 = SeasLog::analyzerDetail(SEASLOG_ERROR,'test/logger/','neeke');

//with `start` and `limit`
$result3 = SeasLog::analyzerDetail(SEASLOG_ERROR,'test/logger/','neeke',1,2);

var_dump($result1,$result2,$result3);
?>

   
```

The above example will output something similar to:

```text


array(20) {
  [0]=>
  string(93) "2018-07-09 12:52:53 | ERROR | 12247 | 5b42ea2580e51 | 1531111973.528 | log message from neeke"
  [1]=>
  string(93) "2018-07-09 12:52:54 | ERROR | 12256 | 5b42ea26d6657 | 1531111974.878 | log message from neeke"
  [2]=>
  string(93) "2018-07-09 12:52:55 | ERROR | 12265 | 5b42ea277b8d4 | 1531111975.506 | log message from neeke"
  [3]=>
  string(104) "2018-07-09 12:52:55 | ERROR | 12274 | 5b42ea27db5dc | 1531111975.898 | log message from the other people"
...
}

array(3) {
  [0]=>
  string(93) "2018-07-09 12:52:53 | ERROR | 12247 | 5b42ea2580e51 | 1531111973.528 | log message from neeke"
  [1]=>
  string(93) "2018-07-09 12:52:54 | ERROR | 12256 | 5b42ea26d6657 | 1531111974.878 | log message from neeke"
  [2]=>
  string(93) "2018-07-09 12:52:55 | ERROR | 12265 | 5b42ea277b8d4 | 1531111975.506 | log message from neeke"
}

array(2) {
  [0]=>
  string(93) "2018-07-09 12:52:53 | ERROR | 12247 | 5b42ea2580e51 | 1531111973.528 | log message from neeke"
  [1]=>
  string(93) "2018-07-09 12:52:54 | ERROR | 12256 | 5b42ea26d6657 | 1531111974.878 | log message from neeke"
}

   
```

## See Also

 `SeasLog::analyzerCount()`
