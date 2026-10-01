---
id: "zh-php-function-function-ignore-user-abort"
language: "php"
lang: "zh"
category: "function"
name: "ignore_user_abort"
title: "设置客户端断开连接时是否中断脚本的执行"
signature: "int ignore_user_abort(bool|null $enable = null)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.ignore-user-abort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置客户端断开连接时是否中断脚本的执行

## 说明

```php
int ignore_user_abort(bool|null $enable = null)
```

设置客户端断开连接时是否中断脚本的执行

PHP 以命令行脚本执行时，当脚本终端结束，脚本不会被立即中止，除非设置 `$enable`为 `true`，否则脚本输出任意字符时会被中止。

## 参数

- **`$enable`** — 如果设置了该值且不为 `null`，函数会设置 ignore_user_abort ini 为 `$enable`。否则，函数不会改变设置，仅会返回之前的设置。

## 返回值

以整型返回之前的设置

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$enable` 现在允许为 null。 |

## 示例

**`ignore_user_abort()`例子**

```php


<?php
// 忽略用户中止并允许脚本
// 永远运行
ignore_user_abort(true);
set_time_limit(0);

echo 'Testing connection handling in PHP';

// Run a pointless loop that sometime 
// hopefully will make us click away from 
// page or click the "Stop" button.
while(1)
{
    // 连接失败？
    if(connection_status() != CONNECTION_NORMAL)
    {
        break;
    }

    // 睡眠 10 秒
    sleep(10);
}

// If this is reached, then the 'break' 
// was triggered from inside the while loop

// So here we can log, or perform any other tasks
// we need without actually being dependent on the 
// browser.
?>

    
```

## 注释

在PHP尝试发送信息到客户端之前，不会检测到用户是否已中断连接。 仅使用 echo 语句不能确保信息已发送，参见 `flush()` 函数。

## 参见

`connection_aborted()` `connection_status()` Connection Handling 关于PHP连接处理的完整描述。
