---
id: "zh-php-function-function-strval"
language: "php"
lang: "zh"
category: "function"
name: "strval"
title: "获取变量的字符串值"
signature: "string strval(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.strval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取变量的字符串值

## 说明

```php
string strval(mixed $value)
```

返回变量的字符串值。参见 `string` 文档获取更多关于转换为字符串的信息。

此函数对返回值不执行任何格式设置。如果需要将数值格式化字符串的方法，请参阅 `sprintf()` 和 `number_format()`。

## 参数

- **`$value`** — 可以转换为 `string` 的变量。 — `$value` 可以是任何标量类型、`null` 或者实现了 __toString() 方法的对象。不能在数组或者未实现 __toString() 方法的对象上使用 `strval()`。

## 返回值

`$value` 的 `string` 值。

## 示例

**使用 PHP 魔术方法 __toString() 的 `strval()` 示例。**

```php


<?php
class StrValTest
{
    public function __toString()
    {
        return __CLASS__;
    }
}

// 打印“StrValTest”
echo strval(new StrValTest);
?>

    
```

## 参见

`boolval()` `floatval()` `intval()` `settype()` `sprintf()` `number_format()` Type juggling __toString()
