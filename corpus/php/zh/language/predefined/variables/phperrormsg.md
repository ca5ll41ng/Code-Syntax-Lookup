---
id: "zh-php-function-reserved-variables-phperrormsg"
language: "php"
lang: "zh"
category: "function"
name: "$php_errormsg"
title: "前一个错误信息"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.phperrormsg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 前一个错误信息

## 说明

`$php_errormsg` 变量包含由 PHP 生成的最新错误信息。这个变量只在错误发生的作用域内可用，并且要求 track_errors 配置项是开启的（默认是关闭的）。

> 如果用户定义了错误处理句柄（`set_error_handler()`）并且返回 `false` 的时候，`$php_errormsg` 就会被设置。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 可使 `$php_errormsg` 可用的 track_errors 指令已被删除。 |
| 7.2.0 | 可使 `$php_errormsg` 可用的 track_errors 指令已被弃用。 |

## 示例

**`$php_errormsg` 范例**

```php


<?php
@strpos();
echo $php_errormsg;
?>

    
```

以上示例的输出类似于：

```text


Wrong parameter count for strpos()

    
```

## 参见

`error_get_last()`
