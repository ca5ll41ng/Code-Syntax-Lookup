---
id: "zh-php-function-reflectionclass-getdoccomment"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getDocComment"
title: "获取文档注释"
signature: "public string|false ReflectionClass::getDocComment()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getdoccomment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取文档注释

## 说明

```php
public string|false ReflectionClass::getDocComment()
```

从类中获取文档注释。文档注释以 `/**` 开头，后跟空格。 如果类定义上方有多个文档注释，则采用最接近该类的注释。

## 参数

此函数没有参数。

## 返回值

如果存在则返回文档注释，否则返回 `false`。

## 示例

**`ReflectionClass::getDocComment()` 示例**

```php


<?php
/**
 * A test class
 *
 * @param  foo bar
 * @return baz
 */
class TestClass { }

$rc = new ReflectionClass('TestClass');
var_dump($rc->getDocComment());
?>

    
```

以上示例会输出：

```text


string(61) "/** 
 * A test class
 *
 * @param  foo bar
 * @return baz
 */"

    
```

## 参见

`ReflectionClass::getName()`
