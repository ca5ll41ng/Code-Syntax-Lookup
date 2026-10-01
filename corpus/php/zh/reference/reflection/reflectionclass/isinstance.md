---
id: "zh-php-function-reflectionclass-isinstance"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::isInstance"
title: "检查类的实例"
signature: "public bool ReflectionClass::isInstance(object $object)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.isinstance.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查类的实例

## 说明

```php
public bool ReflectionClass::isInstance(object $object)
```

检查对象是否为一个类的实例。

## 参数

- **`$object`** — 待比较的对象。

## 返回值

如果对象是该类的实例，则返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::isInstance()` 相关示例**

```php


<?php

class Foo {}

$object = new Foo();

$reflection = new ReflectionClass('Foo');

if ($reflection->isInstance($object)) {
    echo "Yes\n";
}

// Equivalent to
if ($object instanceof Foo) {
    echo "Yes\n";
}

// Equivalent to
if (is_a($object, 'Foo')) {
    echo "Yes";
}
?>

    
```

以上示例的输出类似于：

```text


Yes
Yes
Yes

    
```

## 参见

`ReflectionClass::isInterface()` 类型运算符（instanceof） 对象接口 `is_a()`
