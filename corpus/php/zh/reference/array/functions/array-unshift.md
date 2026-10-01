---
id: "zh-php-function-function-array-unshift"
language: "php"
lang: "zh"
category: "function"
name: "array_unshift"
title: "在数组开头插入一个或多个单元"
signature: "int array_unshift(array $array, mixed $values)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-unshift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在数组开头插入一个或多个单元

## 说明

```php
int array_unshift(array $array, mixed $values)
```

`array_unshift()` 将传入的单元插入到 `$array` 数组的开头。注意单元是作为整体被插入的，因此传入单元将保持同样的顺序。所有的数值键名将修改为从零开始重新计数，所有的文字键名保持不变。

> 重置数组中的内部指针，指向第一个元素。

## 参数

- **`$array`** — 输入的数组。
- **`$values`** — 插入的变量。

## 返回值

返回 `$array` 数组新的单元数目。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | 现在可以只用一个参数来调用，之前至少需要两个参数。 |

## 示例

**`array_unshift()` 示例**

```php


<?php

$queue = [
    "orange",
    "banana"
];

array_unshift($queue, "apple", "raspberry");

var_dump($queue);

?>

    
```

以上示例会输出：

```php


array(4) {
  [0] =>
  string(5) "apple"
  [1] =>
  string(9) "raspberry"
  [2] =>
  string(6) "orange"
  [3] =>
  string(6) "banana"
}

    
```

**关联数组用法**

如果一个关联数组添加到另一个关联数组开头，则添加到开头的数组将数字索引到前者的数组中。

```php


<?php

$foods = [
    'apples' => [
        'McIntosh' => 'red',
        'Granny Smith' => 'green',
    ],
    'oranges' => [
        'Navel' => 'orange',
        'Valencia' => 'orange',
    ],
];

$vegetables = [
    'lettuce' => [
        'Iceberg' => 'green',
        'Butterhead' => 'green',
    ],
    'carrots' => [
        'Deep Purple Hybrid' => 'purple',
        'Imperator' => 'orange',
    ],
    'cucumber' => [
        'Kirby' => 'green',
        'Gherkin' => 'green',
    ],
];

array_unshift($foods, $vegetables);

var_dump($foods);

?>

    
```

以上示例会输出：

```php


array(3) {
  [0]=>
  array(3) {
    ["lettuce"]=>
    array(2) {
      ["Iceberg"]=>
      string(5) "green"
      ["Butterhead"]=>
      string(5) "green"
    }
    ["carrots"]=>
    array(2) {
      ["Deep Purple Hybrid"]=>
      string(6) "purple"
      ["Imperator"]=>
      string(6) "orange"
    }
    ["cucumber"]=>
    array(2) {
      ["Kirby"]=>
      string(5) "green"
      ["Gherkin"]=>
      string(5) "green"
    }
  }
  ["apples"]=>
  array(2) {
    ["McIntosh"]=>
    string(3) "red"
    ["Granny Smith"]=>
    string(5) "green"
  }
  ["oranges"]=>
  array(2) {
    ["Navel"]=>
    string(6) "orange"
    ["Valencia"]=>
    string(6) "orange"
  }
}

    
```

## 参见

`array_merge()` `array_shift()` `array_push()` `array_pop()`
