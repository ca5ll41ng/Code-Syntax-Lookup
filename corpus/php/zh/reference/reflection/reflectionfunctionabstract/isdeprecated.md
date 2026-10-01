---
id: "zh-php-function-reflectionfunctionabstract-isdeprecated"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionFunctionAbstract::isDeprecated"
title: "检查是否已经弃用"
signature: "public bool ReflectionFunctionAbstract::isDeprecated()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionfunctionabstract.isdeprecated.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查是否已经弃用

## 说明

```php
public bool ReflectionFunctionAbstract::isDeprecated()
```

检查函数是否已经被弃用

## 参数

此函数没有参数。

## 返回值

弃用返回 `true`，否则返回 `false`

## 示例

**`ReflectionFunctionAbstract::isDeprecated()` 示例**

```php


<?php
$rf = new ReflectionFunction('ereg');
var_dump($rf->isDeprecated());
?>

    
```

以上示例会输出：

```text


bool(true)

    
```

## 参见

`Deprecated` `ReflectionFunctionAbstract::getDocComment()`
