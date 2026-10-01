---
id: "zh-php-function-function-print"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["xss"],"cwe":["CWE-79"],"params":[1]}
name: "print"
title: "输出字符串"
signature: "int print(string $expression)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.print.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出字符串

## 说明

```php
int print(string $expression)
```

输出 `$expression`。

`print` 不是函数而是语言结构。它的参数是跟在 `print` 关键字后面的表达式，并且不用括号分割。

和 `echo()` 最主要的区别是 `print` 仅接受一个参数，并始终返回 `1`。

## 参数

- **`$expression`** — 要输出的表达式。即使启用 `strict_types` 指令，非字符串也会强制转换为字符串。

## 返回值

总是返回 `1`。

## 示例

**`print()` 示例**

```php


<?php
print "print does not require parentheses.";
print PHP_EOL;

// 不会新增新行或者空格；下面会在一行中输出“helloworld”
print "hello";
print "world";
print PHP_EOL;

print "This string spans
multiple lines. The newlines will be
output as well";
print PHP_EOL;

print "This string spans\nmultiple lines. The newlines will be\noutput as well.";
print PHP_EOL;

// 参数可以是任何生成字符串的表达式
$foo = "example";
print "foo is $foo"; // foo is example
print PHP_EOL;

$fruits = ["lemon", "orange", "banana"];
print implode(" and ", $fruits); // lemon and orange and banana
print PHP_EOL;

// 即使使用了 declare(strict_types=1)，非字符串表达式也会强制转换为字符串
print 6 * 7; // 42
print PHP_EOL;

// 因为 print 有返回值，所以可以在如下表达式中使用
// 以下输出“hello world”
if ( print "hello" ) {
    echo " world";
}
print PHP_EOL;

// 以下输出“true”
( 1 === 1 ) ? print 'true' : print 'false';
print PHP_EOL;
?>

    
```

## 注释

> 使用括号
>
> 用括号括住 `print` 的参数并不会引发语法错误，而且会产生看起来像是普通函数调用的语法。然而，这可能会产生误导，因为括号实际上是输出表达式的一部分，而非 `print` 语法本身的一部分。 ```php <?php print "hello"; // 输出“hello” print("hello"); // 也会输出“hello”，因为 ("hello") 是有效的表达式 print(1 + 2) * 3; // 输出“9”；会首先对括号内的 1+2 进行求值，然后是 3*3 // print 语句会将整个表达式视为一个参数 if ( print("hello") && false ) { print " - inside if"; } else { print " - inside else"; } // 输出“ - inside if” // 首先对表达式 ("hello") && false 求值， false // 强制转换为空字符串“”且打印 print // 结构，然后返回 1，所以运行 if 块中代码 ?> ```
>
> 当在大表达式中使用 `print` 时，需要将关键字及其参数放在括号中以便得出预期的结果： ```php <?php if ( (print "hello") && false ) { print " - inside if"; } else { print " - inside else"; } // 输出“hello - inside else” // 跟上个示例不同，首先对表达式 (print "hello") 求值 // 输出“hello”之后，print 返回 1 // 由于 1 && false 为 false，因此运行 else 块中代码 print "hello " && print "world"; // 输出“world1”；首先对 print "world" 求值， // 然后表达式 "hello " && 1 传递给左侧的 print (print "hello ") && (print "world"); // 输出“hello world”；括号强制 print 表达式 // 在 && 之前求值 ?> ```

> 因为是语言构造器而不是函数，不能被 可变函数 或者 命名参数 调用。

## 参见

`echo()` `printf()` `flush()` 指定字面字符串的方式
