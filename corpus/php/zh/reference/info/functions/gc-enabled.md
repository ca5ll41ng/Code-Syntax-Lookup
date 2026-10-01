---
id: "zh-php-function-function-gc-enabled"
language: "php"
lang: "zh"
category: "function"
name: "gc_enabled"
title: "返回循环引用计数器的状态"
signature: "bool gc_enabled()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.gc-enabled.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回循环引用计数器的状态

## 说明

```php
bool gc_enabled()
```

返回循环引用计数器的状态。

## 参数

此函数没有参数。

## 返回值

如果垃圾收集器已启用则返回 `true`，否则返回 `false`。

 Use when ERRORS exist <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title> <para> When does this function throw E_* level errors, or exceptions? </para> </refsect1> 

 Use when a CHANGELOG exists <refsect1 role="changelog"> <title xmlns="http://docbook.org/ns/docbook">更新日志</title> <para> <informaltable> <tgroup cols="2"> <thead> <row> <entry>版本</entry> <entry>说明</entry> </row> </thead> <tbody> <row> <entry>Enter the PHP version of change here</entry> <entry>Description of change</entry> </row> </tbody> </tgroup> </informaltable> </para> </refsect1> 

## 示例

**`gc_enabled()` 示例**

```php


<?php
if(gc_enabled()) gc_collect_cycles();
?>

    
```

## 参见

垃圾回收机制
