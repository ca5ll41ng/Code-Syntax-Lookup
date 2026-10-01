---
id: "zh-php-function-reflectionmethod-getmodifiers"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionMethod::getModifiers"
title: "获取方法的修饰符"
signature: "public int ReflectionMethod::getModifiers()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionmethod.getmodifiers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取方法的修饰符

## 说明

```php
public int ReflectionMethod::getModifiers()
```

返回一个方法的修饰符，返回值是一个位标。

## 参数

此函数没有参数。

## 返回值

使用数字表示方法修饰符。这些修饰符的实际含义可以参考预定义常量中的说明。

## 示例

**`ReflectionMethod::getModifiers()` 示例**

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
?>

    
```

以上示例的输出类似于：

```text


Modifiers for method foo():
49
final public static
Modifiers for method bar():
1
public

    
```

## 参见

`Reflection::getModifierNames()`
