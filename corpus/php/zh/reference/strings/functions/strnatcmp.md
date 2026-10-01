---
id: "zh-php-function-function-strnatcmp"
language: "php"
lang: "zh"
category: "function"
name: "strnatcmp"
title: "使用自然排序算法比较字符串"
signature: "int strnatcmp(string $string1, string $string2)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strnatcmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用自然排序算法比较字符串

## 说明

```php
int strnatcmp(string $string1, string $string2)
```

该函数实现了以人类习惯对数字型字符串进行排序的比较算法，这就是“自然顺序”。注意该比较区分大小写。

## 参数

- **`$string1`** — 第一个字符串。
- **`$string2`** — 第二个字符串。

## 返回值

如果 `$string1` 小于 `$string2`，则返回小于 0 的值； 如果 `$string1` 大于 `$string2`，则返回大于 0 的值； 如果它们相等，则返回 `0`。 除了它的符号外，不能从返回值中可靠推断出任何特定的含义。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 当字符串长度不相等时，此函数不再保证返回 `strlen($string1) - strlen($string2)`， 而可能返回 `-1` 或 `1`。 |

## 示例

下面的例子展示了该算法与计算机常规字符串比较算法（`strcmp()` 所使用的）的区别：

**`strcmp()`**

```php


<?php
$arr1 = $arr2 = array("img12.png", "img10.png", "img2.png", "img1.png");
echo "Standard string comparison\n";
usort($arr1, "strcmp");
print_r($arr1);
echo "\nNatural order string comparison\n";
usort($arr2, "strnatcmp");
print_r($arr2);
?>

    
```

以上示例会输出：

```text


Standard string comparison
Array
(
    [0] => img1.png
    [1] => img10.png
    [2] => img12.png
    [3] => img2.png
)

Natural order string comparison
Array
(
    [0] => img1.png
    [1] => img2.png
    [2] => img10.png
    [3] => img12.png
)

    
```

更多信息，参见：Martin Pool 的[自然顺序的字符串比较]() page.

## 参见

`preg_match()` `strcasecmp()` `substr()` `stristr()` `strcmp()` `strncmp()` `strncasecmp()` `strnatcasecmp()` `strstr()` `natsort()` `natcasesort()`
