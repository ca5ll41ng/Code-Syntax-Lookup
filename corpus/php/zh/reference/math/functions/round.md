---
id: "zh-php-function-function-round"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "round"
title: "对浮点数进行四舍五入"
signature: "float round(int|float $num, int $precision = 0, int|RoundingMode $mode = RoundingMode::HalfAwayFromZero)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.round.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对浮点数进行四舍五入

## 说明

```php
float round(int|float $num, int $precision = 0, int|RoundingMode $mode = RoundingMode::HalfAwayFromZero)
```

返回将 `$num` 根据指定精度 `$precision`（十进制小数点后数字的数目）进行四舍五入的结果。`$precision` 也可以是负数或零（默认值）。

 It's not true <para> <caution> <simpara> 在对正好一半的分数进行舍入时 <function>round</function> 在偶数次舍去，在奇数次进位。如果你想迫使它对 .5（或 .05）总向一个方向舍入，加上或减去一个很小的因子。对一半值舍去对另一半值进一的背后原因是避免传统的银行问题，即如果总是舍去则银行从顾客那里多拿了钱，如果总是进一则银行最终会损失了钱。对此平均舍入则在统计上达到了平衡。 </simpara> </caution> </para> 

## 参数

- **`$num`** — 要处理的值。
- **`$precision`** — 可选的十进制小数点后数字的数目。 — 如果 `$precision` 是正数，则 `$num` 会四舍五入到小数点后 `$precision` 位有效数字。 — 如果 `$precision` 是负数，则 `$num` 四舍五入到小数点前 `$precision` 位有效数字。即 pow(10, -$precision) 最接近的倍数，例如，`$precision` 为 -1，`$num` 可以四舍五入到十位，`$precision` 为 -2，`$num` 可以四舍五入到百位，等等。
- **`$mode`** — 使用 `RoundingMode` 或以下常量之一来指定舍入模式。 Use `RoundingMode` or one of the following constants to specify the mode in which rounding occurs. | 常量 | 说明 | | --- | --- | | `PHP_ROUND_HALF_UP` | 当 `$num` 恰好处于中间时，将其向远离零的方向舍入，使 1.5 变为 2，-1.5 变为 -2。 | | `PHP_ROUND_HALF_DOWN` | 当 `$num` 恰好处于中间时，将其向靠近零的方向舍入，使 1.5 变为 1，-1.5 变为 -1。 | | `PHP_ROUND_HALF_EVEN` | 将 `$num` 四舍五入到最接近的偶数值，1.5 和 2.5 都变为 2。 | | `PHP_ROUND_HALF_ODD` | 将 `$num` 四舍五入到最接近的奇数值，1.5 变为 1，2.5 变为 3。 | 然而，请注意，某些新添加的模式仅存在于 RoundingMode 中。

## 返回值

值是四舍五入到指定 `$precision` 精度的 `float`。

## 错误／异常

如果 `$mode` 是无效的，此函数将抛出 ValueError 异常。 在 PHP 8.4.0 之前，无效的模式会默认为 `PHP_ROUND_HALF_UP`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 新增了四种舍入模式。 |
| 8.4.0 | 如果 `$mode` 是无效的，现在将抛出 ValueError 异常。 |
| 8.0.0 | `$num` 不再接受支持数字转换的内部对象。 |

## 示例

**`round()` 示例**

```php


<?php
var_dump(round(3.4));
var_dump(round(3.5));
var_dump(round(3.6));
var_dump(round(3.6, 0));
var_dump(round(5.045, 2));
var_dump(round(5.055, 2));
var_dump(round(345, -2));
var_dump(round(345, -3));
var_dump(round(678, -2));
var_dump(round(678, -3));
?>

    
```

以上示例会输出：

```php


float(3)
float(4)
float(4)
float(4)
float(5.05)
float(5.06)
float(300)
float(0)
float(700)
float(1000)

    
```

**`$precision` 如何影响 float**

```php


<?php
$number = 135.79;

var_dump(round($number, 3));
var_dump(round($number, 2));
var_dump(round($number, 1));
var_dump(round($number, 0));
var_dump(round($number, -1));
var_dump(round($number, -2));
var_dump(round($number, -3));
?>

    
```

以上示例会输出：

```php


float(135.79)
float(135.79)
float(135.8)
float(136)
float(140)
float(100)
float(0)

    
```

**`$mode` 示例**

