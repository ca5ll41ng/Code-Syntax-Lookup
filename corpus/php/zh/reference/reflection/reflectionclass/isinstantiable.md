---
id: "zh-php-function-reflectionclass-isinstantiable"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::isInstantiable"
title: "检查类是否可实例化"
signature: "public bool ReflectionClass::isInstantiable()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.isinstantiable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查类是否可实例化

## 说明

```php
public bool ReflectionClass::isInstantiable()
```

检查这个类是否可实例化。

## 参数

此函数没有参数。

## 返回值

如果类可以实例化，则返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::isInstantiable()` 示例**

```php


<?php
class C { }

interface iface {
    function f1();
}

class ifaceImpl implements iface {
    function f1() {}
}

abstract class abstractClass {
    function f1() { }
    abstract function f2();
}

class D extends abstractClass {
    function f2() { }
}

trait T {
    function f1() {}
}

class privateConstructor {
    private function __construct() { }
}

$classes = array(
    "C",
    "iface",
    "ifaceImpl",
    "abstractClass",
    "D",
    "T",
    "privateConstructor",
);

foreach($classes  as $class ) {
    $reflectionClass = new ReflectionClass($class);
    echo "Is $class instantiable?  ";
    var_dump($reflectionClass->isInstantiable()); 
}

?>

    
```

以上示例会输出：

```text


Is C instantiable?  bool(true)
Is iface instantiable?  bool(false)
Is ifaceImpl instantiable?  bool(true)
Is abstractClass instantiable?  bool(false)
Is D instantiable?  bool(true)
Is T instantiable?  bool(false)
Is privateConstructor instantiable?  bool(false)

    
```

## 参见

`ReflectionClass::isInstance()`
