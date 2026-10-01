---
id: "zh-php-function-function-set-time-limit"
language: "php"
lang: "zh"
category: "function"
name: "set_time_limit"
title: "设置脚本最大执行时间"
signature: "bool set_time_limit(int $seconds)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.set-time-limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置脚本最大执行时间

## 说明

```php
bool set_time_limit(int $seconds)
```

设置允许脚本运行的时间，单位为秒。如果超过了此设置，脚本返回一个致命的错误。默认值为30秒，或者是在php.ini的`max_execution_time`被定义的值，如果此值存在。

当此函数被调用时，`set_time_limit()`会从零开始重新启动超时计数器。换句话说，如果超时默认是30秒，在脚本运行了25秒时调用 `set_time_limit(20)`，那么，脚本在超时之前可运行总时间为45秒。

## 参数

- **`$seconds`** — 最大的执行时间，单位为秒。如果设置为0（零），没有时间方面的限制。

## 返回值

成功时返回 `true`，失败时返回 `false` 。

## 注释

> `set_time_limit()`函数和配置指令max_execution_time只影响脚本本身执行的时间。任何发生在诸如使用`system()`的系统调用，流操作，数据库操作等的脚本执行的最大时间不包括其中，当该脚本已运行。在测量时间是实值的Windows中，情况就不是如此了。

## 参见

max_execution_time max_input_time
