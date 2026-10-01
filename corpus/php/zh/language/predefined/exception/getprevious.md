---
id: "zh-php-function-exception-getprevious"
language: "php"
lang: "zh"
category: "function"
name: "Exception::getPrevious"
title: "返回前一个 Throwable"
signature: "final public Throwable|null Exception::getPrevious()"
module: "language"
source_url: "https://www.php.net/manual/zh/exception.getprevious.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回前一个 Throwable

## 说明

```php
final public Throwable|null Exception::getPrevious()
```

返回前一个 `Throwable` （传递给 `Exception::__construct()`方法的第三个参数）。

## 参数

此函数没有参数。

## 返回值

返回异常链中的前一个异常 `Throwable`，否则返回`null`。

## 示例

**`Exception::getPrevious()`示例**

追踪异常，并循环打印。

```php


<?php
class MyCustomException extends Exception {}

function doStuff() {
    try {
        throw new InvalidArgumentException("You are doing it wrong!", 112);
    } catch(Exception $e) {
        throw new MyCustomException("Something happend", 911, $e);
    }
}


try {
    doStuff();
} catch(Exception $e) {
    do {
        printf("%s:%d %s (%d) [%s]\n", $e->getFile(), $e->getLine(), $e->getMessage(), $e->getCode(), get_class($e));
    } while($e = $e->getPrevious());
}
?>

    
```

以上示例的输出类似于：

```text


/home/bjori/ex.php:8 Something happend (911) [MyCustomException]
/home/bjori/ex.php:6 You are doing it wrong! (112) [InvalidArgumentException]

    
```

## 参见

`Throwable::getPrevious()`
