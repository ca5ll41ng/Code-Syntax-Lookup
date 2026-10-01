---
id: "zh-php-function-reflectionclass-getmethod"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getMethod"
title: "获取类方法的 `ReflectionMethod`"
signature: "public ReflectionMethod ReflectionClass::getMethod(string $name)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取类方法的 `ReflectionMethod`

## 说明

```php
public ReflectionMethod ReflectionClass::getMethod(string $name)
```

获取类方法的 `ReflectionMethod`。

## 参数

- **`$name`** — 要反射的方法名称。

## 返回值

一个 `ReflectionMethod`。

## 错误／异常

如果方法不存在则会抛出 `ReflectionException` 异常。

## 示例

**`ReflectionClass::getMethod()` 的基本用法**

```php


<?php
$class = new ReflectionClass('ReflectionClass');
$method = $class->getMethod('getMethod');
var_dump($method);
?>

    
```

以上示例会输出：

```text


object(ReflectionMethod)#2 (2) {
  ["name"]=>
  string(9) "getMethod"
  ["class"]=>
  string(15) "ReflectionClass"
}

    
```

## 参见

`ReflectionClass::getMethods()`
