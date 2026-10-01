---
id: "zh-php-function-function-get-parent-class"
language: "php"
lang: "zh"
category: "function"
name: "get_parent_class"
title: "检索对象或者类的父级类名"
signature: "string|false get_parent_class([object|string $object_or_class = ...])"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.get-parent-class.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索对象或者类的父级类名

## 说明

```php
string|false get_parent_class([object|string $object_or_class = ...])
```

检索对象或者类的父级类名。

## 参数

- **`$object_or_class`** — 检查的对象或者类名。

## 返回值

返回 `$object_or_class` 是类名或者类实例的父类名称。

如果对象没有父类或者指定的类名不存在，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 不带参数调用 `get_parent_class()` 现在会发出 `E_DEPRECATED` warning；之前，在类内部调用此函数会返回该类的名称。 |
| 8.0.0 | `$object_or_class` 参数现在仅接受对象或者有效的类名。 |

## 示例

**使用 `get_parent_class()`**

```php


<?php

class Dad {
    function __construct()
    {
    // 实现一些逻辑
    }
}

class Child extends Dad {
    function __construct()
    {
        echo "I'm " , get_parent_class($this) , "'s son\n";
    }
}

class Child2 extends Dad {
    function __construct()
    {
        echo "I'm " , get_parent_class('child2') , "'s son too\n";
    }
}

$foo = new child();
$bar = new child2();

?>

    
```

以上示例会输出：

```text


I'm Dad's son
I'm Dad's son too

    
```

## 参见

`get_class()` `is_subclass_of()` `class_parents()`
