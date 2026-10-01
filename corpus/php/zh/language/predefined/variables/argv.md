---
id: "zh-php-function-reserved-variables-argv"
language: "php"
lang: "zh"
category: "function"
name: "$argv"
title: "传递给脚本的参数数组"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.argv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 传递给脚本的参数数组

## 说明

包含当运行于命令行下时传递给当前脚本的参数的数组。

> 第一个参数总是当前脚本的文件名，因此 `$argv[0]` 就是脚本文件名。

> 这个变量仅在 register_argc_argv 打开时可用。

> 要测试脚本是否从命令行运行，应使用 `php_sapi_name()`，而不是检查是否设置了 `$argv` 或 `$_SERVER['argv']`。

## 示例

**`$argv` 示例**

```php


<?php
var_dump($argv);
?>

    
```

当使用这个命令执行：php script.php arg1 arg2 arg3

以上示例的输出类似于：

```text


array(4) {
  [0]=>
  string(10) "script.php"
  [1]=>
  string(4) "arg1"
  [2]=>
  string(4) "arg2"
  [3]=>
  string(4) "arg3"
}

    
```

## 注释

> 也可以在 `$_SERVER['argv']` 中获取。

## 参见

`getopt()` `$argc`
