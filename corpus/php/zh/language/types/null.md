---
id: "zh-php-syntax-language-types-null"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.null"
title: "NULL"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.null.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# NULL

`null` 类型是 PHP 的原子类型（unit type），也就是说，它仅有一个值 `null`。

未定义和 `unset()` 的变量都将解析为值 `null`。

### 语法

`null` 类型只有一个值，就是不区分大小写的常量 `null`。

 
```php

<?php
$var = NULL;       
?>

   
```

 

### 转换到 `null`

> 本特性自 PHP 7.2.0 起*废弃*，并且自 PHP 8.0.0 起被*移除*。 强烈建议不要使用本特性。

使用 `(unset) $var` 将一个变量转换为 `null` 将*不会*删除该变量或 unset 其值。仅是返回 `null` 值而已。

### 参见

`is_null()` `unset()`
