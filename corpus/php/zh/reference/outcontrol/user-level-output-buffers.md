---
id: "zh-php-guide-outcontrol-user-level-output-buffers"
language: "php"
lang: "zh"
category: "guide"
name: "outcontrol.user-level-output-buffers"
title: "用户级输出缓冲区"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/outcontrol.user-level-output-buffers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用户级输出缓冲区

用户级输出缓冲区可以从 PHP 代码中启动、操作和终止。 每个缓冲区都包括一个输出缓冲区和一个关联的输出处理程序函数。

## 什么输出会被缓冲？

PHP 的用户级输出缓冲区在启动后缓冲所有输出，直到关闭或脚本结束。 在 PHP 的用户级输出缓冲区的上下文中，输出是指 PHP 将显示或发送回浏览器的所有内容。 在实际应用中，输出为非零长度的数据，即：


> 用户级输出缓冲区不会捕获直接写入 `stdout` 或传递给具有类似功能的 SAPI 函数的数据。这包括使用 `fwrite()` 将数据写入 `stdout` 或使用 `header()` 或 `setcookie()` 发送的 header。

## 打开输出缓冲

可以通过使用 `ob_start()` 函数或设置 output_buffering 和 output_handler php.ini 配置来启用输出缓冲。虽然两者都可以创建输出缓冲区，但 `ob_start()` 更加灵活，因为接受用户定义的函数作为输出处理程序，并且还可以设置对缓冲区允许的操作（冲刷、清空、移除）。通过 `ob_start()` 开始的缓冲区将从调用该函数的行开始生效，而通过 output_buffering 开始的缓冲区将从脚本的第一行开始缓冲输出。

PHP 还自带了内置的 `"URL-Rewriter"` 输出处理程序，它会启动自己的输出缓冲区，并且任何时候最多只允许有两个实例运行（一个用于用户级别的 URL 重写，另一个用于透明 Session ID 支持）。这些缓冲区可以通过调用 `output_add_rewrite_var()` 函数或启用 session.use_trans_sid php.ini 设置来启动。

捆绑的 `zlib` 扩展有自己的输出缓冲区，可以使用 zlib.output_compression php.ini 设置启用。

> `"URL-Rewriter"` 的特殊之处在于同时只允许运行最多两个实例，但所有用户级输出缓冲区都使用 `ob_start()` 所使用的相同底层缓冲区，并通过自定义的输出处理函数来实现其功能。因此，它们的所有功能都可以由用户级代码模拟。

## 嵌套输出缓冲区

如果在启动新的缓冲区时已经存在一个活跃的输出缓冲区，那么新的缓冲区将会嵌套在先前活跃的缓冲区内。无论是否嵌套，内部缓冲区的行为都将保持一致，外部缓冲区不会再次缓冲内部的缓冲输出。只有当内部缓冲区冲刷的输出才会被外部缓冲区缓冲。

大多数 `ob_*` 函数只能与活跃的输出缓冲区（最后一个启动的）一起使用， 因此只能冲刷、清空和关闭活跃的缓冲区。可以使用的函数有 `ob_list_handlers()`，它返回所有正在使用的输出处理程序的列表， 以及 `ob_get_status()`，它可以返回活跃缓冲区的信息或所有正在使用的缓冲区的信息。

调用 `ob_get_level()` 或 `ob_get_status()` 将返回活跃输出缓冲区的嵌套级别。

> `ob_get_level()` 和 `ob_get_status()` 之间相同级别的值相差一。 对于 `ob_get_level()`，第一个级别是 `1`， 而对于 `ob_get_status()`，第一个级别是 `0`。

## 缓冲区大小

缓冲区大小由整数表示，表示缓冲区可以存储的字节数，而不会刷新。 当缓冲区中的输出大小超过缓冲区的大小时，缓冲区的内容将被发送到输出处理程序，其返回值将被刷新，缓冲区将被清除。

除了 `"URL-Rewriter"` 之外，输出缓冲区的大小可以在启动缓冲区时设置。 如果设置为 `0`，则输出缓冲区仅受 PHP 可用内存的限制。 如果设置为 `1`，则在生成任何非零长度输出的代码块后，缓冲区将被刷新。

