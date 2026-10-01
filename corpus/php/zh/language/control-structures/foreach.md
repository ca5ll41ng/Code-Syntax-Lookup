---
id: "zh-php-syntax-control-structures-foreach"
language: "php"
lang: "zh"
category: "syntax"
name: "control-structures.foreach"
title: "foreach"
module: "language"
source_url: "https://www.php.net/manual/zh/control-structures.foreach.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# foreach

`foreach` 结构提供了一种遍历 `array` 和 Traversable object 的简便方式。当用于其他数据类型的变量，或未初始化的变量时，`foreach` 会触发错误。 `foreach` 可选择性的获取每个元素的 `key`： ```text foreach (iterable_expression as $value) { statement_list } foreach (iterable_expression as $key => $value) { statement_list } ```

第一种格式遍历给定的 `iterable_expression` 迭代器。每次循环中，当前单元的值被赋给 `$value`。

第二种格式做同样的事，只除了当前单元的键名也会在每次循环中被赋给变量 `$key`。

注意 `foreach` 不会修改类似 `current()` 和 `key()` 函数所使用的数组内部指针。

还能够自定义遍历对象。

**常见的 `foreach` 用法**

```php


<?php

/* 示例：仅有值 */
$array = [1, 2, 3, 17];

foreach ($array as $value) {
    echo "Current element of \$array: $value.\n";
}

/* 示例：key 和值 */
$array = [
    "one" => 1,
    "two" => 2,
    "three" => 3,
    "seventeen" => 17
];

foreach ($array as $key => $value) {
    echo "Key: $key => Value: $value\n";
}

/* 示例：多维 key-value 数组 */
$grid = [];
$grid[0][0] = "a";
$grid[0][1] = "b";
$grid[1][0] = "y";
$grid[1][1] = "z";

foreach ($grid as $y => $row) {
    foreach ($row as $x => $value) {
        echo "Value at position x=$x and y=$y: $value\n";
    }
}

/* 示例：动态数组 */
foreach (range(1, 5) as $value) {
    echo "$value\n";
}
?>

  
```

> `foreach` 不支持使用 `@` 运算符来抑制错误消息。

### 解包嵌套数组

可以通过遍历数组中的数组，在 value 的位置使用数组解构（`[]`）或 `list()` 语言结构将嵌套数组解包到循环变量中。

> 请注意，通过 `[]` 进行数组解构仅在 PHP 7.1.0 及以上版本中可用。

在以下两个示例中，将设 `$a` 为嵌套数组的第一个元素，`$b` 将包含第二个元素： ```php <?php $array = [ [1, 2], [3, 4], ]; foreach ($array as [$a, $b]) { echo "A: $a; B: $b\n"; } foreach ($array as list($a, $b)) { echo "A: $a; B: $b\n"; } ?> ``` 以上示例会输出： ```text A: 1; B: 2 A: 3; B: 4 ```

当提供的变量数量少于数组中的元素数量时，将会忽略多余的元素。类似地，可通过使用逗号跳过某些元素： ```php <?php $array = [ [1, 2, 5], [3, 4, 6], ]; foreach ($array as [$a, $b]) { // 注意此处没有 $c echo "$a $b\n"; } foreach ($array as [, , $c]) { // 跳过 $a 和 $b echo "$c\n"; } ?> ``` 以上示例会输出： ```text 1 2 3 4 5 6 ```

如果数组元素数量不足以填充 `list()`，将生成一条 notice 级别的错误消息。 ```php <?php $array = [ [1, 2], [3, 4], ]; foreach ($array as [$a, $b, $c]) { echo "A: $a; B: $b; C: $c\n"; } ?> ``` 以上示例会输出： ```text Notice: Undefined offset: 2 in example.php on line 7 A: 1; B: 2; C: Notice: Undefined offset: 2 in example.php on line 7 A: 3; B: 4; C: ```

### foreach 和引用

可以通过在 `$value` 前加上 `&`，就可以在循环中直接修改数组元素。此时，值将以引用的方式赋值。 ```php <?php $arr = [1, 2, 3, 4]; foreach ($arr as &$value) { $value = $value * 2; } // $arr is now [2, 4, 6, 8] unset($value); // 断开与最后一个元素的引用 ?> ```

> 对数组最后一个元素的 `$value` 的引用在 `foreach` 循环结束后仍然存在。建议使用 `unset()` 将其销毁，否则将出现以下行为：
>
> ```php <?php $arr = [1, 2, 3, 4]; foreach ($arr as &$value) { $value = $value * 2; } // $arr 现在是 [2, 4, 6, 8] // 如果没有使用 unset(value)，$value 仍会引用最后一个元素：$arr[3] foreach ($arr as $key => $value) { // $arr[3] 会随着 $arr 中的每个值而更新…… echo "{$key} => {$value} "; print_r($arr); } // ……最终会复制倒数第二个值到最后一个值上 ?> ``` 以上示例会输出： ```text 0 => 2 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 2 ) 1 => 4 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 4 ) 2 => 6 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 6 ) 3 => 6 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 6 ) ```

**通过引用遍历常量数组的值**

```php


<?php
foreach ([1, 2, 3, 4] as &$value) {
    $value = $value * 2;
}
?>

   
```

### 参见

 array Traversable iterable `list()`
