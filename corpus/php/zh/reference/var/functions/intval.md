---
id: "zh-php-function-function-intval"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "intval"
title: "获取变量的整数值"
signature: "int intval(mixed $value, int $base = 10)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.intval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取变量的整数值

## 说明

```php
int intval(mixed $value, int $base = 10)
```

通过使用指定的进制 `$base` 转换（默认是十进制），返回变量 `$value` 的 `int` 数值。 `intval()` 不能用于 object，否则会产生 `E_WARNING` 错误并返回 1。

## 参数

- **`$value`** — 要转换成 integer 的数量值
- **`$base`** — 转化所使用的进制
  > 如果 `$base` 是 0，通过检测 `$value` 的格式来决定使用的进制：
  >
  > - 如果字符串包括了 "0x" (或 "0X") 的前缀，使用 16 进制 (hex)；否则，
  > - 如果字符串以 "0b" (或 "0B") 开头，使用 2 进制 (binary)；否则，
  > - 如果字符串以 "0" 开始，使用 8 进制(octal)；否则，
  > - 将使用 10 进制 (decimal)。



## 返回值

成功时返回 `$value` 的 integer 值，失败时返回 0。 空的 array 返回 0，非空的 array 返回 1。

最大的值取决于操作系统。 32 位系统最大带符号的 integer 范围是 -2147483648 到 2147483647。举例，在这样的系统上，`intval('1000000000000')` 会返回 2147483647。64 位系统上，最大带符号的 integer 值是 9223372036854775807。

字符串有可能返回 0，虽然取决于字符串最左侧的字符。 使用 整型转换 的共同规则。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 对象转换时的错误级别已从 `E_NOTICE` 更改为 `E_WARNING`。 |

## 示例

**`intval()` 例子**

下面的例子运行于 64 位系统上。

```php


<?php
echo intval(42), PHP_EOL;                      // 42
echo intval(4.7), PHP_EOL;                     // 4
echo intval('42'), PHP_EOL;                    // 42
echo intval('+42'), PHP_EOL;                   // 42
echo intval('-42'), PHP_EOL;                   // -42
echo intval(042), PHP_EOL;                     // 34
echo intval('042'), PHP_EOL;                   // 42
echo intval(1e10), PHP_EOL;                    // 10000000000
echo intval('1e10'), PHP_EOL;                  // 10000000000
echo intval(0x1A), PHP_EOL;                    // 26
echo intval('0x1A'), PHP_EOL;                  // 0
echo intval('0x1A', 0), PHP_EOL;               // 26
echo intval(42000000), PHP_EOL;                // 42000000
echo intval(420000000000000000000), PHP_EOL;   // -4275113695319687168
echo intval('420000000000000000000'), PHP_EOL; // 9223372036854775807
echo intval(42, 8), PHP_EOL;                   // 42
echo intval('42', 8), PHP_EOL;                 // 34
echo intval(array()), PHP_EOL;                 // 0
echo intval(array('foo', 'bar')), PHP_EOL;     // 1
echo intval(false), PHP_EOL;                   // 0
echo intval(true), PHP_EOL;                    // 1
?>

    
```

## 注释

> 除非 `$value` 是一个字符串，否则 `$base` 不会起作用。

## 参见

`boolval()` `floatval()` `strval()` `settype()` `is_numeric()` 类型转换的判别 BCMath 任意精度数学函数
