---
id: "zh-php-function-function-class-alias"
language: "php"
lang: "zh"
category: "function"
name: "class_alias"
title: "为类创建别名"
signature: "bool class_alias(string $class, string $alias, bool $autoload = true)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.class-alias.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为类创建别名

## 说明

```php
bool class_alias(string $class, string $alias, bool $autoload = true)
```

基于用户定义的类 `$class` 创建别名 `$alias`。 这个别名类和原有的类完全相同。

> 自 PHP 8.3.0 起，`class_alias()` 也支持创建 PHP 内部类的别名。

## 参数

- **`$class`** — 原有的类。
- **`$alias`** — 类的别名。
- **`$autoload`** — 如果原始类没有加载，是否使用自动加载。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | `class_alias()` 现在支持创建内部类的别名。 |

## 示例

**`class_alias()` 示例**

```php


<?php

class Foo { }

class_alias('Foo', 'Bar');

$a = new Foo;
$b = new Bar;

// 对象是相同的
var_dump($a == $b, $a === $b);
var_dump($a instanceof $b);

// 类是相同的
var_dump($a instanceof Foo);
var_dump($a instanceof Bar);

var_dump($b instanceof Foo);
var_dump($b instanceof Bar);

?>

    
```

以上示例会输出：

```text


bool(true)
bool(false)
bool(true)
bool(true)
bool(true)
bool(true)
bool(true)

    
```

## 注释

> 类名在 PHP 中不区分大小写，这一点也反映在此函数中。由 `class_alias()` 创建的别名声明为小写。这意味着对于 `MyClass` 类，调用 class_alias('MyClass', 'MyClassAlias') 将声明名为 `myclassalias` 的新的类别名。

## 参见

`get_parent_class()` `is_subclass_of()`
