---
id: "zh-php-function-error-getprevious"
language: "php"
lang: "zh"
category: "function"
name: "Error::getPrevious"
title: "返回先前的 Throwable"
signature: "final public Throwable|null Error::getPrevious()"
module: "language"
source_url: "https://www.php.net/manual/zh/error.getprevious.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回先前的 Throwable

## 说明

```php
final public Throwable|null Error::getPrevious()
```

返回先前的 Throwable（`Error::__construct()` 的第三个参数）。

## 参数

此函数没有参数。

## 返回值

如果有的话，返回先前的 `Throwable`，否则返回 `null` 。

## 示例

**`Error::getPrevious()` 例子**

循环输出错误栈。

```php


<?php
class MyCustomError extends Error {}

function doStuff() {
    try {
        throw new InvalidArgumentError("You are doing it wrong!", 112);
    } catch(Error $e) {
        throw new MyCustomError("Something happened", 911, $e);
    }
}


try {
    doStuff();
} catch(Error $e) {
    do {
        printf("%s:%d %s (%d) [%s]\n", $e->getFile(), $e->getLine(), $e->getMessage(), $e->getCode(), get_class($e));
    } while($e = $e->getPrevious());
}
?>

    
```

以上示例的输出类似于：

```text


/home/bjori/ex.php:8 Something happened (911) [MyCustomError]
/home/bjori/ex.php:6 You are doing it wrong! (112) [InvalidArgumentError]

    
```

## 参见

`Throwable::getPrevious()`
