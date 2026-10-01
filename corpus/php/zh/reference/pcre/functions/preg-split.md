---
id: "zh-php-function-function-preg-split"
language: "php"
lang: "zh"
category: "function"
name: "preg_split"
title: "通过一个正则表达式分隔字符串"
signature: "array|false preg_split(string $pattern, string $subject, int $limit = -1, int $flags = 0)"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-split.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过一个正则表达式分隔字符串

## 说明

```php
array|false preg_split(string $pattern, string $subject, int $limit = -1, int $flags = 0)
```

通过一个正则表达式分隔给定字符串.

## 参数

- **`$pattern`** — 用于搜索的模式，字符串形式。
- **`$subject`** — 输入字符串
- **`$limit`** — 如果指定，将限制分隔得到的子串最多只有`$limit`个，返回的最后一个 子串将包含所有剩余部分。`$limit`值为-1， 0或null时都代表"不限制"。
- **`$flags`** — `$flags`可以是任何下面标记的组合(以位或运算 `|` 组合)： - **`PREG_SPLIT_NO_EMPTY`** — 如果这个标记被设置， `preg_split()` 将仅返回分隔后的非空部分。 - **`PREG_SPLIT_DELIM_CAPTURE`** — 如果这个标记设置了，用于分隔的模式中的括号表达式将被捕获并返回。 - **`PREG_SPLIT_OFFSET_CAPTURE`** — 如果这个标记被设置, 对于每一个出现的匹配返回时将会附加字符串偏移量. 注意：这将会改变返回数组中的每一个元素, 使其每个元素成为一个由第`0` 个元素为分隔后的子串，第`1`个元素为该子串在`$subject` 中的偏移量组成的数组。

## 返回值

返回一个使用 `$pattern` 边界分隔 `$subject` 后得到 的子串组成的数组， 或者在失败时返回 `false`。

## 错误／异常

如果传递的正则表达式无法正常解析，会发出 `E_WARNING`。

## 示例

**`preg_split()`示例：获取搜索字符串的部分**

```php


<?php
//使用逗号或空格(包含" ", \r, \t, \n, \f)分隔短语
$keywords = preg_split("/[\s,]+/", "hypertext language, programming");
print_r($keywords);
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => hypertext
    [1] => language
    [2] => programming
)

    
```

**将一个字符串分隔为组成它的字符**

```php


<?php
$str = 'string';
$chars = preg_split('//', $str, -1, PREG_SPLIT_NO_EMPTY);
print_r($chars);
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => s
    [1] => t
    [2] => r
    [3] => i
    [4] => n
    [5] => g
)

    
```

**分隔一个字符串并获取每部分的偏移量**

```php


<?php
$str = 'hypertext language programming';
$chars = preg_split('/ /', $str, -1, PREG_SPLIT_OFFSET_CAPTURE);
print_r($chars);
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => Array
        (
            [0] => hypertext
            [1] => 0
        )

    [1] => Array
        (
            [0] => language
            [1] => 10
        )

    [2] => Array
        (
            [0] => programming
            [1] => 19
        )

)

    
```

## 注释

> 如果你不需要正则表达式功能，可以有更快(并且更简单)的选择比如 `explode()` 或 `str_split()`。

> 如果没有成功匹配，将会返回一个数组，包含了单个元素，即输入的字符串。

## 参见

PCRE 模式 `preg_quote()` `explode()` `preg_match()` `preg_match_all()` `preg_replace()` `preg_last_error()`
