---
id: "zh-php-guide-features-cookies"
language: "php"
lang: "zh"
category: "guide"
name: "features.cookies"
title: "Cookie"
module: "features"
source_url: "https://www.php.net/manual/zh/features.cookies.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cookie

PHP 透明地支持 HTTP cookie。cookie 是一种在远程浏览器端储存数据并以此来跟踪和识别用户的机制。可以用 `setcookie()` 或 `setrawcookie()` 函数来设置 cookie。cookie 是 HTTP 标头的一部分，因此 `setcookie()` 函数必须在其它信息被输出到浏览器前调用，这和对 `header()` 函数的限制类似。可以使用输出缓冲函数来延迟脚本的输出，直到按需要设置好了所有的 cookie 或者其它HTTP头。

如果 variables_order 中包括“C”，则任何从客户端发送的 cookie 都会被自动包括进 `$_COOKIE` 自动全局数组。如果希望对一个 cookie 变量设置多个值，则需在 cookie 的名称后加 `[]` 符号。

关于更多细节以及有关浏览器问题的注意事项，参见 `setcookie()` 和 `setrawcookie()` 函数。
