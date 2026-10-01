---
id: "zh-php-function-error-gettrace"
language: "php"
lang: "zh"
category: "function"
name: "Error::getTrace"
title: "获取调用栈（stack trace）"
signature: "final public array Error::getTrace()"
module: "language"
source_url: "https://www.php.net/manual/zh/error.gettrace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取调用栈（stack trace）

## 说明

```php
final public array Error::getTrace()
```

返回 stack trace。

## 参数

此函数没有参数。

## 返回值

返回 `array` 的 stack trace。

## 示例

**`Error::getTrace()` 例子**

```php


<?php
function test() {
 throw new Error;
}

try {
 test();
} catch(Error $e) {
 var_dump($e->getTrace());
}
?>

    
```

以上示例的输出类似于：

```text


array(1) {
  [0]=>
  array(4) {
    ["file"]=>
    string(22) "/home/bjori/tmp/ex.php"
    ["line"]=>
    int(7)
    ["function"]=>
    string(4) "test"
    ["args"]=>
    array(0) {
    }
  }
}

    
```

## 参见

`Throwable::getTrace()`