输出缓冲区的大小可通过调用 `ob_get_status()` 来获取。

使用 `ob_start()` 启动的输出缓冲区将其缓冲区大小设置为传递给函数的第二个 `$chunk_size` 参数的整数值。 如果省略，则设置为 `0`。

以 `"On"` 设置 output_buffering 启动的输出缓冲区将其缓冲区大小设置为 `0`。 如果设置为整数，则缓冲区大小将与该数字对应。

`"URL-Rewriter"` 的缓冲区大小设置为 `0`， 因此仅受 PHP 可用内存的限制。

`zlib` 的输出缓冲区大小由 zlib.output_compression php.ini 设置控制。 如果设置为 `"On"`，缓冲区大小将为 `"16K"`/`16384`。 如果设置为整数，则缓冲区大小将与该数字（字节）对应。

## 缓冲区中允许的操作

可以通过将 缓冲区控制标志 之一传递给 `ob_start()` 的第三个 `$flags` 参数来控制缓冲区上允许的操作。 如果省略，则默认情况下允许所有操作。 如果使用 `0`，则缓冲区不能被刷新、清空或移除，但仍然可以检索其内容。

`PHP_OUTPUT_HANDLER_CLEANABLE` 允许 `ob_clean()` 清空缓冲区的内容。

> 缺少 `PHP_OUTPUT_HANDLER_CLEANABLE` 标志 不会阻止 `ob_end_clean()` 或 `ob_get_clean()` 清空缓冲区的内容。

`PHP_OUTPUT_HANDLER_FLUSHABLE` 允许 `ob_flush()` 刷新缓冲区的内容。

> 缺少 `PHP_OUTPUT_HANDLER_FLUSHABLE` 标志 不会阻止 `ob_end_flush()` 或 `ob_get_flush()` 刷新缓冲区的内容。

`PHP_OUTPUT_HANDLER_REMOVABLE` 允许 `ob_end_clean()`、`ob_end_flush()`、 `ob_get_clean()` 或 `ob_get_flush()` 关闭缓冲区。

`PHP_OUTPUT_HANDLER_STDFLAGS` 这三个标志的组合将允许对缓冲区执行这三个操作。

## 冲刷、访问和清理缓冲区内容

冲刷会发送并丢弃活动缓冲区中的内容。当输出的大小超过缓冲区大小时，或者在脚本结束时，又或者是调用了 `ob_flush()`、`ob_end_flush()` 或 `ob_get_flush()` 函数时，会冲刷输出缓冲区。

> 调用 `ob_end_flush()` 或 `ob_get_flush()` 将关闭活跃的缓冲区。

> 冲刷缓冲区将冲刷输出处理程序的返回值，这可能与缓冲区的内容不同。 例如，使用 `ob_gzhandler()` 将压缩输出并冲刷压缩后的输出。

可以通过调用 `ob_get_contents()`、`ob_get_clean()` 或 `ob_get_flush()` 来检索活动缓冲区的内容。

如果只需要缓冲区内容的长度，`ob_get_length()` 或 `ob_get_status()` 将返回内容的字节长度。

> 调用 `ob_get_clean()` 或 `ob_get_flush()` 将在返回其内容后关闭活跃的缓冲区。

可以通过调用 `ob_clean()`、`ob_end_clean()` 或 `ob_get_clean()` 来清理活动缓冲区的内容。

> 调用 `ob_end_clean()` 或 `ob_get_clean()` 将关闭活跃的缓冲区。

## 关闭缓冲区

可以通过调用 `ob_end_clean()`、`ob_end_flush()`、 `ob_get_flush()` 或 `ob_get_clean()` 来关闭输出缓冲区。

> 没有使用 `PHP_OUTPUT_HANDLER_REMOVABLE` 标志启动的输出缓冲区不能关闭，可能会生成一个 `E_NOTICE`。

脚本结束时或调用 `exit()` 时，所有未关闭的输出缓冲区都将被冲刷并关闭。 缓冲区将按照它们启动的相反顺序被冲刷并关闭。 最后启动的缓冲区将首先被冲刷，最先启动的缓冲区将最后被冲刷并关闭。

