---
id: "zh-php-function-pool-collect"
language: "php"
lang: "zh"
category: "function"
name: "Pool::collect"
title: "回收已完成任务的引用"
signature: "public int Pool::collect([Callable $collector = ...])"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/pool.collect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 回收已完成任务的引用

## 说明

```php
public int Pool::collect([Callable $collector = ...])
```

对于视为垃圾的引用，使用给定的垃圾收集器进行收集

## 参数

- **`$collector`** — 垃圾收集器，它返回一个布尔值表示这个任务是否可以被进行垃圾收集。 仅在极少的情况下需要一个自定义的垃圾收集器。

## 返回值

池中剩余的待收集的任务数量。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL pthreads 3.0.0 | `$collector` 参数变为可选参数， 并且返回值改为整数。 |

## 示例

**`Pool::collect()` 基本用法示例**

```php


<?php
$pool = new Pool(4);

for ($i = 0; $i < 15; ++$i) {
    $pool->submit(new class extends Threaded {});
}

while ($pool->collect()); // 直到全部的任务都完成执行之后才会继续下面的代码

$pool->shutdown();

   
```
