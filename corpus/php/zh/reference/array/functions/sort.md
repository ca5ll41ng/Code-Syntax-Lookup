---
id: "zh-php-function-function-sort"
language: "php"
lang: "zh"
category: "function"
name: "sort"
title: "对数组升序排序"
signature: "true sort(array $array, int $flags = SORT_REGULAR)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对数组升序排序

## 说明

```php
true sort(array $array, int $flags = SORT_REGULAR)
```

对 `$array` 本身按照值（value）升序排序。

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

**`sort()` 示例**

```php


<?php

$fruits = array("lemon", "orange", "banana", "apple");
sort($fruits);
foreach ($fruits as $key => $val) {
    echo "fruits[" . $key . "] = " . $val . "\n";
}

?>

    
```

以上示例会输出：

```text


fruits[0] = apple
fruits[1] = banana
fruits[2] = lemon
fruits[3] = orange

    
```

fruits 被按照字母顺序排序。

**使用 `sort()` 不区分大小写自然排序的示例**

```php


<?php

$fruits = array(
    "Orange1", "orange2", "Orange3", "orange20"
);
sort($fruits, SORT_NATURAL | SORT_FLAG_CASE);
foreach ($fruits as $key => $val) {
    echo "fruits[" . $key . "] = " . $val . "\n";
}

?>

    
```

以上示例会输出：

```text


fruits[0] = Orange1
fruits[1] = orange2
fruits[2] = Orange3
fruits[3] = orange20

    
```

fruits 排序得像 `natcasesort()` 的结果。

## 注释

> 和大多数 PHP 排序函数一样，`sort()` 使用了 [快速排序]() 实现的。 在已排序的数组分片的中间，选择基准值，具有最优时间。但不应该依赖它实现的细节。

> 在对含有混合类型值的数组以 `$flags` 为 `SORT_REGULAR` 排序时要小心，因为 `sort()` 可能会产生不可预知的结果。

## 参见

 `rsort()` 数组排序函数对比
