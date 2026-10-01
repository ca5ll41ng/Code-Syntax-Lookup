---
id: "zh-php-syntax-class-errorexception"
language: "php"
lang: "zh"
category: "syntax"
name: "class.errorexception"
title: "ErrorException"
module: "language"
source_url: "https://www.php.net/manual/zh/class.errorexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ErrorException

ErrorException

   简介  错误异常。      类摘要    ErrorException   `extends` `Exception`  属性  `protected` `int` `severity` E_ERROR  继承的属性  方法   继承的方法       属性 
- **`severity`** — 异常级别

     示例  
**使用 `set_error_handler()` 函数将错误信息托管至 ErrorException**

 {{{ 

```php

 
<?php

set_error_handler(function (int $errno, string $errstr, string $errfile, int $errline) {
    if (!(error_reporting() & $errno)) {
        // 这个错误代码未包含在 error_reporting 中。
        return;
    }

    if ($errno === E_DEPRECATED || $errno === E_USER_DEPRECATED) {
        // 因为新的或意外的弃用会破坏应用程序，
        // 不要因弃用 warning 而抛出 Exception。
        return;
    }

    throw new \ErrorException($errstr, 0, $errno, $errfile, $errline);
});

// 反序列化已损坏的数据会触发 warning，
// 错误处理程序会将其转换为 ErrorException。
unserialize('broken data');

?>

     
```

以上示例的输出类似于：

```text

Fatal error: Uncaught ErrorException: unserialize(): Error at offset 0 of 11 bytes in test.php:16
Stack trace:
#0 [internal function]: {closure}(2, 'unserialize(): ...', 'test.php', 16)
#1 test.php(16): unserialize('broken data')
#2 {main}
  thrown in test.php on line 16

     
```
