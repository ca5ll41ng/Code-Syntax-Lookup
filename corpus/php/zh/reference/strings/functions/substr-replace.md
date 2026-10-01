---
id: "zh-php-function-function-substr-replace"
language: "php"
lang: "zh"
category: "function"
name: "substr_replace"
title: "替换字符串的子串"
signature: "string|array substr_replace(array|string $string, array|string $replace, array|int $offset, array|int|null $length = null)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.substr-replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 替换字符串的子串

## 说明

```php
string|array substr_replace(array|string $string, array|string $replace, array|int $offset, array|int|null $length = null)
```

`substr_replace()` 在字符串 `$string` 的副本中将由 `$offset` 和可选的 `$length` 参数限定的子字符串使用 `$replace` 进行替换。

## 参数

- **`$string`** — 输入字符串。 — 可以提供 `array` 类型的 `string`，会依次替换出现的字符串。在这种情况下，`$replace`、`$offset` 和 `$length` 参数可以作为标量值依次提供给每个输入字符串，或者作为 `array` 提供，然后数组元素将会相应的用于每个输入字符串。
- **`$replace`** — 替换字符串。
- **`$offset`** — 如果 `$offset` 为非负数，替换将从 `$string` 的 `$offset` 位置开始。 — 如果 `$offset` 为负数，替换将从 `$string` 的倒数第 `$offset` 个位置开始。
- **`$length`** — 如果设定了这个参数并且为正数，表示 `$string` 中被替换的子字符串的长度。如果设定为负数，它表示待替换的子字符串结尾处距离 `$string` 末端的字符个数。如果没有提供此参数，那么它默认为 strlen( `$string` )（字符串的长度）。当然，如果 `$length` 为 0，那么这个函数的功能为将 `$replace` 插入到 `$string` 的 `$offset` 位置处。

## 返回值

返回结果字符串。如果 `$string` 是个数组，那么也将返回一个数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$length` 现在允许为 null。 |

## 示例

**`substr_replace()` 示例**

```php


<?php
$var = 'ABCDEFGH:/MNRPQR/';
echo "Original: $var<hr />\n";

/* 这两个例子使用 “bob” 替换整个 $var。*/
echo substr_replace($var, 'bob', 0) . "<br />\n";
echo substr_replace($var, 'bob', 0, strlen($var)) . "<br />\n";

/* 将 “bob” 插入到 $var 的开头处。*/
echo substr_replace($var, 'bob', 0, 0) . "<br />\n";

/* 下面两个例子使用 “bob” 替换 $var 中的 “MNRPQR”。*/
echo substr_replace($var, 'bob', 10, -1) . "<br />\n";
echo substr_replace($var, 'bob', -7, -1) . "<br />\n";

/* 从 $var 中删除 “MNRPQR”。*/
echo substr_replace($var, '', 10, -1) . "<br />\n";
?>

    
```

**一次性使用 `substr_replace()` 替换多个字符串**

```php


<?php
$input = array('A: XXX', 'B: XXX', 'C: XXX');

// 简单用例：将每个字符串使用 YYY 替换为 XXX。
echo implode('; ', substr_replace($input, 'YYY', 3, 3))."\n";

// 更复杂的情况，每种替换都不同。
$replace = array('AAA', 'BBB', 'CCC');
echo implode('; ', substr_replace($input, $replace, 3, 3))."\n";

// 每次替换的字符数不同。
$length = array(1, 2, 3);
echo implode('; ', substr_replace($input, $replace, 3, $length))."\n";
?>

    
```

以上示例会输出：

```text


A: YYY; B: YYY; C: YYY
A: AAA; B: BBB; C: CCC
A: AAAXX; B: BBBX; C: CCC

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`str_replace()` `substr()` 字符串访问与修改
