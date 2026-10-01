---
id: "zh-php-function-reflectionclass-getattributes"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getAttributes"
title: "获取所有属性"
signature: "public array ReflectionClass::getAttributes(string|null $name = null, int $flags = 0)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getattributes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取所有属性

## 说明

```php
public array ReflectionClass::getAttributes(string|null $name = null, int $flags = 0)
```

返回类中声明的所有属性，类型是由 `ReflectionAttribute` 组成的 array。

## 参数

- **`$name`** — 过滤结果，匹配此类名，仅包含 `ReflectionAttribute` 实例的属性。
- **`$flags`** — 如果提供了 `$name`，则用于确定如何过滤结果的 flag。 — 默认值为 `0`，这将导致返回的结果只属于类 `$name` 的属性。 — 唯一可用的其他选项是使用 `ReflectionAttribute::IS_INSTANCEOF`，它将改为使用 `instanceof` 进行过滤。

## 返回值

由 `ReflectionAttribute` 对象组成的属性数组。

## 示例

**基础用法**

```php


<?php
#[Attribute]
class Fruit {
}

#[Attribute]
class Red {
}

#[Fruit]
#[Red]
class Apple {
}

$class = new ReflectionClass('Apple');
$attributes = $class->getAttributes();
print_r(array_map(fn($attribute) => $attribute->getName(), $attributes));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => Fruit
    [1] => Red
)

    
```

**通过类名过滤结果**

```php


<?php
#[Attribute]
class Fruit {
}

#[Attribute]
class Red {
}

#[Fruit]
#[Red]
class Apple {
}

$class = new ReflectionClass('Apple');
$attributes = $class->getAttributes('Fruit');
print_r(array_map(fn($attribute) => $attribute->getName(), $attributes));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => Fruit
)

    
```

**通过类名和继承过滤结果**

```php


<?php
interface Color {
}

#[Attribute]
class Fruit {
}

#[Attribute]
class Red implements Color {
}

#[Fruit]
#[Red]
class Apple {
}

$class = new ReflectionClass('Apple');
$attributes = $class->getAttributes(Color::class, ReflectionAttribute::IS_INSTANCEOF);
print_r(array_map(fn($attribute) => $attribute->getName(), $attributes));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => Red
)

    
```

## 参见

`ReflectionClassConstant::getAttributes()` `ReflectionFunctionAbstract::getAttributes()` `ReflectionParameter::getAttributes()` `ReflectionProperty::getAttributes()`
