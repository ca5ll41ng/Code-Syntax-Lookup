---
id: "zh-php-function-function-ob-start"
language: "php"
lang: "zh"
category: "function"
name: "ob_start"
title: "打开输出控制缓冲"
signature: "bool ob_start(callable|null $callback = null, int $chunk_size = 0, int $flags = PHP_OUTPUT_HANDLER_STDFLAGS)"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-start.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开输出控制缓冲

## 说明

```php
bool ob_start(callable|null $callback = null, int $chunk_size = 0, int $flags = PHP_OUTPUT_HANDLER_STDFLAGS)
```

此函数将打开输出缓冲。当输出缓冲激活后，脚本将不会输出内容，相反需要输出的内容被存储在内部缓冲区中。参阅`outcontrol.what-output-is-buffered`以了解哪些输出受到影响。

输出缓冲区是可堆叠的，也就是说，当一个缓冲区处于活动状态时也可以调用 `ob_start()`。如果有多重输出缓冲区是活跃的，输出内容会一直按嵌套的顺序依次过滤。参阅`outcontrol.nesting-output-buffers`获取更多详情。

有关输出缓冲区的详细信息，请参阅`outcontrol.user-level-output-buffers`

## 参数

- **`$callback`** — 可以指定可选的 `$callback` `callable`。也可以通过传递 `null` 来绕过它。 — 当冲刷（发送）、清理输出缓冲区或在脚本末尾冲刷输出缓冲区时，将调用 `$callback`。 — `$callback` 的签名如下： — `string``{handler}()` `string``$buffer` `int``$phase` - **`$buffer`** — 输出缓冲区中的内容。 - **`$phase`** — `PHP_OUTPUT_HANDLER_*` 常量。`PHP_OUTPUT_HANDLER_{*}` 常量的位掩码。有关更多详细信息，请参阅`outcontrol.flags-passed-to-output-handlers`。 — 如果 `$callback` 返回 `false`，则返回缓冲区的内容。有关更多详细信息，请参阅 `outcontrol.output-handler-return-values`。
  > 从输出处理程序中调用以下任何函数都将导致 fatal 错误 `ob_clean()`、`ob_end_clean()`、`ob_end_flush()`、`ob_flush()`、`ob_get_clean()`、`ob_get_flush()`、`ob_start()`。

 — 有关 `$callback`（输出处理程序）的更多详细信息，请参阅`outcontrol.output-handlers`和`outcontrol.working-with-output-handlers`。
- **`$chunk_size`** — 如果传递了可选参数 chunk_size，则在任何导致缓冲区长度等于或大于 `$chunk_size` 的代码块的输出之后，都会冲刷缓冲区。默认值 `0` 表示缓冲所有输出，直到缓冲区关闭。更多详细信息，请参阅`outcontrol.buffer-size`。
- **`$flags`** — `$flags` 参数是位掩码，用于控制可以在输出缓冲区上执行的操作。默认是允许清理、冲刷和移除输出缓冲区，可以通过缓冲区控制 flag手动设置。参阅`outcontrol.operations-on-buffers`获取更多详细信息。 — 每个标志都控制着对一组功能的访问，详细介绍如下： | 常量 | 函数 | | --- | --- | | `PHP_OUTPUT_HANDLER_CLEANABLE` | `ob_clean()` | | `PHP_OUTPUT_HANDLER_FLUSHABLE` | `ob_flush()` | | `PHP_OUTPUT_HANDLER_REMOVABLE` | `ob_end_clean()`、`ob_end_flush()`、`ob_get_clean()`、`ob_get_flush()` | > 在 PHP 8.4.0 之前，flags 参数还可以设置 输出处理程序状态标志。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**用户自定义回调函数的示例**

```php


<?php

function callback($buffer)
{
  // replace all the apples with oranges
  return (str_replace("apples", "oranges", $buffer));
}

ob_start("callback");

?>
<html>
<body>
<p>It's like comparing apples to oranges.</p>
</body>
</html>
<?php

ob_end_flush();

?>

    
```

以上示例会输出：

```text


<html>
<body>
<p>It's like comparing oranges to oranges.</p>
</body>
</html>

    
```

**创建不可擦除的输出缓冲区**

```php


<?php

ob_start(null, 0, PHP_OUTPUT_HANDLER_STDFLAGS ^ PHP_OUTPUT_HANDLER_REMOVABLE);

?>

    
```

## 参见

`ob_get_contents()` `ob_end_clean()` `ob_end_flush()` `ob_implicit_flush()` `ob_gzhandler()` `ob_iconv_handler()` `mb_output_handler()` `ob_tidyhandler()`
