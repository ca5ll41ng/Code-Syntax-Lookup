---
id: "zh-php-guide-session-examples"
language: "php"
lang: "zh"
category: "guide"
name: "session.examples"
title: "示例"
module: "session"
source_url: "https://www.php.net/manual/zh/session.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## 基本用法

通过为每个独立用户分配唯一的会话 ID，可以实现针对不同用户分别存储数据的功能。 会话通常被用来在多个页面请求之间保存及共享信息。 一般来说，会话 ID 通过 cookie 的方式发送到浏览器，并且在服务器端也是通过会话 ID 来取回会话中的数据。 如果请求中不包含会话 ID 信息，那么 PHP 就会创建一个新的会话，并为新创建的会话分配新的 ID。

会话的工作流程很简单。当开始一个会话时，PHP 会尝试从请求中查找会话 ID （通常通过会话 cookie）， 如果请求中不包含会话 ID 信息，PHP 就会创建一个新的会话。 会话开始之后，PHP 就会将会话中的数据设置到 `$_SESSION` 变量中。 当 PHP 停止的时候，它会自动读取 `$_SESSION` 中的内容，并将其进行序列化， 然后发送给会话保存处理程序来进行保存。

默认情况下，PHP 使用内置的文件会话保存处理程序（`$files`）来完成会话的保存。 也可以通过配置项 session.save_handler 来修改所要采用的会话保存处理程序。 对于文件会话保存处理程序，会将会话数据保存到配置项 session.save_path 所指定的位置。

可以通过调用函数 `session_start()` 来手动开始一个会话。 如果配置项 session.auto_start 设置为`$1`， 那么请求开始的时候，会话会自动开始。

PHP 脚本执行完毕之后，会话会自动关闭。 同时，也可以通过调用函数 `session_write_close()` 来手动关闭会话。

**在 `$_SESSION` 中注册变量。**

```php


<?php
session_start();
if (!isset($_SESSION['count'])) {
  $_SESSION['count'] = 0;
} else {
  $_SESSION['count']++;
}
?>

    
```

**从 `$_SESSION` 中反注册变量。**

```php


<?php
session_start();
unset($_SESSION['count']);
?>

    
```

> 千万不要使用 `unset($_SESSION)` 来复位超级变量 `$_SESSION`， 因为这样会导致无法继续在 `$_SESSION` 中注册会话变量。

> 由于无法将一个引用恢复到另外一个变量， 所以不可以将引用保存到会话变量中。

> 无论是通过调用函数 `session_start()` 手动开启会话， 还是使用配置项 session.auto_start 自动开启会话， 对于基于文件的会话数据保存（PHP 的默认行为）而言， 在会话开始的时候都会给会话数据文件加锁， 直到 PHP 脚本执行完毕或者显式调用 `session_write_close()` 来保存会话数据。 在此期间，其他脚本不可以访问同一个会话数据文件。
>
> 对于大量使用 Ajax 或者并发请求的网站而言，这可能是一个严重的问题。 解决这个问题最简单的做法是如果修改了会话中的变量， 那么应该尽快调用 `session_write_close()` 来保存会话数据并释放文件锁。 还有一种选择就是使用支持并发操作的会话保存处理程序来替代文件会话保存处理程序。

## 传送会话ID

有两种方式用来传送会话 ID：

- Cookies
- URL 参数

会话模块支持这两种方式。 Cookie 方式相对好一些，但是用户可能在浏览器中关闭 Cookie，所以 第二种方案就是把会话 ID 直接并入到 URL 中，以保证会话 ID 的传送。

无需开发人员干预，PHP 就可以自动处理 URL 传送会话 ID 的场景。 如果启用了 `session.use_trans_sid` 选项， PHP 将会自动在相对 URI 中包含会话 ID。

> arg_separator.output php.ini 配置指令允许你自定义会话 ID 参数分隔符。 可以设定为 & 来保持和 XHTML 的一致性。

会话开始之后，可以使用 `SID` 常量。 如果客户端未提供会话 cookie，该常量的展开形式为 `session_name=session_id`， 反之，该常量为空字符串。因此，可以直接在 URL 中包含此常量的展开字符串而无需考虑会话 ID 的实际传送方式。

下例演示了如何在会话中注册变量以及如何使用 `SID` 常量正确的链接到另一页面。

**某单一用户的点击数**

```php


<?php

session_start();

if (empty($_SESSION['count'])) {
   $_SESSION['count'] = 1;
} else {
   $_SESSION['count']++;
}
?>

<p>
Hello visitor, you have seen this page <?php echo $_SESSION['count']; ?> times.
</p>

<p>
To continue, <a href="nextpage.php?<?php echo htmlspecialchars(SID); ?>">click
here</a>.
</p>

    
```

可以使用 `htmlspecialchars()` 来打印 `SID` 常量的展开字符串以避免 XSS 相关的攻击。

如果使用 --enable-trans-sid 参数编译的 PHP， 上例中打印 `SID` 常量部分就可以省略。

> 非相对 URL 将被视为指向外部站点的链接， 从安全角度考虑，外站的链接 URL 中将 不包含 `SID` 常量，以避免将 `SID` 泄露到外部服务器的风险。

## 自定义会话处理程序

如果需要在数据库中或者以其他方式存储会话数据， 需要使用 `session_set_save_handler()` 函数来创建一系列用户级存储函数。 可以使用 `SessionHandlerInterface` 类 或者通过继承 `SessionHandler` 类扩展 PHP 的内置处理程序， 从而达到自定义会话保存机制的目的。

函数 `session_set_save_handler()` 的参数即为在会话生命周期内要调用的一组回调函数： `$open`， `$read`， `$write` 以及 `$close`。 还有一些回调函数被用来完成垃圾清理：`$destroy` 用来删除会话， `$gc` 用来进行周期性的垃圾收集。

因此，会话保存处理程序对于 PHP 而言是必需的。 默认情况下会使用内置的文件会话保存处理程序。 可以通过 `session_set_save_handler()` 函数来设置自定义会话保存处理程序。 一些 PHP 扩展也提供了内置的会话处理程序，例如：`$sqlite`， `$memcache` 以及 `$memcached`， 可以通过配置项 session.save_handler 来使用它们。

会话开始的时候，PHP 会调用 `$open` 处理程序，然后再调用 `$read` 回调函数来读取内容，该回调函数返回已经经过编码的字符串。 然后 PHP 会将这个字符串解码，并且产生一个数组对象，然后保存至 `$_SESSION` 超级全局变量。

当 PHP 关闭的时候（或者调用了 `session_write_close()` 之后）， PHP 会对 `$_SESSION` 中的数据进行编码， 然后和会话 ID 一起传送给 `$write` 回调函数。 `$write` 回调函数调用完毕之后，PHP 内部将调用 `$close` 回调函数。

销毁会话时，PHP 会调用 `$destroy` 回调函数。

根据会话生命周期时间的设置，PHP 会不时地调用 `$gc` 回调函数。 该函数会从持久化存储中删除超时的会话数据。 超时是指会话最后一次访问时间距离当前时间超过了 `$$lifetime` 所指定的值。
