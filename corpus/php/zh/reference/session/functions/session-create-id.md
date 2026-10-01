---
id: "zh-php-function-function-session-create-id"
language: "php"
lang: "zh"
category: "function"
name: "session_create_id"
title: "创建新的会话 ID"
signature: "string|false session_create_id(string $prefix = \"\")"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-create-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建新的会话 ID

## 说明

```php
string|false session_create_id(string $prefix = "")
```

`session_create_id()` 用于为当前会话创建新的会话 ID。它返回无冲突的会话 ID。

如果会话未处于活动状态，则会省略冲突检查。

会话 ID 根据 php.ini 的设置来创建。

重要的是，GC 任务脚本需要使用与 Web 服务器相同的用户 ID。 否则，可能会遇到权限问题，尤其是在使用文件保存处理程序时。

## 参数

- **`$prefix`** — 如果指定了 `$prefix`，新的会话 ID 将以 `$prefix` 作为前缀。会话 ID 中并非所有字符都被允许。允许的字符范围为 `[a-zA-Z0-9,-]`。最大长度为 256 个字符。

## 返回值

`session_create_id()` 返回当前会话的新的无冲突会话 ID。如果在没有活动会话的情况下使用，则会省略冲突检查。 失败时返回 `false`。

## 示例

**`session_create_id()` 与 `session_regenerate_id()` 的使用示例**

```php


<?php
// 自定义会话启动函数，支持时间戳管理
function my_session_start() {
    session_start();
    // 不允许使用过期的会话 ID
    if (!empty($_SESSION['deleted_time']) && $_SESSION['deleted_time'] < time() - 180) {
        session_destroy();
        session_start();
    }
}

// 自定义会话 ID 重新生成函数
function my_session_regenerate_id() {
    // 在会话活动时调用 session_create_id()
    // 以确保不会产生冲突。
    if (session_status() != PHP_SESSION_ACTIVE) {
        session_start();
    }
    // 警告：切勿使用机密字符串作为前缀！
    $newid = session_create_id('myprefix-');
    // 设置删除时间戳。会话数据不能立即删除，原因如下。
    $_SESSION['deleted_time'] = time();
    // 结束会话
    session_commit();
    // 确保接受用户定义的会话 ID
    // 注意：正常操作必须启用 use_strict_mode。
    ini_set('session.use_strict_mode', 0);
    // 设置新的自定义会话 ID
    session_id($newid);
    // 使用自定义会话 ID 启动
    session_start();
}

// 确保启用了 use_strict_mode。
// 出于安全原因，use_strict_mode 是必需的。
ini_set('session.use_strict_mode', 1);
my_session_start();

// 在以下情况下必须重新生成会话 ID：
//  - 用户登录时
//  - 用户登出时
//  - 经过一段时间后
my_session_regenerate_id();

// 编写有用的代码
?>

    
```

## 参见

`session_regenerate_id()` `session_start()` session.use_strict_mode `SessionHandler::create_sid()`
