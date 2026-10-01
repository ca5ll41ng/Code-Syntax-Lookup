---
id: "zh-php-syntax-function-return"
language: "php"
lang: "zh"
category: "syntax"
name: "function.return"
title: "return"
module: "language"
source_url: "https://www.php.net/manual/zh/function.return.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# return

`return` 将程序控制返还给调用模块。 将在调用模块中执行的下一句表达式中继续。

如果在一个函数中调用 `return()` 语句，将立即结束此函数的执行并将它的参数作为函数的值返回。`return()` 也会终止 `eval()` 语句或者脚本文件的执行。

如果在全局范围中调用，则当前脚本文件中止运行。如果当前脚本文件是被 `include()` 的或者 `require()` 的，则控制交回调用文件。此外，如果当前脚本是被 `include()` 的，则 `return()` 的值会被当作 `include()` 调用的返回值。如果在主脚本文件中调用 `return()`，则脚本中止运行。如果当前脚本文件是在 php.ini 中的配置选项 auto_prepend_file 或者 auto_append_file 所指定的，则此脚本文件中止运行。

更多信息见返回值。

> 注意既然 `return()` 是语言结构而不是函数，因此其参数没有必要用括号将其括起来，也不推荐这样用。

> 如果没有提供参数，则一定不能用括号，此时返回 `null`。如果调用 `return` 时加上了括号却又没有参数会导致解析错误。

自 PHP 7.1.0 起，如果函数中声明的返回类型是 `void` 而带了返回的参数，将导致 `E_COMPILE_ERROR`，相反声明了返回类型而未带参数也会同样导致该错误。
