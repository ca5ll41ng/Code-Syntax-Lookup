---
id: "zh-php-function-function-get-browser"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "get_browser"
title: "获取浏览器具有的功能"
signature: "object|array|false get_browser(string|null $user_agent = null, bool $return_array = false)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.get-browser.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取浏览器具有的功能

## 说明

```php
object|array|false get_browser(string|null $user_agent = null, bool $return_array = false)
```

通过查找 `browscap.ini` 文件中的浏览器信息，尝试检测用户的浏览器所具有的功能。

## 参数

- **`$user_agent`** — 要分析的用户代理。默认使用HTTP头中User-Agent的值，不过，你可以通过传递该参数改变User-Agent。(比如查找另一个浏览器的信息) — 你可以传递一个 `null` 来忽略该参数。
- **`$return_array`** — 如果设置为 `true`，该函数会返回一个 `array`，而不是 `object`。

## 返回值

信息会以包含一系列数据的数组或者对象返回。例如：浏览器的主版本号、次版本号和ID字符串；框架、JavaScript、cookies等功能是否支持 `true`/`false` 的值。

`cookies` 的值仅意味着浏览器是否具有接收cookies的功能，不代表用户是否已允许启用cookies。 测试的唯一办法，只有通过 `setcookie()` 设置一个cookie，刷新页面并检测该cookie的值。

当无法检索到信息时返回 `false`，比如未设置 php.ini 中的 browscap 配置项。

## 示例

**列出所有用户浏览器的信息**

```php


<?php
echo $_SERVER['HTTP_USER_AGENT'] . "\n\n";

$browser = get_browser(null, true);
print_r($browser);
?>

    
```

以上示例的输出类似于：

```text


Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7) Gecko/20040803 Firefox/0.9.3

Array
(
    [browser_name_regex] => ^mozilla/5\.0 (windows; .; windows nt 5\.1; .*rv:.*) gecko/.* firefox/0\.9.*$
    [browser_name_pattern] => Mozilla/5.0 (Windows; ?; Windows NT 5.1; *rv:*) Gecko/* Firefox/0.9*
    [parent] => Firefox 0.9
    [platform] => WinXP
    [browser] => Firefox
    [version] => 0.9
    [majorver] => 0
    [minorver] => 9
    [cssversion] => 2
    [frames] => 1
    [iframes] => 1
    [tables] => 1
    [cookies] => 1
    [backgroundsounds] =>
    [vbscript] =>
    [javascript] => 1
    [javaapplets] => 1
    [activexcontrols] =>
    [cdf] =>
    [aol] =>
    [beta] => 1
    [win16] =>
    [crawler] =>
    [stripper] =>
    [wap] =>
    [netclr] =>
)

    
```

## 注释

> 为了能让该函数运作，在 php.ini 中配置的 browscap 必须指向 `browscap.ini` 文件的正确位置。
>
> `browscap.ini` 并未内置在PHP中，不过你可以在这里找到最新的 [php_browscap.ini]()。
>
> `browscap.ini` 包含的诸多浏览器信息依赖于用户更新该数据库。该文件的格式不言自明。
