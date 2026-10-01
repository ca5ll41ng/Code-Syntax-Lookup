---
id: "zh-php-function-function-similar-text"
language: "php"
lang: "zh"
category: "function"
name: "similar_text"
title: "计算两个字符串的相似度"
signature: "int similar_text(string $string1, string $string2, float $percent = null)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.similar-text.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算两个字符串的相似度

## 说明

```php
int similar_text(string $string1, string $string2, float $percent = null)
```

两个字符串的相似程度计算依据  的描述进行。注意该实现没有使用 Oliver 虚拟码中的堆栈，但是却进行了递归调用，这个做法可能会导致整个过程变慢或变快。也请注意，该算法的复杂度是 O(N**3)，N 是最长字符串的长度。

## 参数

- **`$string1`** — 第一个字符串。
- **`$string2`** — 第二个字符串。
  > 交换 `$string1` 和 `$string2` 可能会产生不同的结果；请看下面的示例。


- **`$percent`** — 第三个参数通过引用传递，`similar_text()` 将以百分比计算相似度，通过将 `similar_text()` 的结果除以指定字符串长度的平均值然后乘以 `100`。

## 返回值

返回在两个字符串中匹配字符的数量。

The number of matching characters is calculated by finding the longest first common substring, and then doing this for the prefixes and the suffixes, recursively. The lengths of all found common substrings are added.

## 示例

**`similar_text()` 交换参数示例**

此示例展示了交换 `$string1` 和 `$string2` 可能会产生不同的结果。

```php


<?php
$sim = similar_text('bafoobar', 'barfoo', $perc);
echo "similarity: $sim ($perc %)\n";
$sim = similar_text('barfoo', 'bafoobar', $perc);
echo "similarity: $sim ($perc %)\n";

   
```

以上示例的输出类似于：

```text


similarity: 5 (71.428571428571 %)
similarity: 3 (42.857142857143 %)

   
```

## 参见

`levenshtein()` `metaphone()` `soundex()`
