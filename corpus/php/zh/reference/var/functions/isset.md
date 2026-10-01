---
id: "zh-php-function-function-isset"
language: "php"
lang: "zh"
category: "function"
name: "isset"
title: "检测变量是否已声明并且其值不为 `null`"
signature: "bool isset(mixed $var, mixed $vars)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.isset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测变量是否已声明并且其值不为 `null`

## 说明

```php
bool isset(mixed $var, mixed $vars)
```

判断一个变量是否已设置, 即变量已被声明，且其值不为 `null`。

如果一个变量已经被使用 `unset()` 释放，它将不再被认为已设置。

若使用 `isset()` 测试一个被赋值为 `null` 的变量，将返回 `false`。 同时要注意的是 null 字符（`"\0"`）并不等同于 PHP 的 `null` 常量。

如果一次传入多个参数，那么 `isset()` 只有在全部参数都已被设置时返回 `true`。 计算过程从左至右，中途遇到未设置的变量时就会立即停止。

## 参数

- **`$var`** — 要检查的变量。
- **`$vars`** — 其他变量。

## 返回值

如果 `$var` 存在并且值不是 `null` 则返回 `true`，否则返回 `false`。

## 示例

**`isset()` 例子**

```php


<?php

$var = '';

// 结果为 TRUE，所以后边的文本将被打印出来。
if (isset($var)) {
    echo "This var is set so I will print.", PHP_EOL;
}

// 在后边的例子中，我们将使用 var_dump 输出 isset() 的返回值。
// the return value of isset().

$a = "test";
$b = "anothertest";

var_dump(isset($a));      // TRUE
var_dump(isset($a, $b)); // TRUE

unset ($a);

var_dump(isset($a));     // FALSE
var_dump(isset($a, $b)); // FALSE

$foo = NULL;
var_dump(isset($foo));   // FALSE

?>

    
```

这对于数组中的元素也同样有效：

**`isset()` 对于数组元素的示例**

```php


<?php

$a = array ('test' => 1, 'hello' => NULL, 'pie' => array('a' => 'apple'));

var_dump(isset($a['test']));            // TRUE
var_dump(isset($a['foo']));             // FALSE
var_dump(isset($a['hello']));           // FALSE

// 键 'hello' 的值等于 NULL，所以被认为是未置值的。
// 如果想检测 NULL 键值，可以试试下边的方法。 
var_dump(array_key_exists('hello', $a)); // TRUE

// Checking deeper array values
var_dump(isset($a['pie']['a']));        // TRUE
var_dump(isset($a['pie']['b']));        // FALSE
var_dump(isset($a['cake']['a']['b']));  // FALSE

?>

    
```

**在字符串位移中使用 `isset()`**

```php


<?php
$expected_array_got_string = 'somestring';
var_dump(isset($expected_array_got_string['some_key']));
var_dump(isset($expected_array_got_string[0]));
var_dump(isset($expected_array_got_string['0']));
var_dump(isset($expected_array_got_string[0.5]));
var_dump(isset($expected_array_got_string['0.5']));
var_dump(isset($expected_array_got_string['0 Mostel']));
?>

   
```

以上示例会输出：

```text


bool(false)
bool(true)
bool(true)
bool(true)
bool(false)
bool(false)

   
```

## 注释

> `isset()` 只能用于变量，因为传递任何其它参数都将造成解析错误。若想检测常量是否已设置，可使用 `defined()` 函数。

> 因为是语言构造器而不是函数，不能被 可变函数 或者 命名参数 调用。

> 如果使用 `isset()` 来检查对象无法访问的属性，如果 __isset() 方法已经定义则会调用这个重载方法。

## 参见

`empty()` __isset() `unset()` `defined()` the type comparison tables `array_key_exists()` `is_null()` 错误控制 @ 运算符。
