---
id: "zh-php-function-function-stream-wrapper-register"
language: "php"
lang: "zh"
category: "function"
name: "stream_wrapper_register"
title: "注册一个用 PHP 类实现的 URL 封装协议"
signature: "bool stream_wrapper_register(string $protocol, string $class, int $flags = 0)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-wrapper-register.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注册一个用 PHP 类实现的 URL 封装协议

## 说明

 {{{ 

```php
bool stream_wrapper_register(string $protocol, string $class, int $flags = 0)
```

允许用户实现自定义的协议处理器和流，用于所有其它的文件系统函数中（例如 `fopen()`，`fread()` 等）。

 }}} 

## 参数

- **`$protocol`** — 待注册的封装的名字。有效的协议名字必须只包含字母数字、点（.）、加号（+）、连字符（-）。
- **`$class`** — 实现了 `$protocol` 的类名。
- **`$flags`** — 如果 `$protocol` 是一个 URL 协议，应该设置为 `STREAM_IS_URL`。默认为 0，本地流。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

当 `$protocol` 已经有处理者时，`stream_wrapper_register()` 将返回`false`

## 示例

 {{{ 

**如何注册一个 stream wrapper**

```php


<?php
$existed = in_array("var", stream_get_wrappers());
if ($existed) {
    stream_wrapper_unregister("var");
}
stream_wrapper_register("var", "VariableStream");
$myvar = "";

$fp = fopen("var://myvar", "r+");

fwrite($fp, "line1\n");
fwrite($fp, "line2\n");
fwrite($fp, "line3\n");

rewind($fp);
while (!feof($fp)) {
    echo fgets($fp);
}
fclose($fp);
var_dump($myvar);

if ($existed) {
    stream_wrapper_restore("var");
}

?>

    
```

以上示例会输出：

```text


line1
line2
line3
string(18) "line1
line2
line3
"

    
```

 }}} 

## 参见

 {{{ 

`class.streamwrapper`原型类 `stream.streamwrapper.example-1` `stream_wrapper_unregister()` `stream_wrapper_restore()` `stream_get_wrappers()`

 }}}
