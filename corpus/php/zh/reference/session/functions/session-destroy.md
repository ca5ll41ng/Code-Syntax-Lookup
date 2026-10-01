---
id: "zh-php-function-function-session-destroy"
language: "php"
lang: "zh"
category: "function"
name: "session_destroy"
title: "销毁一个会话中的全部数据"
signature: "bool session_destroy()"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-destroy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 销毁一个会话中的全部数据

## 说明

```php
bool session_destroy()
```

`session_destroy()` 销毁当前会话中的全部数据， 但是不会重置当前会话所关联的全局变量， 也不会重置会话 cookie。 如果需要再次使用会话变量， 必须重新调用 `session_start()` 函数。

> 通常情况下，在你的代码中不必调用 `session_destroy()` 函数， 可以直接清除 $_SESSION 数组中的数据来实现会话数据清理。

为了彻底销毁会话，必须同时重置会话 ID。 如果是通过 cookie 方式传送会话 ID 的，那么同时也需要 调用 `setcookie()` 函数来 删除客户端的会话 cookie。

当启用了 session.use_strict_mode 配置项的时候，你不需要删除过期会话 ID 对应的 cookie， 因为会话模块已经不再接受携带过期会话 ID 的 cookie 了， 然后它会生成一个新的会话 ID cookie。 建议所有的站点都启用 session.use_strict_mode 配置项。

> 过早的删除会话中的数据可能会导致不可预期的结果。 例如，当存在从 JavaScript 或者 URL 链接过来的并发请求的时候， 某一个请求删除了会话中的数据，会导致其他的并发请求无法使用会话数据。
>
> 虽然当前的会话处理模块不会接受为空的会话 ID， 但是由于客户端（浏览器）的处理方式， 立即删除会话中的数据可能会导致生成为空的会话 cookie， 进而导致客户端生成很多不必要的会话 ID cookie。
>
> 为了避免这种情况的发生，你需要在 $_SESSION 中设置一个时间戳， 在这个时间戳之后的对于会话的访问都将被拒绝。 或者，确保你的应用中不存在并发请求。 这个规则同样适用于 `session_regenerate_id()`。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**销毁会话数据以及 `$_SESSION`**

```php


<?php
// 初始化会话。
// 如果要使用会话，别忘了现在就调用：
session_start();

// 重置会话中的所有变量
$_SESSION = array();

// 如果要清理的更彻底，那么同时删除会话 cookie
// 注意：这样不但销毁了会话中的数据，还同时销毁了会话本身
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// 最后，销毁会话
session_destroy();
?>

    
```

## 参见

session.use_strict_mode `session_reset()` `session_regenerate_id()` `unset()` `setcookie()`
