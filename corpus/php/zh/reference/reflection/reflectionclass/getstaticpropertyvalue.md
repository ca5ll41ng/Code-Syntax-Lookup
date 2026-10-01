---
id: "zh-php-function-reflectionclass-getstaticpropertyvalue"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getStaticPropertyValue"
title: "获取静态（static）属性的值"
signature: "public mixed ReflectionClass::getStaticPropertyValue(string $name, [mixed $def_value = ...])"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getstaticpropertyvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取静态（static）属性的值

## 说明

```php
public mixed ReflectionClass::getStaticPropertyValue(string $name, [mixed $def_value = ...])
```

获取这个类里静态（static）属性的值。

## 参数

- **`$name`** — 静态属性的名称，来返回它的值。
- **`$def_value`** — 假如类没有定义 `$name` 的 static 属性，将返回一个默认值。 如果属性不存在，并且省略了此参数，将会抛出 `ReflectionException` 。

## 返回值

静态属性的值。

## 示例

**`ReflectionClass::getStaticPropertyValue()` 的基本用法**

```php


<?php
class Apple {
    public static $color = 'Red';
}

$class = new ReflectionClass('Apple');
var_dump($class->getStaticPropertyValue('color'));
?>

    
```

以上示例会输出：

```text


string(3) "Red"

    
```

## 参见

`ReflectionClass::getStaticProperties()` `ReflectionClass::setStaticPropertyValue()`
