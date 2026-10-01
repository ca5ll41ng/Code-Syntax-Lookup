---
id: "zh-php-function-function-array-multisort"
language: "php"
lang: "zh"
category: "function"
name: "array_multisort"
title: "对多个数组或多维数组进行排序"
signature: "true array_multisort(array $array1, mixed $array1_sort_order = SORT_ASC, mixed $array1_sort_flags = SORT_REGULAR, mixed $rest)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-multisort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对多个数组或多维数组进行排序

## 说明

```php
true array_multisort(array $array1, mixed $array1_sort_order = SORT_ASC, mixed $array1_sort_flags = SORT_REGULAR, mixed $rest)
```

`array_multisort()` 可以用来一次对多个数组进行排序，或者根据某一维或多维对多维数组进行排序。

关联（`string`）键名保持不变，但数字键名会被重新索引。

> 如果两个成员完全相同，那么它们将保持原来的顺序。 在 PHP 8.0.0 之前，它们在排序数组中的相对顺序是未定义的。

## 参数

> 重置数组中的内部指针，指向第一个元素。

- **`$array1`** — 要排序的 `array`。
- **`$array1_sort_order`** — 之前 `array` 参数要排列的顺序。 `SORT_ASC` 按照上升顺序排序， `SORT_DESC` 按照下降顺序排序。 — 此参数可以和 `$array1_sort_flags` 互换，也可以完全删除，默认是 `SORT_ASC` 。
- **`$array1_sort_flags`** — 为 `array` 参数设定选项： — 排序类型标志： - `SORT_REGULAR` - 将项目按照通常方法比较（不修改类型） - `SORT_NUMERIC` - 按照数字大小比较 - `SORT_STRING` - 按照字符串比较 - `SORT_LOCALE_STRING` - 根据当前的本地化设置，按照字符串比较。 它会使用 locale 信息，可以通过 `setlocale()` 修改此信息。 - `SORT_NATURAL` - 以字符串的"自然排序"，类似 `natsort()` - `SORT_FLAG_CASE` - 可以组合 (按位或 OR) `SORT_STRING` 或者 `SORT_NATURAL` 大小写不敏感的方式排序字符串。 — 参数可以和 `$array1_sort_order` 交换或者省略，默认情况下是 `SORT_REGULAR`。
- **`$rest`** — 可选的选项，可提供更多数组，跟随在 sort order 和 sort flag 之后。 提供的数组和之前的数组要有相同数量的元素。 换言之，排序是按字典顺序排列的。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 返回类型现在是 `true`；之前是 `bool`。 |

## 示例

**多个数组排序**

```php


<?php
$ar1 = array(10, 100, 100, 0);
$ar2 = array(1, 3, 2, 4);
array_multisort($ar1, $ar2);

var_dump($ar1);
var_dump($ar2);
?>

    
```

这个例子里，排序后，第一个数组会包含 0、 10、 100、 100。 第二个数组会包含 4、1、 2、 3。 第二个数组里的项目对应第一个数组后也进行了排序（100 和 100）。

```text


array(4) {
  [0]=> int(0)
  [1]=> int(10)
  [2]=> int(100)
  [3]=> int(100)
}
array(4) {
  [0]=> int(4)
  [1]=> int(1)
  [2]=> int(2)
  [3]=> int(3)
}

    
```

**排序多维数组**

```php


<?php
$ar = array(
       array("10", 11, 100, 100, "a"),
       array(   1,  2, "2",   3,   1)
      );
array_multisort($ar[0], SORT_ASC, SORT_STRING,
                $ar[1], SORT_NUMERIC, SORT_DESC);
var_dump($ar);
?>

    
```

本例中在排序后，第一个数组将变成 "10"，100，100，11，"a"（被当作字符串以升序排列）。第二个数组将包含 1, 3, "2", 2, 1（被当作数字以降序排列）。

```text


array(2) {
  [0]=> array(5) {
    [0]=> string(2) "10"
    [1]=> int(100)
    [2]=> int(100)
    [3]=> int(11)
    [4]=> string(1) "a"
  }
  [1]=> array(5) {
    [0]=> int(1)
    [1]=> int(3)
    [2]=> string(1) "2"
    [3]=> int(2)
    [4]=> int(1)
  }
}

    
```

**对数据库结果进行排序**

本例中 `data` 数组中的每个单元表示一个表中的一行。这是典型的数据库记录的数据集合。

例子中的数据如下：

```text


volume | edition
-------+--------
    67 |       2
    86 |       1
    85 |       6
    98 |       2
    86 |       6
    67 |       7

    
```

数据全都存放在名为 `data` 的数组中。这通常是通过循环从数据库取得的结果，例如 `mysql_fetch_assoc()`。

本例中将把 `volume` 降序排列，把 `edition` 升序排列。

现在有了包含有行的数组，但是 `array_multisort()` 需要一个包含列的数组，因此用以下代码来取得列，然后排序。

```php


<?php
// 通过循环调用 mysqli_fetch_assoc 生成的数据：
$data[] = array('volume' => 67, 'edition' => 2);
$data[] = array('volume' => 86, 'edition' => 1);
$data[] = array('volume' => 85, 'edition' => 6);
$data[] = array('volume' => 98, 'edition' => 2);
$data[] = array('volume' => 86, 'edition' => 6);
$data[] = array('volume' => 67, 'edition' => 7);

// 取得列的列表
foreach ($data as $key => $row) {
    $volume[$key]  = $row['volume'];
    $edition[$key] = $row['edition'];
}

// 你可以使用 array_column() 代替上面的代码
$volume  = array_column($data, 'volume');
$edition = array_column($data, 'edition');

// 将数据根据 volume 降序排列，根据 edition 升序排列
// 把 $data 作为最后一个参数，以通用键排序
array_multisort($volume, SORT_DESC, $edition, SORT_ASC, $data);

// 遍历数据并输出每列的排序值
echo 'volume | edition', PHP_EOL;
echo '-------+--------', PHP_EOL;
for ($i = 0; $i < count($data); $i++) {
     printf("%6d | %7d\n", $volume[$i], $edition[$i]);
}
?>

    
```

数据集合现在排好序了，结果如下：

```text


volume | edition
-------+--------
    98 |       2
    86 |       1
    86 |       6
    85 |       6
    67 |       2
    67 |       7

    
```

**不区分大小写字母排序**

`SORT_STRING` 和 `SORT_REGULAR` 都是区分大小写字母的，大写字母会排在小写字母之前。

要进行不区分大小写的排序，就要按照原数组的小写字母拷贝来排序。

```php


<?php
$array = array('Alpha', 'atomic', 'Beta', 'bank');
$array_lowercase = array_map('strtolower', $array);

array_multisort($array_lowercase, SORT_ASC, SORT_STRING, $array);

print_r($array);
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => Alpha
    [1] => atomic
    [2] => bank
    [3] => Beta
)

    
```

## 参见

`usort()` 数组排序函数对比
