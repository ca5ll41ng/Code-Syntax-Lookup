---
id: "zh-php-function-generator-rewind"
language: "php"
lang: "zh"
category: "function"
name: "Generator::rewind"
title: "执行生成器，直至并包含第一个 yield 语句"
signature: "public void Generator::rewind()"
module: "language"
source_url: "https://www.php.net/manual/zh/generator.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行生成器，直至并包含第一个 yield 语句

## 说明

```php
public void Generator::rewind()
```

执行生成器，直至并包含*第一个* 。若生成器已位于*第一个*  处，则不执行任何操作。若生成器曾向前推进超过某个  表达式，则此方法将抛出 `Exception`。

> 这是开始  循环时调用的*第一个*方法，不会在  循环*结束后*执行。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**`Generator::rewind()` 示例**

```php


<?php

function generator(): Generator
{
    echo "I'm a generator!\n";

    for ($i = 1; $i <= 3; $i++) {
        yield $i;
    }
}

// 初始化生成器
$generator = generator();

// 将生成器重置到第一个 yield 表达式的起始位置（如果尚未处于该位置）
$generator->rewind(); // I'm a generator!

// 此处无任何操作；生成器已处于重置状态
$generator->rewind(); // 没有输出（NULL）

// 会将生成器重置到第一个 yield 表达式（如果尚未处于该位置），并对其进行遍历
foreach ($generator as $value) {
    // 在生成第一个值后，生成器会停留在第一个 yield 表达式处，直到恢复执行并继续前进到下一个 yield
    echo $value, PHP_EOL; // 1

    break;
}

// 恢复执行后再次重置，不会产生错误，因为生成器尚未越过第一个 yield
$generator->rewind();

echo $generator->current(), PHP_EOL; // 1

// 不会产生错误，生成器仍处于第一个 yield 处
$generator->rewind();

// 此操作将生成器推进至第二个 yield 表达式
$generator->next();

try {
    // 此操作会抛出异常，因为生成器已推进至第二个 yield
    $generator->rewind(); // Fatal error: Uncaught Exception: Cannot rewind a generator that was already run
} catch (Exception $e) {
    echo $e->getMessage();
}

?>

    
```

以上示例会输出：

```text


I'm a generator!
1
1
Cannot rewind a generator that was already run

    
```
