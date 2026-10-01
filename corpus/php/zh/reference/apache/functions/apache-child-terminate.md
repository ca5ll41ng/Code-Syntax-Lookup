---
id: "zh-php-function-function-apache-child-terminate"
language: "php"
lang: "zh"
category: "function"
name: "apache_child_terminate"
title: "在本次请求结束后终止 apache 子进程"
signature: "void apache_child_terminate()"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.apache-child-terminate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在本次请求结束后终止 apache 子进程

## 说明

```php
void apache_child_terminate()
```

`apache_child_terminate()` 将把运行当前 PHP 请求的 Apache 子进程注册为终止状态，一旦结束 PHP 代码的运行此进程将终止。可以用在占用大量内存的脚本后面来终止该进程，因为通常内存只在内部释放而不会还给操作系统。

在 Apache 和 FastCGI 网页服务器中运行。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 注释

> 此函数未在 Windows 平台下实现。

## 参见

`exit()`
