---
id: "zh-php-function-function-array-udiff-uassoc"
language: "php"
lang: "zh"
category: "function"
name: "array_udiff_uassoc"
title: "带索引检查计算数组的差集，用回调函数比较数据和索引"
signature: "array array_udiff_uassoc(array $array, array $arrays, callable $value_compare_func, callable $key_compare_func)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-udiff-uassoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 带索引检查计算数组的差集，用回调函数比较数据和索引

## 说明

```php
array array_udiff_uassoc(array $array, array $arrays, callable $value_compare_func, callable $key_compare_func)
```

`array_udiff_uassoc()` 返回一个数组，该数组包括了所有在 `$array1` 中但是不在任何其它参数数组中的值。

注意和 `array_diff()` 与 `array_udiff()` 不同的是键名也用于比较。

## 参数

- **`$array`** — 第一个数组。
- **`$arrays`** — 要比较的数组。
- **`$value_compare_func`** — 在第一个参数小于，等于或大于第二个参数时，该比较函数必须相应地返回一个小于，等于或大于 0 的整数。
  > 从比较函数中返回*非整数*值，例如 `float`，将导致内部强制转换为 callback 返回值为 `int`。因此，诸如 `0.99` 和 `0.1` 之类的值都将被转换为整数值 `0`，将这些值比较的话将会是相等。


  > 排序回调必须以任意顺序处理任意数组中的任意值，无论它们最初提供的顺序如何。这是因为每个单独的数组在与其他数组进行比较之前首先进行排序。例如：
  >
  > ```php
  >
  >
  > <?php
  > $arrayA = ["string", 1];
  > $arrayB = [["value" => 1]];
  > // $item1 和 $item2 可以是“string”、1 或 ["value" => 1]
  > $compareFunc = static function ($item1, $item2) {
  >     $value1 = is_string($item1) ? strlen($item1) : (is_array($item1) ? $item1["value"] : $item1);
  >     $value2 = is_string($item2) ? strlen($item2) : (is_array($item2) ? $item2["value"] : $item2);
  >     return $value1 <=> $value2;
  > };
  > ?>
  >
  >   
  > ```


- **`$key_compare_func`** — 对键名（索引）的检查也是由回调函数 `$key_compare_func` 进行的。这和 `array_udiff_assoc()` 的行为不同，后者是用内部函数比较索引的。

## 返回值

返回一个 `array`，包含 `$array` 里没有出现在其他参数里的所有值。

## 示例

**`array_udiff_uassoc()` 示例**

```php


<?php
class cr {
    private $priv_member;
    function __construct($val)
    {
        $this->priv_member = $val;
    }

    static function comp_func_cr($a, $b)
    {
        if ($a->priv_member === $b->priv_member) return 0;
        return ($a->priv_member > $b->priv_member)? 1:-1;
    }

    static function comp_func_key($a, $b)
    {
        if ($a === $b) return 0;
        return ($a > $b)? 1:-1;
    }
}
$a = array("0.1" => new cr(9), "0.5" => new cr(12), 0 => new cr(23), 1=> new cr(4), 2 => new cr(-15),);
$b = array("0.2" => new cr(9), "0.5" => new cr(22), 0 => new cr(3), 1=> new cr(4), 2 => new cr(-15),);

$result = array_udiff_uassoc($a, $b, array("cr", "comp_func_cr"), array("cr", "comp_func_key"));
print_r($result);
?>

    
```

以上示例会输出：

```text


Array
(
    [0.1] => cr Object
        (
            [priv_member:cr:private] => 9
        )

    [0.5] => cr Object
        (
            [priv_member:cr:private] => 12
        )

    [0] => cr Object
        (
            [priv_member:cr:private] => 23
        )
)

    
```

在上例中键值对 `"1" => new cr(4)` 同时出现在两个数组中，因此不在本函数的输出中。要记住必须提供两个回调函数。

## 注释

> 注意本函数只检查了多维数组中的一维。当然，可以用 `array_udiff_uassoc($array1[0], $array2[0], "data_compare_func", "key_compare_func");` 来检查更深的维度。

## 参见

`array_diff()` `array_diff_assoc()` `array_udiff()` `array_udiff_assoc()` `array_intersect()` `array_intersect_assoc()` `array_uintersect()` `array_uintersect_assoc()` `array_uintersect_uassoc()`
