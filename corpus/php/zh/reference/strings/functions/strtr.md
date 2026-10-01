---
id: "zh-php-function-function-strtr"
language: "php"
lang: "zh"
category: "function"
name: "strtr"
title: "转换字符或替换字串"
signature: "string strtr(string $string, string $from, string $to)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strtr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 转换字符或替换字串

## 说明

```php
string strtr(string $string, string $from, string $to)
```

替代签名（不支持命名参数）：

```php
string strtr(string $string, array $replace_pairs)
```

如果指定三个参数，则该函数返回 `$string` 的副本，`$from` 中所有出现的每个（单字节）字符都已转换为 `$to` 中的相应字符。例如，每次出现的 `$from[$n]` 都会替换为 `$to[$n]`，`$n` 是两个参数中的有效位移(offset)。

如果 `$from` 与 `$to` 长度不相等，那么忽略两者中较长的多余字符。`$string` 的长度将与返回的长度一样。

如果指定两个参数，则第二个参数应该是 `array('from' => 'to', ...)` 形式的 `array`。返回值是 `string`，数组中所有所有出现的键都替换为相应的值。首先会尝试最长的键。一旦子字符串被替换，则新值将不会再次搜索。

在这种情况下，键和值可以是任意长度，前提是没有空值的键；另外，返回值的长度可以跟 `$string` 的长度不同。但是，当所有键的长度相同时，函数最有效。

## 参数

- **`$string`** — 待转换的 `string`。
- **`$from`** — 要转成 `$to` 的 `string`。
- **`$to`** — 替换 `$from` 的 `string`。
- **`$replace_pairs`** — 参数 `$replace_pairs` 可以用来取代 `$to` 和 `$from` ，因为它是 `array('from' => 'to', ...)` 形式的 `array`。 — 如果 `$replace_pairs` 包含空 `string`（`""`）键，将忽略该元素；自 PHP 8.0.0 起，这种情况会引发 `E_WARNING`。

## 返回值

返回转换后的 `string`。

## 示例

**`strtr()` 示例**

```php


<?php
$addr = "The river å";

// 在这种形式中，strtr() 进行逐字节转换
// 因此，假设这里是单字节编码：
$addr = strtr($addr, "äåö", "aao");
echo $addr, PHP_EOL;
?>

    
```

下面的示例展示了仅使用两个参数调用 `strtr()` 的行为。注意优先替换（没有选择 `"h"`，因为有更长的匹配项）以及不再搜索已替换的文本。

**使用两个参数的 `strtr()` 示例**

```php


<?php
$trans = array("h" => "-", "hello" => "hi", "hi" => "hello");
echo strtr("hi all, I said hello", $trans);
?>

    
```

以上示例会输出：

```text


hello all, I said hi

    
```

两种行为的模式本质上是不同的。使用三个参数，`strtr()` 将按字节替换；使用两个参数，优先替换更长的子字符串，

**`strtr()` 行为比较**

```php


<?php
echo strtr("baab", "ab", "01"),"\n";

$trans = array("ab" => "01");
echo strtr("baab", $trans);
?>

    
```

以上示例会输出：

```text


1001
ba01

    
```

## 参见

`str_replace()` `preg_replace()`
