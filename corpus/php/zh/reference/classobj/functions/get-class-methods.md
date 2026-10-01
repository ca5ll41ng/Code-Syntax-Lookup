---
id: "zh-php-function-function-get-class-methods"
language: "php"
lang: "zh"
category: "function"
name: "get_class_methods"
title: "返回由类的方法名组成的数组"
signature: "array get_class_methods(object|string $object_or_class)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.get-class-methods.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回由类的方法名组成的数组

## 说明

```php
array get_class_methods(object|string $object_or_class)
```

获取类的方法名称列表。

## 参数

- **`$object_or_class`** — 类名或者对象实例。

## 返回值

返回由 `$object_or_class` 指定的类中定义的方法名所组成的数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$object_or_class` 参数现在只接受对象或者有效的类名。 |

## 示例

**`get_class_methods()` 示例**

```php


<?php

class myclass {
    // 构造方法
    function __construct()
    {
        return(true);
    }

    // 方法 1
    function myfunc1()
    {
        return(true);
    }

    // 方法 2
    function myfunc2()
    {
        return(true);
    }
}

$class_methods = get_class_methods('myclass');
// 或者
$class_methods = get_class_methods(new myclass());

foreach ($class_methods as $method_name) {
    echo "$method_name\n";
}

?>

    
```

以上示例会输出：

```text


__construct
myfunc1
myfunc2

    
```

## 参见

`get_class()` `get_class_vars()` `get_object_vars()`
