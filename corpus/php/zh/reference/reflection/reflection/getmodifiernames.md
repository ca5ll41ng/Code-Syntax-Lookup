---
id: "zh-php-function-reflection-getmodifiernames"
language: "php"
lang: "zh"
category: "function"
name: "Reflection::getModifierNames"
title: "获取修饰符的名称"
signature: "public static array Reflection::getModifierNames(int $modifiers)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflection.getmodifiernames.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取修饰符的名称

## 说明

```php
public static array Reflection::getModifierNames(int $modifiers)
```

获取修饰符的名称。

## 参数

- **`$modifiers`** — 根据标志位域获取修饰符。

## 返回值

修饰符名称的一个数组。

## 示例

**`Reflection::getModifierNames()` 示例**

```php


<?php
class Testing
{
    final public static function foo()
    {
        return;
    }

    public function bar()
    {
        return;
    }
}

$foo = new ReflectionMethod('Testing', 'foo');

echo "Modifiers for method foo():\n";
echo $foo->getModifiers() . "\n";
echo implode(' ', Reflection::getModifierNames($foo->getModifiers())) . "\n";

$bar = new ReflectionMethod('Testing', 'bar');

echo "Modifiers for method bar():\n";
echo $bar->getModifiers() . "\n";
echo implode(' ', Reflection::getModifierNames($bar->getModifiers()));

    
```

以上示例的输出类似于：

```text


Modifiers for method foo():
261
final public static
Modifiers for method bar():
65792
public

    
```

## 参见

`ReflectionClass::getModifiers()` `ReflectionClassConstant::getModifiers()` `ReflectionMethod::getModifiers()` `ReflectionProperty::getModifiers()`
