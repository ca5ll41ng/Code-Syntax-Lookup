---
id: "zh-php-function-function-levenshtein"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "levenshtein"
title: "计算两个字符串之间的 Levenshtein 距离"
signature: "int levenshtein(string $string1, string $string2, int $insertion_cost = 1, int $replacement_cost = 1, int $deletion_cost = 1)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.levenshtein.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算两个字符串之间的 Levenshtein 距离

## 说明

```php
int levenshtein(string $string1, string $string2, int $insertion_cost = 1, int $replacement_cost = 1, int $deletion_cost = 1)
```

Levenshtein 距离，是指两个字串之间，通过替换、插入、删除等操作将字符串 `$string1` 转换成 `$string2` 所需要操作的最少字符数量。该算法的复杂度是 `O(m*n)`，其中 `n` 和 `m` 分别是 `$string1` 和 `$string2` 的长度 （当和算法复杂度为 `O(max(n,m)**3)` 的 `similar_text()` 相比时，此函数还是相当不错的，尽管仍然很耗时）。

如果 `$insertion_cost`、`$replacement_cost` 和/或 `$deletion_cost` 不等于 `1`，则算法选择应用于最简便的算法。如果 $insertion_cost + $deletion_cost < $replacement_cost，则不会替换，而是插入和删除。

## 参数

- **`$string1`** — 求编辑距离中的其中一个字符串。
- **`$string2`** — 求编辑距离中的另一个字符串。
- **`$insertion_cost`** — 定义插入次数。
- **`$replacement_cost`** — 定义替换次数。
- **`$deletion_cost`** — 定义删除次数。

## 返回值

此函数返回两个字符串参数之间的 Levenshtein 距离。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 在此版本之前，必须使用两个或者五个参数调用 `levenshtein()`。 |
| 8.0.0 | 在此版本之前，如果某个参数字符串的长度超过 255 个字符，则 `levenshtein()` 将会返回 `-1`。 |

## 示例

**`levenshtein()` 例子：**

```php


<?php
// 输入拼写错误的单词
$input = 'carrrot';

// 要检查的单词数组
$words  = array('apple','pineapple','banana','orange',
                'radish','carrot','pea','bean','potato');

// 目前没有找到最短距离
$shortest = -1;

// 遍历单词来找到最接近的
foreach ($words as $word) {

    // 计算输入单词与当前单词的距离
    $lev = levenshtein($input, $word);

    // 检查完全的匹配
    if ($lev == 0) {

        // 最接近的单词是这个（完全匹配）
        $closest = $word;
        $shortest = 0;

        // 退出循环；我们已经找到一个完全的匹配
        break;
    }

    // 如果此次距离比上次找到的要短
    // 或者还没找到接近的单词
    if ($lev <= $shortest || $shortest < 0) {
        // 设置最接近的匹配以及它的最短距离
        $closest  = $word;
        $shortest = $lev;
    }
}

echo "Input word: $input\n";
if ($shortest == 0) {
    echo "Exact match found: $closest\n";
} else {
    echo "Did you mean: $closest?\n";
}

?>

    
```

以上示例会输出：

```text


Input word: carrrot
Did you mean: carrot?

    
```

## 参见

`soundex()` `similar_text()` `metaphone()`
