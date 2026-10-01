---
id: "zh-php-function-function-setcookie"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["session_fixation"],"cwe":["CWE-384"],"params":[1]}
name: "setcookie"
title: "发送 Cookie"
signature: "bool setcookie(string $name, string $value = \"\", int $expires_or_options = 0, string $path = \"\", string $domain = \"\", bool $secure = false, bool $httponly = false)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.setcookie.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 发送 Cookie

## 说明

```php
bool setcookie(string $name, string $value = "", int $expires_or_options = 0, string $path = "", string $domain = "", bool $secure = false, bool $httponly = false)
```

自 PHP 7.3.0 起可用的替代签名（不支持命名参数）：

```php
bool setcookie(string $name, string $value = "", array $options = [])
```

`setcookie()` 用于定义 Cookie，会和其它 HTTP header 一起发送给客户端。和其他 HTTP header 一样，Cookie 必须在脚本输出任意内容*之前*发送 Cookie（这是协议限制）。该函数必须在输出任何内容（包括 `<html>` 和 `<head>` 或者任何空白字符）之前调用。

一旦设置 Cookie 后，下次打开页面时可以使用 `$_COOKIE` 读取。Cookie 值同样也存在于 `$_REQUEST`。

## 参数

[RFC 6265](6265) 提供了 `setcookie()` 每个参数的参考标准。

- **`$name`** — Cookie 名称。
- **`$value`** — Cookie 值。这个值储存于用户的电脑里，请勿储存敏感信息。比如 `$name` 是 `'cookiename'`，可通过 `$_COOKIE['cookiename']` 获取它的值。
- **`$expires_or_options`** — Cookie 的过期时间。这是 Unix 时间戳，即纪元以来的秒数。一种设置此值的方式是将 cookie 过期前的秒数与调用 `time()` 的结果相加。例如，`time()+60*60*24*30` 就是设置 Cookie 30 天后过期。还有一种选择就是使用 `mktime()` 函数。如果设置为 `0` 或者忽略，Cookie 会在会话结束时过期（关掉浏览器时）。
  > `$expires_or_options` 使用 Unix 时间戳而非 `Wdy, DD-Mon-YYYY HH:MM:SS GMT` 这样的日期格式，是因为 PHP 内部作了转换。


- **`$path`** — Cookie 有效的服务器路径。设置成 `'/'` 时，Cookie 对整个域名 `$domain` 有效。如果设置成 `'/foo/'`，Cookie 仅仅对 `$domain` 中 `/foo/` 目录及其子目录有效（比如 `/foo/bar/`）。默认值是设置 Cookie 时的当前目录。
- **`$domain`** — Cookie 的有效域名/子域名。设置成子域名（例如 `'www.example.com'`），会使 Cookie 对这个子域名和它的三级域名有效（例如 w2.www.example.com）。要让 Cookie 对整个域名有效（包括它的全部子域名），只要设置成域名就可以了（这个示例里是 `'example.com'`）。 — 旧版浏览器仍然在使用废弃的 [RFC 2109](2109)，需要一个前置的点 `.` 来匹配所有子域名。
- **`$secure`** — 设置这个 Cookie 是否仅仅通过安全的 HTTPS 连接传给客户端。设置成 `true` 时，只有安全连接存在时才会设置 Cookie。如果是在服务器端处理这个需求，程序员需要仅仅在安全连接上发送此类 Cookie（通过 `$_SERVER["HTTPS"]` 判断）。
- **`$httponly`** — 设置成 `true`，Cookie 仅可通过 HTTP 协议访问。这意思就是 Cookie 无法通过类似 JavaScript 这样的脚本语言访问。要有效减少 XSS 攻击时的身份窃取行为，可建议用此设置（虽然不是所有浏览器都支持），不过这个说法经常有争议。 `true` 或 `false`
- **`$options`** — 关联 `array`，可能会存在以下键 `expires`、`path`、`domain`、`secure`、`httponly` 和 `samesite`。如果存在其它的键，会生成 `E_WARNING` 级别的错误。这些值的含义跟同名参数的描述相同。`samesite` 元素的值应该是 `None`、`Lax` 或 `Strict`。如果没有指定任何允许的选项，它们的默认值与显式参数的默认值相同。如果省略 `samesite` 元素，则不设置 SameSite cookie 属性。
  > 要设置一个包含不在列出的关键字中的属性的 Cookie，使用 `header()`。


  > 若 `samesite` 为 `"None"`，则必须同时启用 `secure`，否则客户端将阻止该 Cookie。



## 返回值

