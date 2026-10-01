---
id: "zh-php-function-function-strrpos"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "strrpos"
title: "计算指定字符串在目标字符串中最后一次出现的位置"
signature: "int|false strrpos(string $haystack, string $needle, int $offset = 0)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strrpos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算指定字符串在目标字符串中最后一次出现的位置

## 说明

```php
int|false strrpos(string $haystack, string $needle, int $offset = 0)
```

返回 `$haystack` 字符串中 `$needle` 最后一次出现的数字位置。

## 参数

- **`$haystack`** — 在此字符串中进行查找。
- **`$needle`** — 要搜索的字符串。 — Prior to PHP 8.0.0, if `$needle` is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the `$needle` should either be explicitly cast to string, or an explicit call to `chr()` should be performed.
- **`$offset`** — 如果为 0 或正数，则从左到右搜索，跳过 `$haystack` 的开头 `$offset` 个字节。 — 如果为负数，搜索从右侧 `$offset` 个字节开始，而不是从开头 `$haystack` 个字节开始。搜索从右往左进行，从所选字节中搜索第一个出现的 `$needle`。 > 这实际是在最后 `$offset` 个字节之前寻找最后出现的 `$needle` 的位置。

## 返回值

返回 needle 在 `$haystack` 字符串中存在的位置（与搜索顺序或者 offset 无关）。

> 字符串位置从 0 开始，而不是 1。

如果未找到 needle，则返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 错误／异常

- 如果 `$offset` 大于 `$haystack` 的长度，则会抛出 `ValueError` 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$needle` 现在接受空字符串。 |
| 8.0.0 | 不再支持将 `integer` 传递给 `$needle`。 |
| 7.3.0 | 弃用将 `integer` 传递给 `$needle`。 |

## 示例

**检查字串是否存在**

很容易将“在位置 0 处找到”和“未发现字符串”这两种情况搞错。这是检测区别的办法：

```php


<?php
$mystring = 'Elephpant';

$pos = strrpos($mystring, "b");
if ($pos === false) { // 注意: 三个等号
    // 未发现...
}

?>

    
```

**使用偏移位置进行查找**

```php


<?php
$foo = "0123456789a123456789b123456789c";

// 从第 0 个字节（从头）寻找“0”
var_dump(strrpos($foo, '0', 0));

// 从第 1 个字节（字节“0”之后）寻找“0”
var_dump(strrpos($foo, '0', 1));

// 从第 21 个字节（20 个字节之后）寻找“7”
var_dump(strrpos($foo, '7', 20));

// 从第 29 个字节（28 个字节之后）寻找“7”
var_dump(strrpos($foo, '7', 28));

// 从倒数第 5 个字节起从右向左寻找“7”
var_dump(strrpos($foo, '7', -5));

// 从倒数第 2 个字节起从右向左寻找“c”
var_dump(strrpos($foo, 'c', -2));

// 从倒数第 2 个字节起从右向左寻找“9c”
var_dump(strrpos($foo, '9c', -2));
?>

    
```

以上示例会输出：

```text


int(0)
bool(false)
int(27)
bool(false)
int(17)
bool(false)
int(29)

   
```

## 参见

`strpos()` `stripos()` `strripos()` `strrchr()` `substr()`
