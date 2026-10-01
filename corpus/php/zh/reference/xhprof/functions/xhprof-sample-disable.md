---
id: "zh-php-function-function-xhprof-sample-disable"
language: "php"
lang: "zh"
category: "function"
name: "xhprof_sample_disable"
title: "停止 xhprof 性能采样分析器"
signature: "array|null xhprof_sample_disable()"
module: "xhprof"
source_url: "https://www.php.net/manual/zh/function.xhprof-sample-disable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 停止 xhprof 性能采样分析器

## 说明

```php
array|null xhprof_sample_disable()
```

停止采样模式的 xhprof 分析器，并返回分析信息。

## 参数

此函数没有参数。

## 返回值

本次运行的xhprof采样数据，`array` 类型。如果未启用分析，则返回 `null`。

## 示例

**`xhprof_sample_disable()` 示例**

```php


<?php
xhprof_sample_enable();

for ($i = 0; $i <= 10000; $i++) {
    $a = strlen($i);
    $b = $i * $a;
    $c = rand();
}

$xhprof_data = xhprof_sample_disable();

print_r($xhprof_data);
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [1272935300.800000] => main()
    [1272935300.900000] => main()
)

   
```
