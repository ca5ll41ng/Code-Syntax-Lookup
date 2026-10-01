---
id: "zh-php-function-function-gc-status"
language: "php"
lang: "zh"
category: "function"
name: "gc_status"
title: "获取有关垃圾回收的信息"
signature: "array gc_status()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.gc-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取有关垃圾回收的信息

## 说明

```php
array gc_status()
```

获取有关当前垃圾收集状态的信息。

## 参数

此函数没有参数。

## 返回值

返回包含以下元素的关联数组：

- `"runs"`
- `"collected"`
- `"threshold"`
- `"roots"`
- `"running"`
- `"protected"`
- `"full"`
- `"buffer_size"`
- `"application_time"`
- `"collector_time"`
- `"destructor_time"`
- `"free_time"`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | `gc_status()` 现在会返回以下附加字段： `"running"`、`"protected"`、 `"full"`、`"buffer_size"`、 `"application_time"`、`"collector_time"`、 `"destructor_time"` 和 `"free_time"`。 |

## 示例

**`gc_status()` 用法**

```php


<?php

// create object tree that needs gc collection
$a = new stdClass();
$a->b = [];
for ($i = 0; $i < 100000; $i++) {
    $b = new stdClass();
    $b->a = $a;
    $a->b[] = $b;
}
unset($a);
unset($b);
gc_collect_cycles();

var_dump(gc_status());

    
```

以上示例的输出类似于：

```text


array(4) {
  ["runs"]=>
  int(5)
  ["collected"]=>
  int(100002)
  ["threshold"]=>
  int(50001)
  ["roots"]=>
  int(0)
}

    
```

上述示例在 PHP 8.3 中的输出类似于：

```text


array(12) {
  ["running"]=>
  bool(false)
  ["protected"]=>
  bool(false)
  ["full"]=>
  bool(false)
  ["runs"]=>
  int(5)
  ["collected"]=>
  int(100002)
  ["threshold"]=>
  int(50001)
  ["buffer_size"]=>
  int(131072)
  ["roots"]=>
  int(0)
  ["application_time"]=>
  float(0.031182458)
  ["collector_time"]=>
  float(0.020106291)
  ["destructor_time"]=>
  float(0)
  ["free_time"]=>
  float(0.003707167)
}

    
```

## 参见

垃圾回收
