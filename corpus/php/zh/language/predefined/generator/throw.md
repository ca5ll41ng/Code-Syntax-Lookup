---
id: "zh-php-function-generator-throw"
language: "php"
lang: "zh"
category: "function"
name: "Generator::throw"
title: "向生成器中抛入一个异常"
signature: "public mixed Generator::throw(Throwable $exception)"
module: "language"
source_url: "https://www.php.net/manual/zh/generator.throw.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向生成器中抛入一个异常

## 说明

```php
public mixed Generator::throw(Throwable $exception)
```

抛出一个异常到生成器并恢复生成器的执行。 与当前  表达式被 `throw $exception` 语句替换是一样的行为。

如果调用此方法时生成器已经关闭，则将会在调用者的上下文中抛出异常。

## 参数

- **`$exception`** — 抛出异常到生成器。

## 返回值

返回生成的值。

## 示例

**抛出异常到生成器**

```php


<?php
function gen() {
    echo "Foo\n";
    try {
        yield;
    } catch (Exception $e) {
        echo "Exception: {$e->getMessage()}\n";
    }
    echo "Bar\n";
}
 
$gen = gen();
$gen->rewind();
$gen->throw(new Exception('Test'));
?>

    
```

以上示例会输出：

```text


Foo
Exception: Test
Bar

    
```
