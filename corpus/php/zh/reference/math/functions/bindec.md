---
id: "zh-php-function-function-bindec"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "bindec"
title: "二进制转换为十进制"
signature: "int|float bindec(string $binary_string)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.bindec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 二进制转换为十进制

## 说明

```php
int|float bindec(string $binary_string)
```

返回 `$binary_string` 参数所表示的二进制数的十进制等价值。

`bindec()` 将一个二进制数转换成 `int`，或者出于大小的需要，转换为 `float` 类型。

`bindec()` 将所有的 `$binary_string` 值解释为无符号整数。这是由于 `bindec()` 函数将其最高有效位视为数量级而非符号位。

## 参数

- **`$binary_string`** — 要转换的二进制字符串。`$binary_string` 中的任何无效字符都会默认忽略。自 PHP 7.4.0 起，弃用使用任何无效字符。

> 参数必须为字符串。使用其他数据类型会导致不可预知的结果。

## 返回值

`$binary_string` 的十进制数值

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 传递任何无效字符现在将生成弃用通知。但仍会计算结果，就好像无效字符不存在一样。 |

## 示例

**`bindec()` 示例**

```php


<?php
echo bindec('110011') . "\n";
echo bindec('000110011') . "\n";

echo bindec('111');
?>

    
```

以上示例会输出：

```text


51
51
7

    
```

**`bindec()` 将输入解读为无符号整数**

```php


<?php
/*
 * The lesson from this example is in the output
 * rather than the PHP code itself.
 */

$magnitude_lower = pow(2, (PHP_INT_SIZE * 8) - 2);
p($magnitude_lower - 1);
p($magnitude_lower, 'See the rollover?  Watch it next time around...');

p(PHP_INT_MAX, 'PHP_INT_MAX');
p(~PHP_INT_MAX, 'interpreted to be one more than PHP_INT_MAX');

if (PHP_INT_SIZE == 4) {
    $note = 'interpreted to be the largest unsigned integer';
} else {
    $note = 'interpreted to be the largest unsigned integer
              (18446744073709551615) but skewed by float precision';
}
p(-1, $note);


function p($input, $note = '') {
    echo "input:        $input\n";

    $format = '%0' . (PHP_INT_SIZE * 8) . 'b';
    $bin = sprintf($format, $input);
    echo "binary:       $bin\n";

    ini_set('precision', 20);  // For readability on 64 bit boxes.
    $dec = bindec($bin);
    echo 'bindec():     ' . $dec . "\n";

    if ($note) {
        echo "NOTE:         $note\n";
    }

    echo "\n";
}
?>

    
```

以上示例在 32 位机器上的输出:

```text


input:        1073741823
binary:       00111111111111111111111111111111
bindec():     1073741823

input:        1073741824
binary:       01000000000000000000000000000000
bindec():     1073741824
NOTE:         See the rollover?  Watch it next time around...

input:        2147483647
binary:       01111111111111111111111111111111
bindec():     2147483647
NOTE:         PHP_INT_MAX

input:        -2147483648
binary:       10000000000000000000000000000000
bindec():     2147483648
NOTE:         interpreted to be one more than PHP_INT_MAX

input:        -1
binary:       11111111111111111111111111111111
bindec():     4294967295
NOTE:         interpreted to be the largest unsigned integer

    
```

以上示例在 64 位机器上的输出:

```text


input:        4611686018427387903
binary:       0011111111111111111111111111111111111111111111111111111111111111
bindec():     4611686018427387903

input:        4611686018427387904
binary:       0100000000000000000000000000000000000000000000000000000000000000
bindec():     4611686018427387904
NOTE:         See the rollover?  Watch it next time around...

input:        9223372036854775807
binary:       0111111111111111111111111111111111111111111111111111111111111111
bindec():     9223372036854775807
NOTE:         PHP_INT_MAX

input:        -9223372036854775808
binary:       1000000000000000000000000000000000000000000000000000000000000000
bindec():     9223372036854775808
NOTE:         interpreted to be one more than PHP_INT_MAX

input:        -1
binary:       1111111111111111111111111111111111111111111111111111111111111111
bindec():     18446744073709551616
NOTE:         interpreted to be the largest unsigned integer
              (18446744073709551615) but skewed by float precision

    
```

## 注释

> 此函数可以将太大的数字转换为适应平台的 `int` 类型，在这种情况下，较大值将会作为 `float` 返回。

## 参见

`decbin()` `octdec()` `hexdec()` `base_convert()`
