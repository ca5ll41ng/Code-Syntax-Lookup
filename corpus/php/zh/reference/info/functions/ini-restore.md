---
id: "zh-php-function-function-ini-restore"
language: "php"
lang: "zh"
category: "function"
name: "ini_restore"
title: "恢复配置选项的值"
signature: "void ini_restore(string $option)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.ini-restore.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 恢复配置选项的值

## 说明

```php
void ini_restore(string $option)
```

恢复指定的配置选项到它的原始值。

## 参数

- **`$option`** — 配置选项名称。

## 返回值

没有返回值。

## 示例

**`ini_restore()` 示例**

```php


<?php
$setting = 'html_errors';

echo 'Current value for \'' . $setting . '\': ' . ini_get($setting), PHP_EOL;

ini_set($setting, ini_get($setting) ? 0 : 1);
echo 'New value for \'' . $setting . '\': ' . ini_get($setting), PHP_EOL;

ini_restore($setting);
echo 'Original value for \'' . $setting . '\': ' . ini_get($setting), PHP_EOL;
?>

    
```

以上示例会输出：

```text


Current value for 'html_errors': 1
New value for 'html_errors': 0
Original value for 'html_errors': 1

    
```

## 参见

`ini_get()` `ini_get_all()` `ini_set()`
