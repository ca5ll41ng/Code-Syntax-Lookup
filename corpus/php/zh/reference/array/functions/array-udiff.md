---
id: "zh-php-function-function-array-udiff"
language: "php"
lang: "zh"
category: "function"
name: "array_udiff"
title: "用回调函数比较数据来计算数组的差集"
signature: "array array_udiff(array $array, array $arrays, callable $value_compare_func)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-udiff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用回调函数比较数据来计算数组的差集

## 说明

```php
array array_udiff(array $array, array $arrays, callable $value_compare_func)
```

使用回调函数比较数据，计算数组的不同之处。和 `array_diff()` 不同的是，前者使用内置函数进行数据比较。

## 参数

- **`$array`** — 第一个数组。
- **`$arrays`** — 要对比的数组。
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



## 返回值

返回 `$array` 里没有出现在其他参数里的所有值。

## 示例

**`array_udiff()` 使用 stdClass 对象的示例**

```php


<?php
// 要对比的数组
$array1 = array(new stdClass, new stdClass,
                new stdClass, new stdClass,
               );

$array2 = array(
                new stdClass, new stdClass,
               );

// 为每个对象设置一些属性
$array1[0]->width = 11; $array1[0]->height = 3;
$array1[1]->width = 7;  $array1[1]->height = 1;
$array1[2]->width = 2;  $array1[2]->height = 9;
$array1[3]->width = 5;  $array1[3]->height = 7;

$array2[0]->width = 7;  $array2[0]->height = 5;
$array2[1]->width = 9;  $array2[1]->height = 2;

function compare_by_area($a, $b) {
    $areaA = $a->width * $a->height;
    $areaB = $b->width * $b->height;
    
    if ($areaA < $areaB) {
        return -1;
    } elseif ($areaA > $areaB) {
        return 1;
    } else {
        return 0;
    }
}

print_r(array_udiff($array1, $array2, 'compare_by_area'));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => stdClass Object
        (
            [width] => 11
            [height] => 3
        )

    [1] => stdClass Object
        (
            [width] => 7
            [height] => 1
        )

)

    
```

**`array_udiff()` 使用 DateTime 对象的示例**

```php


<?php
class MyCalendar {
    public $free = array();
    public $booked = array();

    public function __construct($week = 'now') {
        $start = new DateTime($week);
        $start->modify('Monday this week midnight');
        $end = clone $start;
        $end->modify('Friday this week midnight');
        $interval = new DateInterval('P1D');
        foreach (new DatePeriod($start, $interval, $end) as $freeTime) {
            $this->free[] = $freeTime;
        }
    }

    public function bookAppointment(DateTime $date, $note) {
        $this->booked[] = array('date' => $date->modify('midnight'), 'note' => $note);
    }

    public function checkAvailability() {
        return array_udiff($this->free, $this->booked, array($this, 'customCompare'));
    }
    
    public function customCompare($free, $booked) {
        if (is_array($free)) $a = $free['date'];
        else $a = $free;
        if (is_array($booked)) $b = $booked['date'];
        else $b = $booked;
        if ($a == $b) {
            return 0;
        } elseif ($a > $b) {
            return 1;
        } else {
            return -1;
        }
    }
}

// 为每周日程创建日历
$myCalendar = new MyCalendar;

// 为本周预约一些日程
$myCalendar->bookAppointment(new DateTime('Monday this week'), "Cleaning GoogleGuy's apartment.");
$myCalendar->bookAppointment(new DateTime('Wednesday this week'), "Going on a snowboarding trip.");
$myCalendar->bookAppointment(new DateTime('Friday this week'), "Fixing buggy code.");

// 通过对比 $booked 日期和 $free 日期获取空闲的天数
echo "I'm available on the following days this week...\n\n";
foreach ($myCalendar->checkAvailability() as $free) {
    echo $free->format('l'), "\n"; 
}
echo "\n\n";
echo "I'm busy on the following days this week...\n\n";
foreach ($myCalendar->booked as $booked) {
    echo $booked['date']->format('l'), ": ", $booked['note'], "\n"; 
}
?>

    
```

以上示例会输出：

```text


I'm available on the following days this week...

Tuesday
Thursday


I'm busy on the following days this week...

Monday: Cleaning GoogleGuy's apartment.
Wednesday: Going on a snowboarding trip.
Friday: Fixing buggy code.

    
```

## 注释

> 注意本函数只检查了多维数组中的一维。当然，可以用 `array_udiff($array1[0], $array2[0], "data_compare_func");` 来检查更深的维度。

## 参见

`array_diff()` `array_diff_assoc()` `array_diff_uassoc()` `array_udiff_assoc()` `array_udiff_uassoc()` `array_intersect()` `array_intersect_assoc()` `array_uintersect()` `array_uintersect_assoc()` `array_uintersect_uassoc()`