如果在调用本函数以前就产生了输出，`setcookie()` 会失败并返回 `false`。如果 `setcookie()` 成功运行，返回 `true`。当然，它的意思并非用户是否已接受 Cookie。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | Cookie 的日期格式现在为 `'D, d M Y H:i:s \G\M\T'`； 以前是 `'D, d-M-Y H:i:s T'`。 |
| 7.3.0 | 新增对替代签名 `$options` 数组的支持。此签名还支持 SameSite cookie 属性的设置。 |

## 示例

下列示例的效果可通过浏览器开发者工具中的 Cookie 列表（通常位于 Storage 或 Application 标签页）进行观察。

**`setcookie()` 发送示例**

```php


<?php

$value = 'something from somewhere';

// 设置“会话 Cookie”，在浏览器关闭时失效
setcookie("TestCookie", $value);
// 设置一小时后失效的 Cookie
setcookie("TestCookie", $value, time()+3600);
// 设置仅适用于特定域名下特定路径的 Cookie
// 注意所使用的域名应与站点域名一致
setcookie("TestCookie", $value, time()+3600, "/~rasmus/", "example.com", true);

?>

   
```

注意，Cookie 的值部分会由 PHP 自动进行 URL 编码和解码。若要避免此行为，可改用 `setrawcookie()`。

要在后续请求中查看上述示例所设置的 Cookie 内容：

 
```php

<?php
// 打印一个单独的 Cookie
echo $_COOKIE["TestCookie"];

//  debug/test 查看所有 Cookie 的另一种方式
print_r($_COOKIE);
?>

   
```

 

**`setcookie()` 删除示例**

要删除 Cookie，需将过期时间设为过去的时间值（但不能设为零，因为零专用于会话 Cookie）。

删除前例中设置的 Cookie：

```php


<?php
// 设置过期时间为一个小时前
setcookie("TestCookie", "", time() - 3600);
setcookie("TestCookie", "", time() - 3600, "/~rasmus/", "example.com", 1);
?>

   
```

**`setcookie()` 和数组**

在 Cookie 名称中使用数组表示法，可设置“Cookie 数组”。其效果是为数组中的每个元素分别设置一个 Cookie；当脚本接收到 Cookie 时，所有值会被合并到一个以该 Cookie 名称命名的数组中：

```php


<?php
// 设置 Cookie
setcookie("cookie[three]", "cookiethree");
setcookie("cookie[two]", "cookietwo");
setcookie("cookie[one]", "cookieone");

// 网页刷新后，打印出以下内容
if (isset($_COOKIE['cookie'])) {
    foreach ($_COOKIE['cookie'] as $name => $value) {
        $name = htmlspecialchars($name);
        $value = htmlspecialchars($value);
        echo "$name : $value <br />\n";
    }
}
?>

   
```

以上示例会输出：

```text


three : cookiethree
two : cookietwo
one : cookieone

   
```

> 使用 `[` 和 `]` 分隔符作为 cookie 名称的一部分不符合 RFC 6265 第 4 节。但根据 RFC 6265 第 5 节应该由 user agent 支持。

## 注释

> 可使用输出缓冲机制，使脚本在调用此函数前产生输出。会缓冲所有输出，直到冲刷缓冲（手动冲刷或脚本执行结束时自动刷新）。实现方式是在脚本中调用 `ob_start()` 和 `ob_end_flush()`，或在 php.ini 或服务器配置文件中启用 `output_buffering` 配置项。

注意避坑：

- 在页面（Cookie 可见的页面）下次刷新前，Cookie 不会生效。 测试 Cookie 是否已经成功设置，需要在下次页面加载时、Cookie 过期前检测。 过期时间是通过 `$expires_or_options` 参数设置的。 直接调用 `print_r($_COOKIE);` 调试检测 Cookie 是个很好的方式。
- 为同一个参数再次设置 Cookie 前，必须先把它删掉。 如果 `$value` 的值是空 string，并且其他参数和上次调用 `setcookie()` 仍旧一样， 则指定的名称会被远程客户端删除。 内部的实现是：将值设置成 `'deleted'`，且过去的过期时间。
- 因为设置值成 `false` 会导致 Cookie 被删除，所以不应该使用布尔值。代替方式：*0* 是 `false`，*1* 是 `true`。
- Cookie 名称可以设置成数组名称，PHP 脚本里会是数组，浏览器储存的是单独分开的 Cookie。可以考虑使用 `json_encode()` 为一个 Cookie 设置多个名称和值。不建议将 `serialize()` 用于此处，因为它会导致安全漏洞。

多次调用 `setcookie()` 会按调用顺序执行。

## 参见

 `header()` `setrawcookie()` Cookie 章节 [RFC 6265](6265) [RFC 2109](2109)
