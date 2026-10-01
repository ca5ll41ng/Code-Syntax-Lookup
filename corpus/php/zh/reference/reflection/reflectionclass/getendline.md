---
id: "zh-php-function-reflectionclass-getendline"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getEndLine"
title: "获取最后一行的行数"
signature: "public int|false ReflectionClass::getEndLine()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getendline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取最后一行的行数

## 说明

```php
public int|false ReflectionClass::getEndLine()
```

从用户定义的类获取其最后一行的行数。

## 参数

此函数没有参数。

## 返回值

返回用户定义的类最后一行的行数，如果未知则返回 `false`。

## 示例

**`ReflectionClass::getEndLine()` 示例**

```php


<?php
// Test Class
class TestClass { }

$rc = new ReflectionClass('TestClass');

echo $rc->getEndLine();
?>

    
```

以上示例会输出：

```text


3

    
```

## 参见

`ReflectionClass::getStartLine()`
