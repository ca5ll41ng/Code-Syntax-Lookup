---
id: "zh-php-function-reflectionmethod-setaccessible"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionMethod::setAccessible"
title: "设置方法是否可访问"
signature: "#[\\Deprecated] public void ReflectionMethod::setAccessible(bool $accessible)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionmethod.setaccessible.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置方法是否可访问

## 说明

```php
#[\Deprecated] public void ReflectionMethod::setAccessible(bool $accessible)
```

通过 `ReflectionMethod::invoke()` 方法启用对 protected 或 private 方法的调用。

> 自 PHP 8.1.0 起，调用此方法无效；默认情况下，所有方法都可调用。

## 参数

- **`$accessible`** — 可以访问设置 `true`，否则设置 `false`。

## 返回值

没有返回值。

## 示例

**简单类定义**

```php


<?php
class MyClass
{
    private function foo()
    {
        return 'bar';
    }
}

$method = new ReflectionMethod("MyClass", "foo");
$method->setAccessible(true);

$obj = new MyClass();
echo $method->invoke($obj);
echo $obj->foo();
?>

   
```

以上示例的输出类似于：

```text


bar
Fatal error: Uncaught Error: Call to private method MyClass::foo() from global scope in /in/qdaZS:16

   
```

## 参见

`ReflectionMethod::isPrivate()` `ReflectionMethod::isProtected()`
