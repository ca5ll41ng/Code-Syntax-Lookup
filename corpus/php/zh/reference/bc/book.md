---
id: "zh-php-guide-book-bc"
language: "php"
lang: "zh"
category: "guide"
name: "book.bc"
title: "BCMath 任意精度数学"
module: "bc"
source_url: "https://www.php.net/manual/zh/book.bc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# BCMath 任意精度数学

BC Math

 {{{ preface 

 简介  对于任意精度的数学， 如果有足够多的内存，PHP 提供的 BCMath 支持用字符串的形式表示任意大小和精度的数字，最大尺寸为 `2147483647`（即 `0x7FFFFFFF`）。    有效（即格式良好）的 BCMath 数字是匹配正则表达式 `/^[+-]?[0-9]*(\.[0-9]*)?$/` 的字符串。   
> BCMath 函数想要操作的是 `string`，如果传入了 `float` 可能无法达到想要的效果， 因为 PHP 会将 `float` 的值转换为 `string`。 也就意味着 `string` 可能会带科学计数法符号（BCMath 并不支持）， 另外在 PHP 8.0.0 之前，小数点分隔符也不支持本地化（BCMath 只能识别英文句号小数点）。
>
> ```php <?php $num1 = 0; // (string) 0 => '0' $num2 = -0.000005; // (string) -0.000005 => '-5.05E-6' echo bcadd($num1, $num2, 6); // => '0.000000' setlocale(LC_NUMERIC, 'de_DE'); // 使用逗号小数点 $num2 = 1.2; // (string) 1.2 => '1,2' echo bcsub($num1, $num2, 1); // => '0.0' ?> ```

 

 }}}
