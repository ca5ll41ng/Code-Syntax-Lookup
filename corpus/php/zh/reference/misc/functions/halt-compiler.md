---
id: "zh-php-function-function-halt-compiler"
language: "php"
lang: "zh"
category: "function"
name: "__halt_compiler"
title: "中断编译器的执行"
signature: "void __halt_compiler()"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.halt-compiler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 中断编译器的执行

## 说明

```php
void __halt_compiler()
```

中断编译器的执行。常用于在 PHP 脚本内嵌入数据，类似于安装文件。

可以通过常量 `__COMPILER_HALT_OFFSET__` 获取数据开始字节所在的位置，且该常量仅被定义于使用了 `__halt_compiler()` 的文件。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**`__halt_compiler()` 例子**

```php


<?php

// open this file
$fp = fopen(__FILE__, 'r');

// seek file pointer to data
fseek($fp, __COMPILER_HALT_OFFSET__);

// and output it
var_dump(stream_get_contents($fp));

// the end of the script execution
__halt_compiler(); the installation data (eg. tar, gz, PHP, etc.)

    
```

## 注释

> `__halt_compiler()` 仅能够在最外层作用域使用。
