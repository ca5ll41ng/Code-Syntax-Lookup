---
id: "zh-php-function-function-fpm-get-status"
language: "php"
lang: "zh"
category: "function"
name: "fpm_get_status"
title: "返回当前 FPM 池状态"
signature: "array|false fpm_get_status()"
module: "fpm"
source_url: "https://www.php.net/manual/zh/function.fpm-get-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前 FPM 池状态

## 说明

```php
array|false fpm_get_status()
```

此函数将返回关联数组，包含当前完整 FPM 池状态。它始终返回完整状态，包含每个进程的状态信息。参阅 FPM 状态页面教程获取有关详细信息。

注意如果 FPM 用于服务脚本时才会定义此函数。

## 参数

此函数没有参数。

## 返回值

包含完整 FPM 池状态的关联数组， 或者在失败时返回 `false`。
