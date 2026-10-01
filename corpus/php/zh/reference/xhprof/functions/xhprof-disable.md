---
id: "zh-php-function-function-xhprof-disable"
language: "php"
lang: "zh"
category: "function"
name: "xhprof_disable"
title: "停止 xhprof 分析器"
signature: "array|null xhprof_disable()"
module: "xhprof"
source_url: "https://www.php.net/manual/zh/function.xhprof-disable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 停止 xhprof 分析器

## 说明

```php
array|null xhprof_disable()
```

停止性能分析，并返回此次运行的 xhprof 数据。

## 参数

此函数没有参数。

## 返回值

本次运行的 `array` 类型的 xhprof 数据。如果未启用分析，则返回 `null`。

## 示例

**`xhprof_disable()` 示例**

```php


<?php
xhprof_enable();

$foo = strlen("foo bar");

$xhprof_data = xhprof_disable();

print_r($xhprof_data);
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [main()==>strlen] => Array
        (
            [ct] => 1
            [wt] => 279
        )

    [main()==>xhprof_disable] => Array
        (
            [ct] => 1
            [wt] => 9
        )

    [main()] => Array
        (
            [ct] => 1
            [wt] => 610
        )

)

   
```
