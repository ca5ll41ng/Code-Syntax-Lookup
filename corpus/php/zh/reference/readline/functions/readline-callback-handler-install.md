---
id: "zh-php-function-function-readline-callback-handler-install"
language: "php"
lang: "zh"
category: "function"
name: "readline_callback_handler_install"
title: "初始化 readline 回调接口和终端，然后打印提示并立即返回"
signature: "true readline_callback_handler_install(string $prompt, callable $callback)"
module: "readline"
source_url: "https://www.php.net/manual/zh/function.readline-callback-handler-install.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化 readline 回调接口和终端，然后打印提示并立即返回

## 说明

```php
true readline_callback_handler_install(string $prompt, callable $callback)
```

设置 readline 回调接口然后打印 `$prompt` 并立即返回。在不移除旧的回调接口的情况下再次调用此函数，将自动覆盖旧接口。

与 `stream_select()` 结合使用时，回调功能很有用，因为允许 IO 和用户输入交互，这与 `readline()` 不同。

## 参数

- **`$prompt`** — 提示信息。
- **`$callback`** — `$callback` 函数接受一个参数；返回用户输入。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 返回值类型现在是 `true`；之前是 `bool`。 |

## 示例

**Readline 回调接口示例**

```php


<?php
function rl_callback($ret)
{
    global $c, $prompting;

    echo "You entered: $ret\n";
    $c++;

    if ($c > 10) {
        $prompting = false;
        readline_callback_handler_remove();
    } else {
        readline_callback_handler_install("[$c] Enter something: ", 'rl_callback');
    }
}

$c = 1;
$prompting = true;

readline_callback_handler_install("[$c] Enter something: ", 'rl_callback');

while ($prompting) {
    $w = NULL;
    $e = NULL;
    $n = stream_select($r = array(STDIN), $w, $e, null);
    if ($n && in_array(STDIN, $r)) {
        // read a character, will call the callback when a newline is entered
        readline_callback_read_char();
    }
}

echo "Prompting disabled. All done.\n";
?>

   
```

## 参见

 `readline_callback_handler_remove()` `readline_callback_read_char()` `stream_select()`
