---
id: "zh-php-function-function-restore-include-path"
language: "php"
lang: "zh"
category: "function"
name: "restore_include_path"
title: "还原 include_path 配置选项的值"
signature: "void restore_include_path()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.restore-include-path.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 还原 include_path 配置选项的值

## 说明

```php
void restore_include_path()
```

还原到 php.ini 中设置的 include_path 主值。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数已移除。 |
| 7.4.0 | 此函数已废弃。 |

## 示例

**`restore_include_path()` 示例**

```php


<?php

echo get_include_path();  // .:/usr/local/lib/php

set_include_path('/inc');

echo get_include_path();  // /inc

restore_include_path();

// 或使用 ini_restore
ini_restore('include_path');

echo get_include_path();  // .:/usr/local/lib/php

?>

    
```

## 参见

`ini_restore()` `get_include_path()` `set_include_path()` `include()`