> 如果不希望冲刷缓冲区的内容，应该使用自定义的输出处理程序来防止在关闭期间冲刷缓冲区的内容。

## 输出处理程序

输出处理程序是与输出缓冲区关联的 `callable`，通过调用 `ob_clean()`、`ob_flush()`、`ob_end_flush()`、 `ob_get_flush()`、`ob_end_clean()`、`ob_get_clean()` 或 PHP 的关闭过程来调用。

> 关闭过程将冲刷处理程序的返回值。

如果省略或在启动输出缓冲区时传递 `null`，则将使用内部的 `"default output handler"`，当调用时返回缓冲区的未修改内容。 输出处理程序可用于返回缓冲区内容的修改版本和/或具有副作用（例如发送头部）。

PHP 自带两个内部输出处理程序： `"default output handler"` 和 `"URL-Rewriter"` （它集成到自己的输出缓冲区中，最多只能启动两个实例）。

捆绑的扩展包括四个额外的输出处理程序： `mb_output_handler()`、`ob_gzhandler()`、 `ob_iconv_handler()`、`ob_tidyhandler()`。

## 使用输出处理程序

调用输出处理程序时，将缓冲区的内容和一个位掩码传递给输出处理程序。

`string` `{handler}()` `string` `$buffer` `int` `$phase`

- **`$buffer`** — 输出缓冲区的内容。
- **`$phase`** — `PHP_OUTPUT_HANDLER_{*}` 常量 的位掩码。

> 从输出处理程序中调用以下任何函数都会导致致命错误： `ob_clean()`、`ob_end_clean()`、 `ob_end_flush()`、`ob_flush()`、 `ob_get_clean()`、`ob_get_flush()`、 `ob_start()`。

> 如果设置了处理程序的 `PHP_OUTPUT_HANDLER_DISABLED`， 那么调用 `ob_end_clean()`、`ob_end_flush()`、 `ob_get_clean()`、`ob_get_flush()`、 `ob_clean()`、`ob_flush()` 或 PHP 的关闭过程将不会调用处理程序。 在 PHP 8.4.0 之前，调用 `ob_clean()` 或 `ob_flush()` 时，此标志不起作用。

> 脚本的工作目录可能会在某些 Web 服务器（例如 Apache 或内置 Web 服务器）的关闭函数中发生变化。

## 传递给输出处理程序的 flag

传递给输出处理程序的第二个 `$phase` 参数的位掩码提供了关于处理程序调用的信息。

> 位掩码可以包含多个标志，应使用按位 `&` 运算符来检查是否设置了标志。

> `PHP_OUTPUT_HANDLER_WRITE` 和其别名 `PHP_OUTPUT_HANDLER_CONT` 的值为 `0`， 因此只能通过使用 等号运算符 （`==` 或 `===`）来确定是否设置了它。

下面的标志在处理程序的生命周期的特定阶段设置： `PHP_OUTPUT_HANDLER_START` 在第一次调用处理程序时设置。 `PHP_OUTPUT_HANDLER_FINAL` 或其别名 `PHP_OUTPUT_HANDLER_END` 在最后一次调用处理程序时设置， 即关闭处理程序。此标志也在 PHP 的关闭过程中关闭缓冲区时设置。

下面的标志由特定调用处理程序设置： `PHP_OUTPUT_HANDLER_FLUSH` 在调用 `ob_flush()` 时设置。 `PHP_OUTPUT_HANDLER_WRITE` 或其别名 `PHP_OUTPUT_HANDLER_CONT` 在其内容的大小等于或超过缓冲区的大小时设置， 并且在缓冲区自动刷新时调用处理程序。 `PHP_OUTPUT_HANDLER_FLUSH` 在调用 `ob_clean()`、 `ob_end_clean()` 或 `ob_get_clean()` 时设置。 当调用 `ob_end_clean()` 或 `ob_get_clean()` 时， `PHP_OUTPUT_HANDLER_FINAL` 也会设置。

