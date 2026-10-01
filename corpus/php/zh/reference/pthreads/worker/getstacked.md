---
id: "zh-php-function-worker-getstacked"
language: "php"
lang: "zh"
category: "function"
name: "Worker::getStacked"
title: "获取剩余的栈大小"
signature: "public int Worker::getStacked()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/worker.getstacked.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取剩余的栈大小

## 说明

```php
public int Worker::getStacked()
```

返回栈中剩余的任务数量

## 参数

此函数没有参数。

## 返回值

返回 worker 中等待执行的任务数量

## 示例

**`Worker::getStacked` 基本示例**

```php


<?php
$worker = new Worker();

for ($i = 0; $i < 5; ++$i) {
    $worker->stack(new class extends Threaded {});
}

echo "There are {$worker->getStacked()} stacked tasks\n";

   
```

以上示例会输出：

```text


There are 5 stacked tasks

   
```
