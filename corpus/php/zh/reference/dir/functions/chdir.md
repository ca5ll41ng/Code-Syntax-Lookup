---
id: "zh-php-function-function-chdir"
language: "php"
lang: "zh"
category: "function"
name: "chdir"
title: "改变目录"
signature: "bool chdir(string $directory)"
module: "dir"
source_url: "https://www.php.net/manual/zh/function.chdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 改变目录

## 说明

```php
bool chdir(string $directory)
```

将 PHP 的当前目录改为 `$directory`。

## 参数

- **`$directory`** — 新的当前目录

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

Throws an error of level `E_WARNING` on failure.

## 示例

**`chdir()` 例子**

```php


<?php

// current directory
echo getcwd() . "\n";

chdir('public_html');

// current directory
echo getcwd() . "\n";

?>

    
```

以上示例的输出类似于：

```text


/home/vincent
/home/vincent/public_html

    
```

## 注释

> If the PHP interpreter has been built with ZTS (Zend Thread Safety) enabled, any changes to the current directory made through `chdir()` will be invisible to the operating system. All built-in PHP functions will still respect the change in current directory; but external library functions called using FFI will not. You can tell whether your copy of PHP was built with ZTS enabled using php -i or the built-in constant `PHP_ZTS`.

## 参见

`getcwd()`