```php


<?php
echo 'Rounding modes with 9.5' . PHP_EOL;
var_dump(round(9.5, 0, PHP_ROUND_HALF_UP));
var_dump(round(9.5, 0, PHP_ROUND_HALF_DOWN));
var_dump(round(9.5, 0, PHP_ROUND_HALF_EVEN));
var_dump(round(9.5, 0, PHP_ROUND_HALF_ODD));

echo PHP_EOL;
echo 'Rounding modes with 8.5' . PHP_EOL;
var_dump(round(8.5, 0, PHP_ROUND_HALF_UP));
var_dump(round(8.5, 0, PHP_ROUND_HALF_DOWN));
var_dump(round(8.5, 0, PHP_ROUND_HALF_EVEN));
var_dump(round(8.5, 0, PHP_ROUND_HALF_ODD));
?>

    
```

以上示例会输出：

```php


Rounding modes with 9.5
float(10)
float(9)
float(10)
float(9)

Rounding modes with 8.5
float(9)
float(8)
float(8)
float(9)

    
```

**带 `$precision` 的 `$mode` 示例**

```php


<?php
echo 'Using PHP_ROUND_HALF_UP with 1 decimal digit precision' . PHP_EOL;
var_dump(round( 1.55, 1, PHP_ROUND_HALF_UP));
var_dump(round(-1.55, 1, PHP_ROUND_HALF_UP));

echo PHP_EOL;
echo 'Using PHP_ROUND_HALF_DOWN with 1 decimal digit precision' . PHP_EOL;
var_dump(round( 1.55, 1, PHP_ROUND_HALF_DOWN));
var_dump(round(-1.55, 1, PHP_ROUND_HALF_DOWN));

echo PHP_EOL;
echo 'Using PHP_ROUND_HALF_EVEN with 1 decimal digit precision' . PHP_EOL;
var_dump(round( 1.55, 1, PHP_ROUND_HALF_EVEN));
var_dump(round(-1.55, 1, PHP_ROUND_HALF_EVEN));

echo PHP_EOL;
echo 'Using PHP_ROUND_HALF_ODD with 1 decimal digit precision' . PHP_EOL;
var_dump(round( 1.55, 1, PHP_ROUND_HALF_ODD));
var_dump(round(-1.55, 1, PHP_ROUND_HALF_ODD));
?>

    
```

以上示例会输出：

```php


Using PHP_ROUND_HALF_UP with 1 decimal digit precision
float(1.6)
float(-1.6)

Using PHP_ROUND_HALF_DOWN with 1 decimal digit precision
float(1.5)
float(-1.5)

Using PHP_ROUND_HALF_EVEN with 1 decimal digit precision
float(1.6)
float(-1.6)

Using PHP_ROUND_HALF_ODD with 1 decimal digit precision
float(1.5)
float(-1.5)

    
```

**使用 `RoundingMode` 的示例**

```php


<?php
foreach (RoundingMode::cases() as $mode) {
    foreach ([
        8.5,
        9.5,
        -3.5,
    ] as $number) {
        printf("%-17s: %+.17g -> %+.17g\n", $mode->name, $number, round($number, 0, $mode));
    }
    echo "\n";
}
?>

    
```

以上示例会输出：

```php


HalfAwayFromZero : +8.5 -> +9
HalfAwayFromZero : +9.5 -> +10
HalfAwayFromZero : -3.5 -> -4

HalfTowardsZero  : +8.5 -> +8
HalfTowardsZero  : +9.5 -> +9
HalfTowardsZero  : -3.5 -> -3

HalfEven         : +8.5 -> +8
HalfEven         : +9.5 -> +10
HalfEven         : -3.5 -> -4

HalfOdd          : +8.5 -> +9
HalfOdd          : +9.5 -> +9
HalfOdd          : -3.5 -> -3

TowardsZero      : +8.5 -> +8
TowardsZero      : +9.5 -> +9
TowardsZero      : -3.5 -> -3

AwayFromZero     : +8.5 -> +9
AwayFromZero     : +9.5 -> +10
AwayFromZero     : -3.5 -> -4

NegativeInfinity : +8.5 -> +8
NegativeInfinity : +9.5 -> +9
NegativeInfinity : -3.5 -> -4

PositiveInfinity : +8.5 -> +9
PositiveInfinity : +9.5 -> +10
PositiveInfinity : -3.5 -> -3

    
```

## 参见

`ceil()` `floor()` `number_format()`
