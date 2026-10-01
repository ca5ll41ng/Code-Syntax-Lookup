---
id: "zh-php-function-function-session-start"
language: "php"
lang: "zh"
category: "function"
name: "session_start"
title: "启动新会话或者重用现有会话"
signature: "bool session_start(array $options = [])"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-start.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 启动新会话或者重用现有会话

## 说明

```php
bool session_start(array $options = [])
```

`session_start()` 会创建新会话或者重用现有会话。 如果通过 GET 或者 POST 方式，或者使用 cookie 提交了会话 ID， 则会重用现有会话。

当会话自动开始或者通过 `session_start()` 手动开始的时候， PHP 内部会调用会话处理程序的 open 和 read 回调函数。 会话处理程序可能是 PHP 默认的， 也可能是扩展提供的（SQLite 或者 Memcached 扩展）， 也可能是通过 `session_set_save_handler()` 设定的用户自定义会话处理程序。 通过 read 回调函数返回的现有会话数据（使用特殊的序列化格式存储）， PHP 会自动反序列化数据并且填充 $_SESSION 超级全局变量。

要想使用命名会话，请在调用 `session_start()` 函数 之前调用 `session_name()` 函数。

如果启用了 session.use_trans_sid 选项， `session_start()` 函数会注册一个内部输出处理程序， 该输出处理程序完成 URL 重写的工作。

如果用户联合使用 `ob_start()` 和 `ob_gzhandler` 函数， 那么函数的调用顺序会影响输出结果。 例如，必须在开始会话之前调用 `ob_gzhandler` 函数完成注册。

## 参数

- **`$options`** — 此参数是一个关联数组，如果提供，那么会用其中的项目覆盖 会话配置指示 中的配置项。此数组中的键无需包含 `session.` 前缀。 — 除了常规的会话配置指示项， 还可以在此数组中包含 `read_and_close` 选项。如果将此选项的值设置为 `true`， 那么会话文件会在读取完毕之后马上关闭， 因此，可以在会话数据没有变动的时候，避免不必要的文件锁。

## 返回值

成功开始会话返回 `true` ，反之返回 `false`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 当 `session_start()` 执行失败， 无法开始一个会话的时候，会返回 `false`， 并且不会初始化超级变量 `$_SESSION`。 |

## 示例

### 基本的会话示例

**`page1.php`**

```php


<?php
// page1.php

session_start();

echo 'Welcome to page #1';

$_SESSION['favcolor'] = 'green';
$_SESSION['animal']   = 'cat';
$_SESSION['time']     = time();

// 如果使用 cookie 方式传送会话 ID
echo '<br /><a href="page2.php">page 2</a>';

// 如果不是使用 cookie 方式传送会话 ID，则使用 URL 改写的方式传送会话 ID
echo '<br /><a href="page2.php?' . SID . '">page 2</a>';
?>

    
```

请求 `page1.php` 页面之后， 第二个页面 `page2.php` 会包含会话数据。 请查阅 会话参考 获取更多关于 会话 ID 传送的信息， 在该参考页面中有关于常量 `SID` 的详细说明。

**`page2.php`**

```php


<?php
// page2.php

session_start();

echo 'Welcome to page #2<br />';

echo $_SESSION['favcolor']; // green
echo $_SESSION['animal'];   // cat
echo date('Y m d H:i:s', $_SESSION['time']);

// 类似 page1.php 中的代码，你可能需要在这里处理使用 SID 的场景
echo '<br /><a href="page1.php">page 1</a>';
?>

    
```

### 调用 `session_start()` 的时候指定选项

**覆盖 Cookie 超时时间设定**

```php


<?php
// 设置 cookie 的有效时间为 1 天
session_start([
    'cookie_lifetime' => 86400,
]);
?>

    
```

**读取会话之后立即关闭会话存储文件**

```php


<?php
// 如果确定不修改会话中的数据，
// 我们可以在会话文件读取完毕之后立即关闭它
// 来避免由于给会话文件加锁导致其他页面阻塞
session_start([
    'cookie_lifetime' => 86400,
    'read_and_close'  => true,
]);

    
```

## 注释

> 要使用基于 cookie 的会话， 必须在输出开始之前调用 `session_start()` 函数。

> 建议使用 zlib.output_compression 来替代 `ob_gzhandler()`。

> 根据配置不同，本函数会发送几个 HTTP 响应头。 参考 `session_cache_limiter()` 来自定义 HTTP 响应头。

## 参见

`$_SESSION` session.auto_start 配置指示 `session_id()`
