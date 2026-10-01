---
id: "zh-php-function-reflectionclass-getproperties"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getProperties"
title: "获取属性"
signature: "public array ReflectionClass::getProperties(int|null $filter = null)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getproperties.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取属性

## 说明

```php
public array ReflectionClass::getProperties(int|null $filter = null)
```

获取反射过的属性。

## 参数

- **`$filter`** — 可选的过滤器，过滤为所需类型的属性。它使用 ReflectionProperty 常量 来配置，默认获取所有类型的属性。

## 返回值

`ReflectionProperty` 对象的数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | `$filter` 现在允许为 null。 |

## 示例

**`ReflectionClass::getProperties()` 过滤示例**

这个示例延时了可选 `$filter` 参数的用法，示例里实际上忽略了私有属性。

```php


<?php
class Foo {
    public    $foo  = 1;
    protected $bar  = 2;
    private   $baz  = 3;
}

$foo = new Foo();

$reflect = new ReflectionClass($foo);
$props   = $reflect->getProperties(ReflectionProperty::IS_PUBLIC | ReflectionProperty::IS_PROTECTED);

foreach ($props as $prop) {
    print $prop->getName() . "\n";
}

var_dump($props);

?>

   
```

以上示例的输出类似于：

```text


foo
bar
array(2) {
  [0]=>
  object(ReflectionProperty)#3 (2) {
    ["name"]=>
    string(3) "foo"
    ["class"]=>
    string(3) "Foo"
  }
  [1]=>
  object(ReflectionProperty)#4 (2) {
    ["name"]=>
    string(3) "bar"
    ["class"]=>
    string(3) "Foo"
  }
}

   
```

## 参见

`ReflectionClass::getProperty()` `ReflectionProperty` ReflectionProperty 修饰符常量
