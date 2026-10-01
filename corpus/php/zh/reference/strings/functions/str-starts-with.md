---
id: "zh-php-function-function-str-starts-with"
language: "php"
lang: "zh"
category: "function"
name: "str_starts_with"
title: "检查字符串是否以指定子串开头"
signature: "bool str_starts_with(string $haystack, string $needle)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.str-starts-with.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查字符串是否以指定子串开头

## 说明

```php
bool str_starts_with(string $haystack, string $needle)
```

执行大小写区分的检查，表明 `$haystack` 是否以 `$needle` 开头。

## 参数

- **`$haystack`** — 在其中搜索的字符串。
- **`$needle`** — 要在 `$haystack` 中搜索的子串。

## 返回值

如果 `$haystack` 以 `$needle` 开头，返回 `true`，否则返回 `false`。

## 示例

**使用空字符串 `''`**

```php


<?php
if (str_starts_with('abc', '')) {
    echo "All strings start with the empty string";
}
?>

    
```

以上示例会输出：

```php


All strings start with the empty string

    
```

**展示大小写区分**

```php


<?php
$string = 'The lazy fox jumped over the fence';

if (str_starts_with($string, 'The')) {
    echo "The string starts with 'The'\n";
}

if (str_starts_with($string, 'the')) {
    echo 'The string starts with "the"';
} else {
    echo '"the" was not found because the case does not match';
}

?>

    
```

以上示例会输出：

```php


The string starts with 'The'
"the" was not found because the case does not match

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`str_contains()` `str_ends_with()` `stripos()` `strrpos()` `strripos()` `strstr()` `strpbrk()` `substr()` `preg_match()`
