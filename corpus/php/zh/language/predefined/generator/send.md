---
id: "zh-php-function-generator-send"
language: "php"
lang: "zh"
category: "function"
name: "Generator::send"
title: "向生成器中传入一个值"
signature: "public mixed Generator::send(mixed $value)"
module: "language"
source_url: "https://www.php.net/manual/zh/generator.send.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向生成器中传入一个值

## 说明

```php
public mixed Generator::send(mixed $value)
```

向生成器中传入一个值，并且当做  表达式的结果，然后继续执行生成器。

如果当这个方法被调用时，生成器不在  表达式，那么在传入值之前，它会先运行到第一个  表达式。 因此没有必要调用 `Generator::next()` 让 PHP 生成器 “准备”（就像是 Python 那样做）。

## 参数

- **`$value`** — 传入生成器的值。这个值将会被作为生成器当前所在的  的返回值

## 返回值

返回生成的值。

## 示例

**用 `Generator::send()` 向生成器函数中传值**

```php


<?php
function printer() {
    echo "I'm printer!".PHP_EOL;
    while (true) {
        $string = yield;
        echo $string.PHP_EOL;
    }
}

$printer = printer();
$printer->send('Hello world!');
$printer->send('Bye world!');
?>

    
```

以上示例会输出：

```text


I'm printer!
Hello world!
Bye world!

    
```
