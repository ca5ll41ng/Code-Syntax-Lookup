---
id: "zh-php-function-function-ini-set"
language: "php"
lang: "zh"
category: "function"
name: "ini_set"
title: "为一个配置选项设置值"
signature: "string|false ini_set(string $option, string|int|float|bool|null $value)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.ini-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为一个配置选项设置值

## 说明

```php
string|false ini_set(string $option, string|int|float|bool|null $value)
```

设置指定配置选项的值。这个选项会在脚本运行时保持新的值，并在脚本结束时恢复。

## 参数

- **`$option`** — 不是所有有效的选项都能够用 `ini_set()` 来改变的。 这里有个有效选项的清单附录。
- **`$value`** — 选项新的值。

## 返回值

成功时返回旧的值，失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$value` 现在接受任何标量类型（包含 `null`），之前仅接受 `string` 值。 |

## 示例

**设置一个 ini 选项**

```php


<?php
echo ini_get('display_errors');

if (!ini_get('display_errors')) {
    ini_set('display_errors', '1');
}

echo ini_get('display_errors');
?>

    
```

## 参见

`get_cfg_var()` `ini_get()` `ini_get_all()` `ini_restore()` 如何改变配置选项
