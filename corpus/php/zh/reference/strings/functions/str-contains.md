---
id: "zh-php-function-function-str-contains"
language: "php"
lang: "zh"
category: "function"
name: "str_contains"
title: "确定字符串是否包含指定子串"
signature: "bool str_contains(string $haystack, string $needle)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.str-contains.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 确定字符串是否包含指定子串

## 说明

```php
bool str_contains(string $haystack, string $needle)
```

执行大小写区分的检查，表明 `$needle` 是否包含在 `$haystack` 中。

## 参数

- **`$haystack`** — 在其中搜索的字符串。
- **`$needle`** — 要在 `$haystack` 中搜索的子串。

## 返回值

如果 `$needle` 在 `$haystack` 中，返回 `true`，否则返回 `false`。

## 示例

**使用空字符串 `''`**

```php


<?php
if (str_contains('abc', '')) {
    echo "Checking the existence of the empty string will always return true";
}
?>

    
```

以上示例会输出：

```php


Checking the existence of the empty string will always return true

    
```

**展示大小写区分**

```php


<?php
$string = 'The lazy fox jumped over the fence';

if (str_contains($string, 'lazy')) {
    echo "The string 'lazy' was found in the string\n";
}

if (str_contains($string, 'Lazy')) {
    echo 'The string "Lazy" was found in the string';
} else {
    echo '"Lazy" was not found because the case does not match';
}

?>

    
```

以上示例会输出：

```php


The string 'lazy' was found in the string
"Lazy" was not found because the case does not match

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`str_ends_with()` `str_starts_with()` `stripos()` `strrpos()` `strripos()` `strstr()` `strpbrk()` `substr()` `preg_match()`
