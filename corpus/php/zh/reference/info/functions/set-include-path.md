---
id: "zh-php-function-function-set-include-path"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["file_inclusion"],"cwe":["CWE-98"],"params":[1]}
name: "set_include_path"
title: "设置 include_path 配置选项"
signature: "string|false set_include_path(string $include_path)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.set-include-path.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 include_path 配置选项

## 说明

```php
string|false set_include_path(string $include_path)
```

为当前脚本设置 include_path 运行时的配置选项。

## 参数

- **`$include_path`** — include_path 新的值。

## 返回值

成功时返回旧的 include_path 或者在失败时返回 `false`。

## 示例

**`set_include_path()` 示例**

```php


<?php
set_include_path('/usr/lib/pear');

// 或使用 ini_set
ini_set('include_path', '/usr/lib/pear');
?>

    
```

**添加到include path**

利用常量 `PATH_SEPARATOR` 可跨平台扩展 include path。

这个示例中我们把 `/usr/lib/pear` 添加到了 现有的 `include_path` 的尾部。

```php


<?php
$path = '/usr/lib/pear';
set_include_path(get_include_path() . PATH_SEPARATOR . $path);
?>

    
```

## 参见

`ini_set()` `get_include_path()` `restore_include_path()` `include()`
