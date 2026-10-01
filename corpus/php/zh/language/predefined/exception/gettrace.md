---
id: "zh-php-function-exception-gettrace"
language: "php"
lang: "zh"
category: "function"
name: "Exception::getTrace"
title: "获取异常追踪信息"
signature: "final public array Exception::getTrace()"
module: "language"
source_url: "https://www.php.net/manual/zh/exception.gettrace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取异常追踪信息

## 说明

```php
final public array Exception::getTrace()
```

返回异常追踪信息。

## 参数

此函数没有参数。

## 返回值

返回包含异常追踪信息的数组（`array`）。

## 示例

**`Exception::getTrace()`示例**

```php


<?php
function test() {
 throw new Exception;
}

try {
 test();
} catch(Exception $e) {
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
