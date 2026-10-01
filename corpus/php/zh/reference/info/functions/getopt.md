---
id: "zh-php-function-function-getopt"
language: "php"
lang: "zh"
category: "function"
name: "getopt"
title: "从命令行参数列表中获取选项"
signature: "array|false getopt(string $short_options, array $long_options = [], int $rest_index = null)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.getopt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从命令行参数列表中获取选项

## 说明

```php
array|false getopt(string $short_options, array $long_options = [], int $rest_index = null)
```

解析传入脚本的选项。

## 参数

- **`$short_options`** — 该字符串中的每个字符会被当做选项字符，匹配传入脚本的选项以单个连字符 (`-`) 开头。 — 比如，一个选项字符串 `"x"` 识别了一个选项 `-x`。 — 只允许 a-z、A-Z 和 0-9。
- **`$long_options`** — 选项数组。此数组中的每个元素会被作为选项字符串，匹配了以两个连字符 (`--`) 传入到脚本的选项。 — 例如，长选项元素 `"opt"` 识别了一个选项 `--opt`。
- **`$rest_index`** — 如果传递了 `$rest_index` 参数，那么参数解析停止时的索引，将被赋值给此变量。

`$short_options` 可能包含了以下元素： 单独的字符（不接受值） 后面跟随冒号的字符（此选项需要值） 后面跟随两个冒号的字符（此选项的值可选） 选项的值是字符串后的第一个参数。如果需要一个值，它不介意值之前是否有前置的空格，参见以下内容。

> 选项的值不接受空格（`" "`）作为分隔符。

`$long_options` 数组可能包含了以下元素： 字符串（参数不接受任何值） 后面跟随冒号的字符串（此选项需要值） 后面跟随两个冒号的字符串（此选项的值可选）

> `$short_options` 和 `$long_options` 的格式几乎是一样的，唯一的不同之处是 `$long_options` 需要是选项的数组（每个元素为一个选项），而 `$short_options` 需要一个字符串（每个字符是个选项）。

## 返回值

此函数会返回选项/参数对， 或者在失败时返回 `false`。

> 选项的解析会终止于找到的第一个非选项，之后的任何东西都会被丢弃。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 添加 `$rest_index` 参数。 |

## 示例

**`getopt()` 示例：基本用法**

```php


<?php
// Script example.php
$options = getopt("f:hp:");
var_dump($options);
?>

    
```

```shell


shell> php example.php -fvalue -h

    
```

以上示例会输出：

```text


array(2) {
  ["f"]=>
  string(5) "value"
  ["h"]=>
  bool(false)
}

    
```

**`getopt()` 示例：引入长选项**

```php


<?php
// Script example.php
$shortopts  = "";
$shortopts .= "f:";  // Required value
$shortopts .= "v::"; // Optional value
$shortopts .= "abc"; // These options do not accept values

$longopts  = array(
    "required:",     // Required value
    "optional::",    // Optional value
    "option",        // No value
    "opt",           // No value
);
$options = getopt($shortopts, $longopts);
var_dump($options);
?>

    
```

```shell


shell> php example.php -f "value for f" -v -a --required value --optional="optional value" --option

    
```

以上示例会输出：

```text


array(6) {
  ["f"]=>
  string(11) "value for f"
  ["v"]=>
  bool(false)
  ["a"]=>
  bool(false)
  ["required"]=>
  string(5) "value"
  ["optional"]=>
  string(14) "optional value"
  ["option"]=>
  bool(false)
}

    
```

**`getopt()` 示例：传递同一多个选项**

```php


<?php
// Script example.php
$options = getopt("abc");
var_dump($options);
?>

    
```

```shell


shell> php example.php -aaac

    
```

以上示例会输出：

```text


array(2) {
  ["a"]=>
  array(3) {
    [0]=>
    bool(false)
    [1]=>
    bool(false)
    [2]=>
    bool(false)
  }
  ["c"]=>
  bool(false)
}

    
```

**`getopt()` 示例：使用 `$rest_index`**

```php


<?php
// Script example.php
$rest_index = null;
$opts = getopt('a:b:', [], $rest_index);
$pos_args = array_slice($argv, $rest_index);
var_dump($pos_args);

    
```

```shell


shell> php example.php -a 1 -b 2 -- test

    
```

以上示例会输出：

```text


array(1) {
  [0]=>
  string(4) "test"
}

    
```

## 参见

`$argv`
