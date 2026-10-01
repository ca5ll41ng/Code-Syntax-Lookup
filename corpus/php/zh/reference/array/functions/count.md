---
id: "zh-php-function-function-count"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "count"
title: "统计数组、Countable 对象中所有元素的数量"
signature: "int count(Countable|array $value, int $mode = COUNT_NORMAL)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 统计数组、Countable 对象中所有元素的数量

## 说明

```php
int count(Countable|array $value, int $mode = COUNT_NORMAL)
```

用于数组时，统计数组中元素的数量；用于实现了 Countable 接口的对象时，返回 `Countable::count()` 方法的返回值。

## 参数

- **`$value`** — 数组或者 Countable 对象。
- **`$mode`** — 如果可选的 `$mode` 参数设为 `COUNT_RECURSIVE`（或 1），`count()` 将递归地对数组计数。对计算多维数组的所有单元尤其有用。
  > `count()` 能检测递归来避免无限循环，但每次出现时会产生 `E_WARNING` 错误 （如果 array 不止一次包含了自身）并返回大于预期的统计数字。



## 返回值

返回 `$value` 中的元素的数量。在 PHP 8.0.0 之前，如果参数既不是数组也不是实现了 `Countable` 接口的对象，将返回 `1`。当 `$value` 为 `null` 时返回 `0`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 当 `$value` 参数传入了无效的 countable 类型， `count()` 现在会抛出 `TypeError`。 |
| 7.2.0 | 当 `$value` 参数传入了无效的 countable 类型， `count()` 现在会产生警告。 |

## 示例

**`count()` 示例**

```php


<?php
$a[0] = 1;
$a[1] = 3;
$a[2] = 5;
var_dump(count($a));

$b[0]  = 7;
$b[5]  = 9;
$b[10] = 11;
var_dump(count($b));
?>

    
```

以上示例会输出：

```php

     
int(3)
int(3)

    
```

**`count()` 非 Countable|array 的示例（这是个反例，请勿模仿）**

```php

     
<?php
$b[0]  = 7;
$b[5]  = 9;
$b[10] = 11;
var_dump(count($b));

var_dump(count(null));

var_dump(count(false));
?>

    
```

以上示例会输出：

```php


int(3)

Fatal error: Uncaught TypeError: count(): Argument #1 ($var) must be of type Countable .. on line 12

    
```

**递归 `count()` 例子**

```php


<?php
$food = array('fruits' => array('orange', 'banana', 'apple'),
              'veggie' => array('carrot', 'collard', 'pea'));

// 递归计数
var_dump(count($food, COUNT_RECURSIVE));

// 常规计数
var_dump(count($food));

?>

    
```

以上示例会输出：

```php


int(8)
int(2)

    
```

**Countable 对象**

```php


<?php
class CountOfMethods implements Countable
{
    private function someMethod()
    {
    }

    public function count(): int
    {
        return count(get_class_methods($this));
    }
}

$obj = new CountOfMethods();
var_dump(count($obj));
?>

    
```

以上示例会输出：

```php


int(2)

    
```

## 参见

`is_array()` `isset()` `empty()` `strlen()` `is_countable()` Array 数组
