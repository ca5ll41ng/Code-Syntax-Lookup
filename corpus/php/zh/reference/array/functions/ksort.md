---
id: "zh-php-function-function-ksort"
language: "php"
lang: "zh"
category: "function"
name: "ksort"
title: "对数组根据键名升序排序"
signature: "true ksort(array $array, int $flags = SORT_REGULAR)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.ksort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对数组根据键名升序排序

## 说明

```php
true ksort(array $array, int $flags = SORT_REGULAR)
```

对 `$array` 本身进行按键（key）升序排序。

> 如果两个成员完全相同，那么它们将保持原来的顺序。 在 PHP 8.0.0 之前，它们在排序数组中的相对顺序是未定义的。

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
| 8.2.0 | 此函数现在在 `SORT_REGULAR` 下使用标准 PHP 8 规则进行数字字符串比较。 |

## 示例

**`ksort()` 示例**

```php


<?php
$fruits = array("d"=>"lemon", "a"=>"orange", "b"=>"banana", "c"=>"apple");
ksort($fruits);
foreach ($fruits as $key => $val) {
    echo "$key = $val\n";
}
?>

    
```

以上示例会输出：

```text


a = orange
b = banana
c = apple
d = lemon

    
```

**对使用 `int` 键的数组进行 `ksort()`**

```php


<?php
$a = [0 => 'First', 2 => 'Last', 1 => 'Middle'];
var_dump($a);
ksort($a);
var_dump($a);
?>

    
```

以上示例会输出：

```text


array(3) {
  [0]=>
  string(5) "First"
  [2]=>
  string(4) "Last"
  [1]=>
  string(6) "Middle"
}
array(3) {
  [0]=>
  string(5) "First"
  [1]=>
  string(6) "Middle"
  [2]=>
  string(4) "Last"
}

    
```

## 参见

 `sort()` `krsort()` 数组排序函数对比
