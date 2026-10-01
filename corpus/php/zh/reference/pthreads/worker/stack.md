---
id: "zh-php-function-worker-stack"
language: "php"
lang: "zh"
category: "function"
name: "Worker::stack"
title: "将要执行的任务入栈"
signature: "public int Worker::stack(Threaded $work)"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/worker.stack.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将要执行的任务入栈

## 说明

```php
public int Worker::stack(Threaded $work)
```

将要执行的任务入栈到 Worker 对象

## 参数

- **`$work`** — 要被 Worker 执行的 `Threaded` 派生对象

## 返回值

入栈之后，Worker 对象栈的大小。

## 示例

**向 Worker 中入栈任务并执行**

```php


<?php
$worker = new Worker();
$work = new class extends Threaded {};

var_dump($worker->stack($work));
   
```

以上示例会输出：

```text


int(1)

   
```
