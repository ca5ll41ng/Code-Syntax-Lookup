---
id: "zh-php-function-function-array-diff"
language: "php"
lang: "zh"
category: "function"
name: "array_diff"
title: "计算数组的差集"
signature: "array array_diff(array $array, array $arrays)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-diff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算数组的差集

## 说明

```php
array array_diff(array $array, array $arrays)
```

对比 `$array` 和其他一个或者多个数组，返回在 `$array` 中但是不在其他 array 里的值。

## 参数

- **`$array`** — 要被对比的数组
- **`$arrays`** — 和更多数组进行比较

## 返回值

返回一个数组，该数组包括了所有在 `$array` 中但是不在任何其它参数数组中的值。注意键名保留不变。保留数组 `$array` 里的键。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在可以仅使用一个参数调用此函数。以前，至少需要两个参数。 |

## 示例

**`array_diff()` 示例**

```php


<?php
$array1 = array("a" => "green", "red", "blue", "red");
$array2 = array("b" => "green", "yellow", "red");
$result = array_diff($array1, $array2);

print_r($result);
?>

    
```

在 `$array1` 中多次出现的值一样处理，输出结果为：

```text


Array
(
    [1] => blue
)

    
```

两个元素只有在 `(string) $elem1 === (string) $elem2` 相等时视为一致。 也就是字符串转换表达相同。

**`array_diff()` 不匹配类型的示例**

```php

     
<?php
// 数组无法转换成字符串时会产生 Notice 警告
$source = [1, 2, 3, 4];
$filter = [3, 4, [5], 6];
$result = array_diff($source, $filter);

// 而这个就可以，因为对象可以转换成字符串
class S {
  private $v;

  public function __construct(string $v) {
    $this->v = $v;
  }

  public function __toString() {
    return $this->v;
  }
}

$source = [new S('a'), new S('b'), new S('c')];
$filter = [new S('b'), new S('c'), new S('d')];

$result = array_diff($source, $filter);

// $result 包含了一个 S('a'); 实例
var_dump($result);
?>

    
```

想要使用函数来比较，可使用 `array_udiff()`。

## 注释

> 注意本函数只检查了多维数组中的一维。当然可以用 `array_diff($array1[0], $array2[0]);` 检查更深的维度。

## 参见

`array_diff_assoc()` `array_udiff()` `array_intersect()` `array_intersect_assoc()`
