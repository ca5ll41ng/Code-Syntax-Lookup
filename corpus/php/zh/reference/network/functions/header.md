---
id: "zh-php-function-function-header"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["header_injection"],"cwe":["CWE-601"],"params":[1]}
name: "header"
title: "发送原生 HTTP 头"
signature: "void header(string $string, bool $replace = true, [int $response_code = ...])"
module: "network"
source_url: "https://www.php.net/manual/zh/function.header.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 发送原生 HTTP 头

## 说明

```php
void header(string $string, bool $replace = true, [int $response_code = ...])
```

`header()` 用于发送原生的 HTTP 头。关于 HTTP 头的更多信息请参考 [HTTP/1.1 specification](2616)。

请注意 `header()` 必须在任何实际输出之前调用，不管是普通的 HTML 标签，还是文件或 PHP 输出的空行，空格。这是个常见的错误，在通过`include()`，`require()`，或者其访问其他文件里面的函数的时候，如果在`header()`被调用之前，其中有空格或者空行。 同样的问题也存在于单独的 PHP/HTML 文件中。 ```php <html> <?php /* This will give an error. Note the output * above, which is before the header() call */ header('Location: http://www.example.com/'); exit; ?> ```

## 参数

- **`$string`** — 头字符串。 — 有两种特别的头。第一种以“`HTTP/`”开头的 (case is not significant)，将会被用来计算出将要发送的HTTP状态码。 例如在 Apache 服务器上用 PHP 脚本来处理不存在文件的请求（使用 `ErrorDocument` 指令）， 就会希望脚本响应了正确的状态码。 — ```php <?php // 本示例演示了 "HTTP/" 的特殊例子，典型用法的最佳实践，包括： // 1. header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found"); // （覆盖 http 状态消息，兼容还在使用 HTTP/1.0 的客户端） // 2. http_response_code(404); （使用默认消息） header("HTTP/1.1 404 Not Found"); ?> ``` — 第二种特殊情况是“Location:”的头信息。它不仅把报文发送给浏览器，而且还将返回给浏览器一个 `REDIRECT`（302）的状态码，除非状态码已经事先被设置为了`201`或者`3xx`。 — ```php <?php header("Location: http://www.example.com/"); /* Redirect browser */ /* Make sure that code below does not get executed when we redirect. */ exit; ?> ```
- **`$replace`** — 可选参数 `$replace` 表明是否用后面的头替换前面相同类型的头。 默认情况下会替换。如果传入 `false`，就可以强制使相同的头信息并存。例如： — ```php <?php header('WWW-Authenticate: Negotiate'); header('WWW-Authenticate: NTLM', false); ?> ```
- **`$response_code`** — 强制指定 HTTP 响应的值。注意，这个参数只有在报文字符串（`$header`）不为空的情况下才有效。

## 返回值

没有返回值。

## 错误／异常

当 header 发送失败时，`header()` 会抛出 `E_WARNING` 级别的错误

## 示例

**下载对话框**

如果你想提醒用户去保存你发送的数据，例如保存一个生成的PDF文件。你可以使用[Content-Disposition](2183)的报文信息来提供一个推荐的文件名，并且强制浏览器显示一个文件下载的对话框。

```php


<?php
// 输出 PDF 文件
header('Content-type: application/pdf');

// 名称为 downloaded.pdf
header('Content-Disposition: attachment; filename="downloaded.pdf"');

// 该 PDF 来源于 original.pdf
readfile('original.pdf');
?>

    
```

**缓存指令**

PHP 脚本经常生成一些动态内容，它不该被客户端、服务器与浏览器之间的代理缓存。 许多代理与客户端都支持这样强制禁用缓存：

```php


<?php
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // 过去的日期
?>

    
```

> 也许你会遇到这样的情况，那就是即使你没使用上面这段代码，你的页面也没有被缓存。大多数情况是因为用户可以自己设置他们的浏览器从而改变浏览器默认的缓存行为。一旦发送了上面这段报文信息，那么你就应该重写那些可能用到缓存了的代码。
>
> 此外，在启用session的情况下，`session_cache_limiter()`和`session.cache_limiter`的配置可以用来自动地生成正确的缓存相关的头信息。

**设置一个 Cookie**

`setcookie()` 提供了一个方便的方式来设置 Cookie。 要设置一个包含 `setcookie()` 函数不支持的属性的 Cookie，可以使用 `header()`。

例如，以下代码设置了一个包含 `Partitioned` 属性的 Cookie。

```php


<?php
header('Set-Cookie: name=value; Secure; Path=/; SameSite=None; Partitioned;');
?>

    
```

## 注释

> 数据头只会在SAPI支持时得到处理和输出。

> 你所有需要输出到浏览器的数据将会一直缓存在服务器端，直到你发送他们，这将造成比较大的资源开销。你可以是用输出缓冲来避开这个问题。你可以通过在脚本里使用`ob_start()`和`ob_end_flush()`或者直接在你的php.ini文件里设置`output_buffering`，也可以直接在服务器的配置文件里设置。

> HTTP状态信息的报文永远都是最新被发送到客户端的，而不管`header()`是否是在最先发送的。报文状态码可能会被重写，当调用`header()`来设定新的状态码，除非HTTP报文已经被发送了。

> 绝大多数现代浏览器的 [Location:](#section-7.1.2) 都支持相对 URI，但也有一些旧浏览器需要绝对 URI：包含协议、主机名、绝对路径。 一般情况下，可以借助 `$_SERVER['HTTP_HOST']`、`$_SERVER['PHP_SELF']`、 `dirname()` 将相对地址组合成绝对 URI： ```php <?php /* 根据当前请求所在的目录，重定向到不同的页面 */ $host = $_SERVER['HTTP_HOST']; $uri = rtrim(dirname($_SERVER['PHP_SELF']), '/\\'); $extra = 'mypage.php'; header("Location: http://$host$uri/$extra"); exit; ?> ```

> 在执行Location header跳转的时候，Session ID无法通传递的，即使session.use_trans_sid是激活状态的。只能通过手动传递using `SID`的值来实现。

## 参见

`headers_sent()` `setcookie()` `http_response_code()` `header_remove()` `headers_list()` The section on HTTP authentication
