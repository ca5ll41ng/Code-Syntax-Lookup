---
id: "zh-php-function-thread-isstarted"
language: "php"
lang: "zh"
category: "function"
name: "Thread::isStarted"
title: "状态检测"
signature: "public bool Thread::isStarted()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/thread.isstarted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 状态检测

## 说明

```php
public bool Thread::isStarted()
```

线程是否开始执行

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**监测线程是否开始执行**

```php


<?php
$worker = new Worker();
$worker->start();
var_dump($worker->isStarted());
?>

   
```

以上示例会输出：

```text


bool(true)

   
```
