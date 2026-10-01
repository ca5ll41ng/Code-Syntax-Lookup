---
id: "zh-php-function-function-zend-thread-id"
language: "php"
lang: "zh"
category: "function"
name: "zend_thread_id"
title: "返回当前线程的唯一识别符"
signature: "int zend_thread_id()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.zend-thread-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前线程的唯一识别符

## 说明

```php
int zend_thread_id()
```

该函数返回当前线程的唯一识别符。

## 参数

此函数没有参数。

## 返回值

以整型（integer）返回线程的 ID。

## 示例

**`zend_thread_id()` 示例**

```php


<?php
$thread_id = zend_thread_id();

echo 'Current thread id is: ' . $thread_id;
?>

    
```

以上示例的输出类似于：

```text


Current thread id is: 7864

    
```

## 注释

> 该函数仅在以下情况有效：PHP 内置 ZTS（Zend 线程安全）的支持， 并开启调试模式（`--enable-debug`）时。
