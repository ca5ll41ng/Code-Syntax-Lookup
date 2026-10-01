---
id: "zh-php-function-function-getcwd"
language: "php"
lang: "zh"
category: "function"
name: "getcwd"
title: "取得当前工作目录"
signature: "string|false getcwd()"
module: "dir"
source_url: "https://www.php.net/manual/zh/function.getcwd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得当前工作目录

## 说明

```php
string|false getcwd()
```

取得当前工作目录。

## 参数

此函数没有参数。

## 返回值

成功则返回当前工作目录，失败返回 `false`。

在某些 Unix 的变种下，如果任何父目录没有设定可读或搜索模式，即使当前目录设定了，`getcwd()` 还是会返回 `false`。有关模式与权限的更多信息见 `chmod()`。

## 示例

**`getcwd()` 例子**

```php


<?php

// 当前目录
echo getcwd() . "\n";

chdir('cvs');

// 当前目录
echo getcwd() . "\n";

?>

     
```

以上示例的输出类似于：

```text


/home/didou
/home/didou/cvs

     
```

## 注释

> 如果是启用 ZTS（Zend 线程安全）构建的 PHP 解释器，则 `getcwd()` 返回的当前工作目录可能与操作系统接口返回的不同。当前工作目录的外部库依赖（通过 FFI 调用）可能会受到影响。

## 参见

`chdir()` `chmod()`
