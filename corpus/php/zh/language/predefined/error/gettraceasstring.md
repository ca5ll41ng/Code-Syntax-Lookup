---
id: "zh-php-function-error-gettraceasstring"
language: "php"
lang: "zh"
category: "function"
name: "Error::getTraceAsString"
title: "获取字符串形式的调用栈（stack trace）"
signature: "final public string Error::getTraceAsString()"
module: "language"
source_url: "https://www.php.net/manual/zh/error.gettraceasstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取字符串形式的调用栈（stack trace）

## 说明

```php
final public string Error::getTraceAsString()
```

以字符串形式返回 stack trace。

## 参数

此函数没有参数。

## 返回值

以字符串形式返回 stack trace。

## 示例

**`Error::getTraceAsString()` 例子**

```php


<?php
function test() {
    throw new Error;
}

try {
    test();
} catch(Error $e) {
    echo $e->getTraceAsString();
}
?>

    
```

以上示例的输出类似于：

```text


#0 /home/bjori/tmp/ex.php(7): test()
#1 {main}

    
```

## 参见

`Throwable::getTraceAsString()`
