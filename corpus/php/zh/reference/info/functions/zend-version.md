---
id: "zh-php-function-function-zend-version"
language: "php"
lang: "zh"
category: "function"
name: "zend_version"
title: "获取当前 Zend 引擎的版本"
signature: "string zend_version()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.zend-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前 Zend 引擎的版本

## 说明

```php
string zend_version()
```

获取当前运行的 Zend 引擎的版本字符串。

## 参数

此函数没有参数。

## 返回值

获取 Zend 引擎的版本数字的字符串。

## 示例

**`zend_version()` 示例**

```php


<?php
echo "Zend engine version: " . zend_version();
?>

    
```

以上示例的输出类似于：

```text


Zend engine version: 2.2.0

    
```

## 参见

`phpinfo()` `phpcredits()` `phpversion()`
