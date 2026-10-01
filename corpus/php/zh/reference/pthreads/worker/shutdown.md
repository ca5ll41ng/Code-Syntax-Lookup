---
id: "zh-php-function-worker-shutdown"
language: "php"
lang: "zh"
category: "function"
name: "Worker::shutdown"
title: "关闭 Worker"
signature: "public bool Worker::shutdown()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/worker.shutdown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 Worker

## 说明

```php
public bool Worker::shutdown()
```

在执行完已入栈对象之后，关闭这个 Worker 对象

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**关闭 Worker**

```php


<?php
$my = new Worker();
$my->start();
/* 入栈和执行任务 */
var_dump($my->shutdown());

   
```

以上示例会输出：

```text


bool(true)

   
```
