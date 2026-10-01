---
id: "zh-php-function-function-session-set-save-handler"
language: "php"
lang: "zh"
category: "function"
name: "session_set_save_handler"
title: "设置用户自定义会话存储函数"
signature: "bool session_set_save_handler(callable $open, callable $close, callable $read, callable $write, callable $destroy, callable $gc, [callable $create_sid = ...], [callable $validate_sid = ...], [callable $update_timestamp = ...])"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-set-save-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置用户自定义会话存储函数

## 说明

```php
bool session_set_save_handler(callable $open, callable $close, callable $read, callable $write, callable $destroy, callable $gc, [callable $create_sid = ...], [callable $validate_sid = ...], [callable $update_timestamp = ...])
```

可以使用下面的方式来注册自定义会话存储函数：

```php
bool session_set_save_handler(object $sessionhandler, bool $register_shutdown = true)
```

`session_set_save_handler()` 设置用户自定义 会话存储函数。 如果想使用 PHP 内置的会话存储机制之外的方式， 可以使用本函数。 例如，可以自定义会话存储函数来将会话数据存储到数据库。

## 参数

本函数有 2 种原型：

- **`$sessionhandler`** — 实现了 SessionHandlerInterface， SessionIdInterface（可选） 和/或 SessionUpdateTimestampHandlerInterface 接口的对象， 例如 `SessionHandler`。
- **`$register_shutdown`** — 将函数 `session_write_close()` 注册为 `register_shutdown_function()` 函数。

或者

- **`$open(string $savePath, string $sessionName)`** — 实现了以下签名的 callable 回调： `bool``{open}()` `string``$savePath` `string``$sessionName` — open 回调函数类似于类的构造函数， 在会话打开的时候会被调用。 这是自动开始会话或者通过调用 `session_start()` 手动开始会话 之后第一个被调用的回调函数。 此回调函数操作成功返回 `true`，反之返回 `false`。
- **`$close`** — close 回调函数类似于类的析构函数。 在 write 回调函数调用之后调用。 当调用 `session_write_close()` 函数之后，也会调用 close 回调函数。 此回调函数操作成功返回 `true`，反之返回 `false`。
- **`$read`** — 实现了以下签名的 callable 回调： `string``{read}()` `string``$sessionId` — 如果会话中有数据，read 回调函数必须返回将会话数据编码（序列化）后的字符串。 如果会话中没有数据，read 回调函数返回空字符串。 — 在自动开始会话或者通过调用 `session_start()` 函数手动开始会话之后，PHP 内部调用 read 回调函数来获取会话数据。 在调用 read 之前，PHP 会调用 open 回调函数。 — read 回调返回的序列化之后的字符串格式必须与 `$write` 回调函数保存数据时的格式完全一致。 PHP 会自动反序列化返回的字符串并填充 `$_SESSION` 超级全局变量。 虽然数据看起来和 `serialize()` 函数很相似， 但是需要提醒的是，它们是不同的。 请参考： session.serialize_handler。
- **`$write`** — 实现了以下签名的 callable 回调： `bool``{write}()` `string``$sessionId` `string``$data` — 在会话保存数据时会调用 `$write` 回调函数。 此回调函数接收当前会话 ID 以及 `$_SESSION` 中数据序列化之后的字符串作为参数。 序列化会话数据的过程由 PHP 根据 session.serialize_handler 设定值来完成。 — 序列化后的数据将和会话 ID 关联在一起进行保存。 当调用 `$read` 回调函数获取数据时，所返回的数据必须要和 传入 `$write` 回调函数的数据完全保持一致。 — PHP 会在脚本执行完毕或调用 `session_write_close()` 函数之后调用此回调函数。 注意，在调用完此回调函数之后，PHP 内部会调用 `$close` 回调函数。 > PHP 会在输出流写入完毕并且关闭之后 才调用 write 回调函数， 所以在 write 回调函数中的调试信息不会输出到浏览器中。 如果需要在 write 回调函数中使用调试输出， 建议将调试输出写入到文件。
- **`$destroy`** — 实现了以下签名的 callable 回调： `bool``{destroy}()` `string``$sessionId` — 当调用 `session_destroy()` 函数， 或者调用 `session_regenerate_id()` 函数并且设置 destroy 参数为 `true` 时， 会调用此回调函数。此回调函数操作成功返回 `true`，反之返回 `false`。
- **`$gc`** — 实现了以下签名的 callable 回调： `bool``{gc}()` `int``$lifetime` — 为了清理会话中的旧数据，PHP 会不时的调用垃圾收集回调函数。 调用周期由 session.gc_probability 和 session.gc_divisor 参数控制。 传入到此回调函数的 lifetime 参数由 session.gc_maxlifetime 设置。 此回调函数操作成功返回 `true`，反之返回 `false`。
- **`$create_sid`** — 实现了以下签名的 callable 回调： `string``{create_sid}()` — 需要新的会话 ID 时，执行此回调函数。 它被调用时不会传入参数，其返回值应该是一个字符串格式的、有效的 session ID。
- **`$validate_sid`** — 实现了以下签名的 callable 回调： `bool``{validate_sid}()` `string``$key` — 开启 session.use_strict_mode 后， 当启动一个 session 时，提供了 session ID 后会执行此回调。 参数 `$key` 是待验证的 session ID。 如果该 ID 的 session 已经存在，则为有效 session ID。 成功时返回值应当为 `true`，失败时为 `false`。
- **`$update_timestamp`** — 实现了以下签名的 callable 回调： `bool``{update_timestamp}()` `string``$key` `string``$val` — 更新 session 时执行此回调。 参数 `$key` 是 session ID；参数 `$val` 是 session 的数据。 成功时返回值应当为 `true`，失败时为 `false`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**自定义会话处理程序：完整代码请参见 `SessionHandlerInterface`。**

这里仅列出了调用方式，完整代码请参见 `SessionHandlerInterface`。

这里使用了 `session_set_save_handler()` 函数的 OOP 原型 并且使用第二个参数来注册 shutdown 函数。 当将对象注册为会话保存处理程序时，建议使用这种方式。

```php


<?php
class MySessionHandler implements SessionHandlerInterface
{
    // 在这里实现接口
}

$handler = new MySessionHandler();
session_set_save_handler($handler, true);
session_start();

// 现在可以使用 $_SESSION 保存以及获取数据了

    
```

## 注释

> 在对象销毁之后才会调用 `$write` 和 `$close` 回调函数， 所以，在这两个回调函数中不可以使用对象，也不可以抛出异常。 如果在函数中抛出异常，PHP 既不会捕获它，也不会跟踪它， 这样会导致程序异常终止。 但是对象析构函数可以使用会话。
>
> 可以在析构函数中调用 `session_write_close()` 函数来解决这个问题。 但是注册 shutdown 回调函数才是更加可靠的做法。

> 如果会话在脚本结束后关闭，对于某些 SAPI 而言，当前工作目录可能已经被改变。 可以调用 `session_write_close()` 函数在脚本执行结束之前关闭会话。

## 参见

session.save_handler 配置指示 session.serialize_handler 配置指示 `register_shutdown_function()` `session_register_shutdown()` 完整的实现请参考 [save_handler.inc]()。
