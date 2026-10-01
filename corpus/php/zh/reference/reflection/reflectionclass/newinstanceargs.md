---
id: "zh-php-function-reflectionclass-newinstanceargs"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::newInstanceArgs"
title: "从给出的参数创建一个新的类实例"
signature: "public object|null ReflectionClass::newInstanceArgs(array $args = [])"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.newinstanceargs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从给出的参数创建一个新的类实例

## 说明

```php
public object|null ReflectionClass::newInstanceArgs(array $args = [])
```

创建一个类的新实例，给出的参数将传递到类的构造函数。

## 参数

- **`$args`** — 这个参数以 `array` 形式传递到类的构造函数。

## 返回值

返回类的新实例，失败时返回 `null`。

## 错误／异常

如果类的构造函数不是 public 的将导致产生 `ReflectionException`。

当 `$args` 指定了一个或多个参数，而类不具有构造函数时,将导致 `ReflectionException`。

## 示例

**`ReflectionClass::newInstanceArgs()` 的基本用法**

```php


<?php
$class = new ReflectionClass('ReflectionFunction');
$instance = $class->newInstanceArgs(array('substr'));
var_dump($instance);
?>

    
```

以上示例会输出：

```text


object(ReflectionFunction)#2 (1) {
  ["name"]=>
  string(6) "substr"
}

    
```

## 参见

`ReflectionClass::newInstance()` `ReflectionClass::newInstanceWithoutConstructor()`
