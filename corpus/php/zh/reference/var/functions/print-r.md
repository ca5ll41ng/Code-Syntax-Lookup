---
id: "zh-php-function-function-print-r"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["xss"],"cwe":["CWE-79"],"params":[1]}
name: "print_r"
title: "打印人类可读的变量信息"
signature: "string|true print_r(mixed $value, bool $return = false)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.print-r.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打印人类可读的变量信息

## 说明

```php
string|true print_r(mixed $value, bool $return = false)
```

`print_r()` 以人类可读的方式显示变量的信息。

`print_r()`、`var_dump()`、`var_export()` 还将显示对象的 protected 和 private 属性。不会显示静态类成员。

## 参数

- **`$value`** — 要打印的表达式。
- **`$return`** — 想要捕获 `print_r()` 的输出，请使用 `$return` 参数。当此参数为 `true`，`print_r()` 将返回信息，而不是打印它。

## 返回值

如果是指定 `string`、`int` 或 `float`，会直接打印值本身。如果是指定 `array`，值将以键和元素的格式显示。`object` 也一样。

当 `$return` 参数设置成 `true`，本函数会返回 `string`。否则返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 返回类型从 `string\|bool` 变为 `string\|true`。 |

## 示例

**`print_r()` 示例**

```php


<pre>
<?php
$a = array ('a' => 'apple', 'b' => 'banana', 'c' => array ('x', 'y', 'z'));
print_r($a);
?>
</pre>

    
```

以上示例会输出：

```text


<pre>
Array
(
    [a] => apple
    [b] => banana
    [c] => Array
        (
            [0] => x
            [1] => y
            [2] => z
        )
)
</pre>

    
```

**`$return` 参数的例子**

```php


<?php
$b = array ('m' => 'monkey', 'foo' => 'bar', 'x' => array ('x', 'y', 'z'));
$results = print_r($b, true); // $results 包含了 print_r 的输出

print_r($results);
?>

    
```

## 注释

> When the `$return` parameter is used, this function uses internal output buffering prior to PHP 7.1.0, so it cannot be used inside an `ob_start()` callback function.

## 参见

`ob_start()` `var_dump()` `var_export()`
