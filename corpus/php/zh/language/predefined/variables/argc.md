---
id: "zh-php-function-reserved-variables-argc"
language: "php"
lang: "zh"
category: "function"
name: "$argc"
title: "传递给脚本的参数数目"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.argc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 传递给脚本的参数数目

## 说明

包含当运行于命令行下时传递给当前脚本的参数的数目。

> 脚本的文件名总是作为参数传递给当前脚本，因此 `$argc` 的最小值为 `1`。

> 这个变量仅在 register_argc_argv 打开时可用。

## 示例

**`$argc` 范例**

```php


<?php
var_dump($argc);
?>

    
```

当使用这个命令执行: php script.php arg1 arg2 arg3

以上示例的输出类似于：

```text


int(4)

    
```

## 注释

> 也可以在 `$_SERVER['argc']` 中获取。

## 参见

`getopt()` `$argv`
