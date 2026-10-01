---
id: "zh-php-function-function-eval"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["eval code_injection"],"cwe":["CWE-95"],"params":[1]}
name: "eval"
title: "把字符串作为PHP代码执行"
signature: "mixed eval(string $code)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.eval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 把字符串作为PHP代码执行

## 说明

```php
mixed eval(string $code)
```

把指定 `$code` 作为 PHP 代码执行。

正在执行的代码继承调用 `eval()` 所在行的变量作用域。该行中任何有效变量都可在执行的代码中读取和修改。但定义的所有函数和类都将在全局命名空间中定义。换句话说，编译器将执行的代码视为单独 included 后的文件。

> `eval()` 语言构造*非常危险*，因为它允许执行任意 PHP 代码。*因此不鼓励使用它。*如果已经仔细验证过除了使用此构造以外别无他法, 请多加注意不要在未事先正确验证的情况下*将任何用户提供的数据传递到*其中。

## 参数

- **`$code`** — 需要被执行的字符串 — 代码不能包含打开/关闭 PHP tags。比如， `'echo "Hi!";'` 不能这样传入： `'<?php echo "Hi!"; ?>'`。但仍然可以用合适的 PHP tag 来离开、重新进入 PHP 模式。比如 `'echo "In PHP mode!"; ?>In HTML mode!<?php echo "Back in PHP mode!";'`。 — 除此之外，传入的必须是有效的 PHP 代码。所有的语句必须以分号结尾。比如 `'echo "Hi!"'` 会导致一个 parse error，而 `'echo "Hi!";'` 则会正常运行。 — `return` 语句会立即中止当前字符串的执行。 — 代码执行的作用域是调用 `eval()` 处的作用域。因此，`eval()` 里任何的变量定义、修改，都会在函数结束后被保留。

## 返回值

`eval()` 返回 `null`，除非在执行的代码中 `return` 了一个值，函数返回传递给 `return` 的值。 PHP 7 开始，执行的代码里如果有一个 parse error，`eval()` 会抛出 `ParseError` 异常。在 PHP 7 之前， 如果在执行的代码中有 parse error，`eval()` 返回 `false`，之后的代码将正常执行。无法使用 `set_error_handler()` 捕获 `eval()` 中的解析错误。

## 示例

**`eval()` 例子 - 简单的文本合并**

```php


<?php
$string = 'cup';
$name = 'coffee';
$str = 'This is a $string with my $name in it.';
echo $str. "\n";
eval("\$str = \"$str\";");
echo $str. "\n";
?>

    
```

以上示例会输出：

```text


This is a $string with my $name in it.
This is a cup with my coffee in it.

    
```

## 注释

> 因为是语言构造器而不是函数，不能被 可变函数 或者 命名参数 调用。

> 和直接将结果输出到浏览器一样，可使用输出控制函数来捕获当前函数的输出，然后(例如)保存到一个 `string` 中。

> 如果在执行的代码中产生了一个致命的错误（fatal error），整个脚本会退出。

## 参见

`call_user_func()`
