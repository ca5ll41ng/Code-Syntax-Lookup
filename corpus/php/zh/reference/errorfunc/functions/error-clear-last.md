---
id: "zh-php-function-function-error-clear-last"
language: "php"
lang: "zh"
category: "function"
name: "error_clear_last"
title: "清除最近一次错误"
signature: "void error_clear_last()"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.error-clear-last.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 清除最近一次错误

## 说明

```php
void error_clear_last()
```

## 参数

此函数没有参数。

## 返回值

清除最近一次错误，使它无法通过 `error_get_last()` 获取。

## 示例

**`error_clear_last()` 例子**

```php


<?php
var_dump(error_get_last());
error_clear_last();
var_dump(error_get_last());

@$a = $b;

var_dump(error_get_last());
error_clear_last();
var_dump(error_get_last());
?>

    
```

以上示例的输出类似于：

```text


NULL
NULL
array(4) {
  ["type"]=>
  int(8)
  ["message"]=>
  string(21) "Undefined variable: b"
  ["file"]=>
  string(9) "%s"
  ["line"]=>
  int(6)
}
NULL

    
```

## 参见

Error 常量
