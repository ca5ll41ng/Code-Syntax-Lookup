---
id: "zh-php-function-function-rsort"
language: "php"
lang: "zh"
category: "function"
name: "rsort"
title: "对数组降序排序"
signature: "true rsort(array $array, int $flags = SORT_REGULAR)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.rsort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对数组降序排序

## 说明

```php
true rsort(array $array, int $flags = SORT_REGULAR)
```

对 `$array` 本身按照值（value）降序排序。

> 如果两个成员完全相同，那么它们将保持原来的顺序。 在 PHP 8.0.0 之前，它们在排序数组中的相对顺序是未定义的。

> 此函数为 `$array` 中的元素赋与新的键名。这将删除原有的键名，而不是仅仅将键名重新排序。

> 重置数组中的内部指针，指向第一个元素。

## 参数

- **`$array`** — 输入的数组。
- **`$flags`** — 可选的第二个参数 `$flags` 可以用以下值改变排序的行为： — 排序类型标记： - `SORT_REGULAR` - 正常比较单元 详细描述参见 比较运算符 章节 - `SORT_NUMERIC` - 单元被作为数字来比较 - `SORT_STRING` - 单元被作为字符串来比较 - `SORT_LOCALE_STRING` - 根据当前的区域（locale）设置来把单元当作字符串比较，可以用 `setlocale()` 来改变。 - `SORT_NATURAL` - 和 `natsort()` 类似对每个单元以“自然的顺序”对字符串进行排序。 - `SORT_FLAG_CASE` - 能够与 `SORT_STRING` 或 `SORT_NATURAL` 合并（OR 位运算），不区分大小写排序字符串。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在返回类型为 `true`；之前是 `bool`。 |

## 示例

**`rsort()` 示例**

```php


<?php
$fruits = array("lemon", "orange", "banana", "apple");
rsort($fruits);
foreach ($fruits as $key => $val) {
    echo "$key = $val\n";
}
?>

    
```

以上示例会输出：

```text


0 = orange
1 = lemon
2 = banana
3 = apple

    
```

fruits 被按照字母顺序逆向排序。

## 注释

> 此函数为 `$array` 中的元素赋与新的键名。这将删除原有的键名，而不是仅仅将键名重新排序。

## 参见

 `sort()` `arsort()` `krsort()` 数组排序函数对比
