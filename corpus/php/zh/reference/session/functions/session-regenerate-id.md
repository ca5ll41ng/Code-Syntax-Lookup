---
id: "zh-php-function-function-session-regenerate-id"
language: "php"
lang: "zh"
category: "function"
name: "session_regenerate_id"
title: "使用新生成的会话 ID 更新现有会话 ID"
signature: "bool session_regenerate_id(bool $delete_old_session = false)"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-regenerate-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用新生成的会话 ID 更新现有会话 ID

## 说明

```php
bool session_regenerate_id(bool $delete_old_session = false)
```

`session_regenerate_id()` 在不修改当前会话中数据的前提下使用新的 ID 替换原有会话 ID。

如果启用了 session.use_trans_sid 选项， 那么必须在调用 `session_regenerate_id()` 函数之后开始进行输出工作， 否则会导致使用原有的会话 ID。

> 当前的 session_regenerate_id 并没有很好的处理在诸如移动数据网络和 WiFi 网络不稳定的场景。 因此，调用 session_regenerate_id 函数 可能会导致会话丢失。
>
> 你不应该直接销毁旧的会话所关联的数据， 而是应该使用时间戳机制来控制对于已经失效的会话 ID 的访问。 否则，可能会在并发访问的场景下导致会话数据不一致、 会话丢失等情况，甚至可能引发客户端（浏览器）创建很多无用的会话 ID。 但是，另外一方面来讲，立即删除会话中的数据 可以防止会话劫持攻击。

## 参数

- **`$delete_old_session`** — 是否删除原 ID 所关联的会话存储文件。 如果你需要避免会话并发访问冲突，那么不应该立即删除会话中的数据。 如果你需要防止会话劫持攻击，那么可以立即删除会话数据。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`session_regenerate_id()` 示例**

```php


<?php
// 注意：下列不是完整的代码，只是一个示例

session_start();

// 检查会话被销毁的时间戳
if (isset($_SESSION['destroyed'])
    && $_SESSION['destroyed'] < time() - 300) {
    // 通常不会发生这种情况。如果发生，那么可能是由于不稳定的网络状况或者被攻击导致的
    // 移除用户会话中的认证信息
    remove_all_authentication_flag_from_active_sessions($_SESSION['userid']);
    throw(new DestroyedSessionAccessException);
}

$old_sessionid = session_id();

// 设置会话销毁时间戳
$_SESSION['destroyed'] = time(); // session_regenerate_id() 保存旧会话数据

// 如果直接调用 session_regenerate_id() 函数可能会导致会话丢失的情况，
// 参见下面的示例
session_regenerate_id();

// 新创建的会话不需要时间戳
unset($_SESSION['destroyed']);

$new_sessionid = session_id();

echo "Old Session: $old_sessionid<br />";
echo "New Session: $new_sessionid<br />";

print_r($_SESSION);
?>

    
```

当前的会话模块未能很好的处理在网络不稳定的时候导致会话丢失的场景。 你需要自行管理会话 ID 避免调用 session_regenerate_id 导致会话丢失。

**通过 `session_regenerate_id()` 避免会话丢失**

```php


<?php
// 注意：下列不是完整的代码，只是一个示例
// my_session_start() 和 my_session_regenerate_id()
// 函数可以避免在网络不稳定的情况下导致会话丢失的问题。
// 并且还可以避免用户会话被攻击者利用

function my_session_start() {
    session_start();
    if (isset($_SESSION['destroyed'])) {
       if ($_SESSION['destroyed'] < time()-300) {
           // 通常不会发生这种情况。如果发生，那么可能是由于不稳定的网络状况或者被攻击导致的
           // 移除用户会话中的认证信息
           remove_all_authentication_flag_from_active_sessions($_SESSION['userid']);
           throw(new DestroyedSessionAccessException);
       }
       if (isset($_SESSION['new_session_id'])) {
           // 尚未完全过期，可能是由于网络不稳定引起的。
           // 尝试再次设置正确的会话 ID cookie。
           // 注意：如果你需要移除认证标记，那么不要尝试再次设置会话 ID。
           session_commit();
           session_id($_SESSION['new_session_id']);
           // 现在有了新的会话 ID 了。
           session_start();
           return;
       }
   }
}

function my_session_regenerate_id() {
    // 如果由于不稳定的网络导致没有创建会话 ID，
    // 那么就创建一个
    $new_session_id = session_create_id();
    $_SESSION['new_session_id'] = $new_session_id;
    
    // 设置销毁时间戳
    $_SESSION['destroyed'] = time();
    
    // 保存并关闭会话
    session_commit();

    // 使用新的会话 ID 开始会话
    session_id($new_session_id);
    ini_set('session.use_strict_mode', 0);
    session_start();
    ini_set('session.use_strict_mode', 1);
    
    // 新的会话不需要这 2 个数据了
    unset($_SESSION['destroyed']);
    unset($_SESSION['new_session_id']);
}
?>

    
```

## 参见

`session_id()` `session_create_id()` `session_start()` `session_destroy()` `session_reset()` `session_name()`
