---
id: "zh-php-function-function-method-exists"
language: "php"
lang: "zh"
category: "function"
name: "method_exists"
title: "检查类的方法是否存在"
signature: "bool method_exists(object|string $object_or_class, string $method)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.method-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查类的方法是否存在

## 说明

```php
bool method_exists(object|string $object_or_class, string $method)
```

检查类的方法是否存在于指定的 `$object_or_class` 中。

## 参数

- **`$object_or_class`** — 对象示例或者类名
- **`$method`** — 方法名

## 返回值

如果 `$method` 所指的方法在 `$object_or_class` 所指的对象类中已定义，则返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 针对继承的私有方法的类检查现在返回 `false`。 |

## 示例

**`method_exists()` 示例**

```php


<?php
$directory = new Directory('.');
var_dump(method_exists($directory,'read'));
?>

    
```

以上示例会输出：

```text


bool(true)

    
```

**静态 `method_exists()` 示例**

```php


<?php
var_dump(method_exists('Directory','read'));
?>

    
```

以上示例会输出：

```text


bool(true)

    
```

## 注释

> 如果此类不是已知类，使用此函数会使用任何已注册的 autoloader。

> `method_exists()` 函数无法检测使用 `__call` 魔术方法访问的方法。

## 参见

`function_exists()` `is_callable()` `class_exists()`
