---
id: "zh-php-function-worker-isshutdown"
language: "php"
lang: "zh"
category: "function"
name: "Worker::isShutdown"
title: "状态检测"
signature: "public bool Worker::isShutdown()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/worker.isshutdown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 状态检测

## 说明

```php
public bool Worker::isShutdown()
```

Worker 对象是否被关闭

## 参数

此函数没有参数。

## 返回值

布尔值，表示 worker 是否已经被关闭

## 示例

**检测 Worker 对象状态**

```php


<?php
$worker = new Worker();
$worker->start();

var_dump($worker->isShutdown());

$worker->shutdown();

var_dump($worker->isShutdown());

   
```

以上示例会输出：

```text


bool(false)
bool(true)

   
```
