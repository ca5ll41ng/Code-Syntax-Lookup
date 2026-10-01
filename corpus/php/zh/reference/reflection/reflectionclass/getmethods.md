---
id: "zh-php-function-reflectionclass-getmethods"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getMethods"
title: "获取方法的数组"
signature: "public array ReflectionClass::getMethods(int|null $filter = null)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getmethods.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取方法的数组

## 说明

```php
public array ReflectionClass::getMethods(int|null $filter = null)
```

获取类的方法的数组。

## 参数

- **`$filter`** — 过滤结果为仅包含某些属性的方法。默认不过滤。 — `ReflectionMethod::IS_STATIC`、 `ReflectionMethod::IS_PUBLIC`、 `ReflectionMethod::IS_PROTECTED`、 `ReflectionMethod::IS_PRIVATE`、 `ReflectionMethod::IS_ABSTRACT`、 `ReflectionMethod::IS_FINAL` 的按位或（OR），就会返回*任意*满足条件的属性。
  > 请注意：其他位操作，例如 `~` 无法按预期运行。这个示例也就是说，无法获取所有的非静态方法。



## 返回值

包含每个方法 `ReflectionMethod` 对象的`数组`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | `$filter` 现在允许为 null。 |

## 示例

**`ReflectionClass::getMethods()` 的基本用法**

```php


<?php
class Apple {
    public function firstMethod() { }
    final protected function secondMethod() { }
    private static function thirdMethod() { }
}

$class = new ReflectionClass('Apple');
$methods = $class->getMethods();
var_dump($methods);
?>

    
```

以上示例会输出：

```text


array(3) {
  [0]=>
  object(ReflectionMethod)#2 (2) {
    ["name"]=>
    string(11) "firstMethod"
    ["class"]=>
    string(5) "Apple"
  }
  [1]=>
  object(ReflectionMethod)#3 (2) {
    ["name"]=>
    string(12) "secondMethod"
    ["class"]=>
    string(5) "Apple"
  }
  [2]=>
  object(ReflectionMethod)#4 (2) {
    ["name"]=>
    string(11) "thirdMethod"
    ["class"]=>
    string(5) "Apple"
  }
}

    
```

**从 `ReflectionClass::getMethods()` 中过滤结果**

```php


<?php
class Apple {
    public function firstMethod() { }
    final protected function secondMethod() { }
    private static function thirdMethod() { }
}

$class = new ReflectionClass('Apple');
$methods = $class->getMethods(ReflectionMethod::IS_STATIC | ReflectionMethod::IS_FINAL);
var_dump($methods);
?>

    
```

以上示例会输出：

```text


array(2) {
  [0]=>
  object(ReflectionMethod)#2 (2) {
    ["name"]=>
    string(12) "secondMethod"
    ["class"]=>
    string(5) "Apple"
  }
  [1]=>
  object(ReflectionMethod)#3 (2) {
    ["name"]=>
    string(11) "thirdMethod"
    ["class"]=>
    string(5) "Apple"
  }
}

    
```

## 参见

`ReflectionClass::getMethod()` `get_class_methods()`
