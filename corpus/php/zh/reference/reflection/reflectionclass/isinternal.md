---
id: "zh-php-function-reflectionclass-isinternal"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::isInternal"
title: "检查类是否由扩展或核心在内部定义"
signature: "public bool ReflectionClass::isInternal()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.isinternal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查类是否由扩展或核心在内部定义

## 说明

```php
public bool ReflectionClass::isInternal()
```

检查类是否由扩展或核心在内部定义，与用户定义相反。

## 参数

此函数没有参数。

## 返回值

如果该类扩展或核心的内部定义的，则返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::isInternal()` 基本用法**

```php


<?php
$internalclass = new ReflectionClass('ReflectionClass');

class Apple {}
$userclass = new ReflectionClass('Apple');

var_dump($internalclass->isInternal());
var_dump($userclass->isInternal());
?>

    
```

以上示例会输出：

```text


bool(true)
bool(false)

    
```

## 参见

`ReflectionClass::isUserDefined()`
