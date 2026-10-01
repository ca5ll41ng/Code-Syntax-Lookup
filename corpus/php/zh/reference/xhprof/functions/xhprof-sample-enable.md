---
id: "zh-php-function-function-xhprof-sample-enable"
language: "php"
lang: "zh"
category: "function"
name: "xhprof_sample_enable"
title: "以采样模式启动 XHProf 性能分析"
signature: "void xhprof_sample_enable()"
module: "xhprof"
source_url: "https://www.php.net/manual/zh/function.xhprof-sample-enable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以采样模式启动 XHProf 性能分析

## 说明

```php
void xhprof_sample_enable()
```

`xhprof_enable()` 的更轻量的版本，以采样模式开始性能分析。 抽样的间隔为 0.1 秒，样本记录了完整的函数调用堆栈。 主要使用的情况是以较低的性能开销来进行性能监控和诊断。

## 参数

此函数没有参数。

## 返回值

`null`

## 参见

 `xhprof_sample_disable()` `xhprof_enable()` `memory_get_usage()` `getrusage()`
