---
id: "zh-php-function-function-get-declared-classes"
language: "php"
lang: "zh"
category: "function"
name: "get_declared_classes"
title: "返回由已定义类的名字所组成的数组"
signature: "array get_declared_classes()"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.get-declared-classes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回由已定义类的名字所组成的数组

## 说明

```php
array get_declared_classes()
```

返回由当前脚本中已定义类的名字组成的数组。

## 参数

此函数没有参数。

## 返回值

返回由当前脚本中已定义类的名字组成的数组。

> 需要注意的是额外类的出现依赖于你已编译到 PHP 中的库。这意味着你不能使用这些类名定义自己的类。在附录的 预定义类 部分有预定义类的列表。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 之前 `get_declared_classes()` 返回的顺序总是父类在前，子类在后。现在不会这样了。`get_declared_classes()` 的返回值将不再保证顺序。 |

## 示例

**`get_declared_classes()` 示例**

```php


<?php
print_r(get_declared_classes());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => stdClass
    [1] => __PHP_Incomplete_Class
    [2] => Directory
)

    
```

## 参见

`class_exists()` `get_declared_interfaces()` `get_defined_functions()`