> 当调用 `ob_end_flush()` 或 `ob_get_flush()` 时， 设置 `PHP_OUTPUT_HANDLER_FINAL` 但未设置 `PHP_OUTPUT_HANDLER_FLUSH`。

## 输出处理程序的返回值

输出处理程序的返回值在内部转换为字符串，遵循标准 PHP 类型语义， 但有两个例外：`array`s 和 `bool`eans。

`Array`s 被转换为字符串 `"Array"`， 但不会触发 `Array to string conversion` 警告。

如果处理程序返回 `false` 则返回缓冲区的内容。 如果处理程序返回 `true` 则返回一个空字符串。

> 如果处理程序返回 `false` 或抛出异常，则设置其 `PHP_OUTPUT_HANDLER_DISABLED` 状态标志。

## 输出处理程序中抛出异常

如果在输出处理程序中抛出未捕获的异常，则程序将终止，并在关闭过程中调用处理程序后刷新 `"Uncaught Exception"` 错误消息。

如果未捕获的异常是在由 `ob_flush()`、`ob_end_flush()` 或 `ob_get_flush()` 调用的处理程序中引发的， 则在错误消息之前刷新缓冲区的内容。

如果在关闭过程中的输出处理程序中引发未捕获的异常，则程序终止，而不刷新缓冲区或错误消息。

> 如果处理程序抛出异常，则设置其 `PHP_OUTPUT_HANDLER_DISABLED` 状态标志。

## 输出处理程序中引发错误

如果在输出处理程序中引发非致命错误，则程序继续执行。

如果非致命错误是在由 `ob_flush()`、`ob_end_flush()` 或 `ob_get_flush()` 调用的处理程序中引发的， 则根据处理程序的返回值刷新特定的数据。 如果处理程序返回 `false` 则刷新缓冲区和错误消息。 如果返回其他任何值，则刷新处理程序的返回值，但不刷新错误消息。

> 如果处理程序返回 `false`，则设置其 `PHP_OUTPUT_HANDLER_DISABLED` 状态标志。

如果输出处理程序中出现致命错误，则程序终止，并在关闭过程中调用处理程序后刷新错误消息。

如果致命错误是在由 `ob_flush()`、`ob_end_flush()` 或 `ob_get_flush()` 调用的处理程序中引发的， 则在错误消息之前刷新缓冲区的内容。

如果在关闭过程中的输出处理程序中引发致命错误，则程序终止，而不刷新缓冲区或错误消息。

## 输出处理程序中输出

在特定情况下，处理程序中生成的输出与缓冲区的内容一起刷新。 此输出不会附加到缓冲区，也不是由 `ob_get_flush()` 返回的字符串的一部分。

在冲刷操作（调用 `ob_flush()`、`ob_end_flush()`、 `ob_get_flush()` 和关闭过程中）期间， 如果处理程序的返回值为 `false`，则缓冲区的内容将被刷新，然后输出。 如果处理程序在关闭过程中被调用，则抛出异常或调用 `exit()` 会导致相同的行为。

> 如果处理程序返回 `false`，则设置其 `PHP_OUTPUT_HANDLER_DISABLED` 状态标志。

## 输出处理程序状态 flag

每次调用输出处理程序时，缓冲区的 `flags` 位掩码的 处理程序状态标志 都会被设置，并且是由 `ob_get_status()` 返回的 `flags` 的一部分。 如果处理程序成功执行且未返回 `false`，则设置 `PHP_OUTPUT_HANDLER_STARTED` 和 `PHP_OUTPUT_HANDLER_PROCESSED`。 如果处理程序在执行时返回 `false` 或引发异常，则设置 `PHP_OUTPUT_HANDLER_STARTED` 和 `PHP_OUTPUT_HANDLER_DISABLED`。

> 如果处理程序设置了 `PHP_OUTPUT_HANDLER_DISABLED` 标志， 则不会调用 `ob_end_clean()`、`ob_end_flush()`、 `ob_get_clean()`、`ob_get_flush()`、 `ob_clean()`、`ob_flush()` 或 PHP 的关闭过程。 在 PHP 8.4.0 之前，调用 `ob_clean()` 或 `ob_flush()` 时，此标志不起作用。
