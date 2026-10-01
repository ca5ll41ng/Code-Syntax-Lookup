---
id: "zh-php-syntax-language-operators-execution"
language: "php"
lang: "zh"
category: "syntax"
name: "language.operators.execution"
title: "执行运算符"
module: "language"
source_url: "https://www.php.net/manual/zh/language.operators.execution.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行运算符

执行

PHP 支持一个执行运算符：反引号（````）。注意这不是单引号！PHP 将尝试将反引号中的内容作为 shell 命令来执行，并将其输出信息返回（即，可以赋给一个变量而不是简单地丢弃到标准输出）。使用反引号运算符“`”的效果与函数 `shell_exec()` 相同。

**反引号运算符**

```php


<?php
$output = `ls -al`;
echo "<pre>$output</pre>";
?>

   
```

> 关闭了 `shell_exec()` 时反引号运算符是无效的。

> 与其它某些语言不同，反引号不能在双引号字符串中使用。

### 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 已弃用将反引号运算符作为 `shell_exec()` 的别名。 |

### 参见

程序执行函数 `popen()` `proc_open()` PHP 的命令行模式
