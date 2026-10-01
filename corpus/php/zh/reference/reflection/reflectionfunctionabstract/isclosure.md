---
id: "zh-php-function-reflectionfunctionabstract-isclosure"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionFunctionAbstract::isClosure"
title: "检查是否是匿名函数"
signature: "public bool ReflectionFunctionAbstract::isClosure()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionfunctionabstract.isclosure.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查是否是匿名函数

## 说明

```php
public bool ReflectionFunctionAbstract::isClosure()
```

检查反射函数是否是 `Closure`。

## 参数

此函数没有参数。

## 返回值

如果是 `Closure` 返回 `true`，否则返回 `false`。

## 示例

**`ReflectionFunctionAbstract::isClosure()` 示例**

```php


<?php
// 非匿名函数
$function1 = 'str_replace';
$reflection1 = new ReflectionFunction($function1);
var_dump($reflection1->isClosure());

// 匿名函数
$function2 = function () {};
$reflection2 = new ReflectionFunction($function2);
var_dump($reflection2->isClosure());
?>

    
```

以上示例会输出：

```text


bool(false)
bool(true)

    
```

## 参见

`ReflectionFunctionAbstract::isGenerator()`
