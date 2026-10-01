---
id: "zh-php-function-function-empty"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "empty"
title: "检查变量是否为空"
signature: "bool empty(mixed $var)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.empty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查变量是否为空

## 说明

```php
bool empty(mixed $var)
```

判断变量是否为空。如果变量不存在或其值等于 `false`，则认为变量为空。`empty()` 不会在变量不存在时产生警告。

## 参数

- **`$var`** — 待检查的变量 — 变量不存在时不会产生警告。这意味着 `empty()` 本质上等同于 !isset($var) || $var == false。这也适用于嵌套结构，例如多维数组或链式属性。

## 返回值

当 `$var` 不存在、值为空、等于 0、为 false 时，返回 `true`，参阅 转换为 boolean。否则返回 `false`。

## 示例

**简单的 `empty()` 与 `isset()` 的比较。**

```php


<?php
$var = 0;

// 因为 $var 为空，所以计算结果为 true
if (empty($var)) {
    echo '$var is either 0, empty, or not set at all';
}

// 因为 $var 已赋值，所以计算结果为 true
if (isset($var)) {
    echo '$var is set even though it is empty';
}
?>

    
```

**在字符串偏移量上使用 `empty()`**

```php


<?php
$expected_array_got_string = 'somestring';
var_dump(empty($expected_array_got_string['some_key']));
var_dump(empty($expected_array_got_string[0]));
var_dump(empty($expected_array_got_string['0']));
var_dump(empty($expected_array_got_string['0.5']));
var_dump(empty($expected_array_got_string['0 Mostel']));
?>

   
```

以上示例会输出：

```text


bool(true)
bool(false)
bool(false)
bool(true)
bool(true)

   
```

**多维数组上使用 `empty()`**

```php


<?php
$multidimensional = [
    'some' => [
        'deep' => [
            'nested' => 'value'
        ]
    ]
];

if (!empty($multidimensional['some']['some']['nested'])) {
    $someVariable = $multidimensional['some']['deep']['nested'];
}

var_dump(empty($multidimensional['some-undefined-key']));
var_dump(empty($multidimensional['some']['deep']['unknown']));
var_dump(empty($multidimensional['some']['deep']['nested']));
?>

   
```

以上示例会输出：

```text


bool(true)
bool(true)
bool(false)

   
```

## 注释

> 因为是语言构造器而不是函数，不能被 可变函数 或者 命名参数 调用。

> 当对一个不可见的对象属性使用 `empty()` 时，如果存在 __isset() 方法，它将会被调用。

## 参见

`isset()` __isset() `unset()` `array_key_exists()` `count()` `strlen()` 类型比较表
