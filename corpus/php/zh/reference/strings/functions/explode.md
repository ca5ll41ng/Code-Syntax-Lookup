---
id: "zh-php-function-function-explode"
language: "php"
lang: "zh"
category: "function"
name: "explode"
title: "使用一个字符串分割另一个字符串"
signature: "array explode(string $separator, string $string, int $limit = PHP_INT_MAX)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.explode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用一个字符串分割另一个字符串

## 说明

```php
array explode(string $separator, string $string, int $limit = PHP_INT_MAX)
```

此函数返回由字符串组成的数组，每个元素都是 `$string` 的一个子串，它们被字符串 `$separator` 作为边界点分割出来。

## 参数

- **`$separator`** — 边界上的分隔字符。
- **`$string`** — 输入的字符串。
- **`$limit`** — 如果设置了 `$limit` 参数并且是正数，则返回的数组包含最多 `$limit` 个元素，而最后那个元素将包含 `$string` 的剩余部分。 — 如果 `$limit` 参数是负数，则返回除了最后的 -`$limit` 个元素外的所有元素。 — 如果 `$limit` 是 0，则会被当做 1。

> 在 PHP 8.0 之前，`implode()` 可以接收两种参数顺序。 但请注意，`explode()` 从未支持乱序传入参数：你必须保证 `$separator` 参数在 `$string` 参数之前。

## 返回值

此函数返回由字符串组成的 `array`，每个元素都是 `$string` 的一个子串，它们被字符串 `$separator` 作为边界点分割出来。

如果 `$separator` 为空字符串（""），`explode()` 将抛出 `ValueError`。 如果 `$separator` 所包含的值在 `$string` 中找不到，并且使用了负数的 `$limit` ， 那么会返回空的 `array`， 否则返回包含 `$string` 单个元素的数组。 如果 `$separator` 值出现在了 `$string` 参数的开头或末尾， 将在返回 `array` 相应的头部或尾部添加 `array` 空值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在开始，当 `$separator` 参数传入空字符串时（`""`）， `explode()` 会抛出 `ValueError`。 在早期版本中，`explode()` 会返回 `false`。 |

## 示例

**`explode()` 例子**

```php


<?php
// 示例 1
$pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
$pieces = explode(" ", $pizza);
echo $pieces[0], PHP_EOL; // piece1
echo $pieces[1], PHP_EOL; // piece2

// 示例 2
$data = "foo:*:1023:1000::/home/foo:/bin/sh";
list($user, $pass, $uid, $gid, $gecos, $home, $shell) = explode(":", $data);
echo $user, PHP_EOL; // foo
echo $pass, PHP_EOL; // *

?>

    
```

**`explode()` return examples**

```php


<?php
/*
  字符串内不包含分隔字符时，
  会简单返回只有一个原始字符串元素的 array。
*/
$input1 = "hello";
$input2 = "hello,there";
$input3 = ',';
var_dump( explode( ',', $input1 ) );
var_dump( explode( ',', $input2 ) );
var_dump( explode( ',', $input3 ) );

?>

    
```

以上示例会输出：

```text


array(1)
(
    [0] => string(5) "hello"
)
array(2)
(
    [0] => string(5) "hello"
    [1] => string(5) "there"
)
array(2)
(
    [0] => string(0) ""
    [1] => string(0) ""
)

    
```

**`$limit` 参数的例子**

```php


<?php
$str = 'one|two|three|four';

// 正数的 limit
print_r(explode('|', $str, 2));

// 负数的 limit
print_r(explode('|', $str, -1));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => one
    [1] => two|three|four
)
Array
(
    [0] => one
    [1] => two
    [2] => three
)

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`preg_split()` `str_split()` `mb_split()` `str_word_count()` `strtok()` `implode()`
