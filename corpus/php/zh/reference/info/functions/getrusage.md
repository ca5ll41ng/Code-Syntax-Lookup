---
id: "zh-php-function-function-getrusage"
language: "php"
lang: "zh"
category: "function"
name: "getrusage"
title: "获取当前资源使用状况"
signature: "array|false getrusage(int $mode = 0)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.getrusage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前资源使用状况

## 说明

```php
array|false getrusage(int $mode = 0)
```

这是 getrusage(2) 的接口。它返回了调用自系统的数据。

## 参数

- **`$mode`** — 如果 `$mode` 是 1，getrusage 会使用 `RUSAGE_CHILDREN` 来调用。

## 返回值

返回了一个包含系统返回数据的关联数组。所以条目均可通过文档中字段的名称来访问。失败时返回 `false`。

## 示例

**`getrusage()` 示例**

```php


<?php
$dat = getrusage();
echo $dat["ru_oublock"];       // 块输出操作数
echo $dat["ru_inblock"];       // 块输入操作数
echo $dat["ru_msgsnd"];        // 发送的 IPC 消息数
echo $dat["ru_msgrcv"];        // 接收的 IPC 消息数
echo $dat["ru_maxrss"];        // maximum resident set size
echo $dat["ru_ixrss"];         // 整数类型的共享内存大小
echo $dat["ru_idrss"];         // 整数类型的非共享内存大小
echo $dat["ru_minflt"];        // 页面回收次数（软分页错误）
echo $dat["ru_majflt"];        // 页面错误次数（硬分页错误）
echo $dat["ru_nsignals"];      // 接收到的信号数
echo $dat["ru_nvcsw"];         // number of voluntary context switches
echo $dat["ru_nivcsw"];        // number of involuntary context switches
echo $dat["ru_nswap"];         // 交换次数
echo $dat["ru_utime.tv_usec"]; // 用户使用时间（微秒）
echo $dat["ru_utime.tv_sec"];  // 用户使用时间（秒）
echo $dat["ru_stime.tv_usec"]; // 系统使用时间（微秒）
echo $dat["ru_stime.tv_sec"];  // 系统使用时间（秒）
?>

    
```

## 注释

> 在 Windows 上 `getrusage()` 仅会返回以下类型：
>
> `"ru_stime.tv_sec"` `"ru_stime.tv_usec"` `"ru_utime.tv_sec"` `"ru_utime.tv_usec"` `"ru_majflt"`（仅当 `$mode` 是 `RUSAGE_SELF`） `"ru_maxrss"`（仅当 `$mode` 是 `RUSAGE_SELF`）
>
> 如果使用设置 `$mode` 为 `1`（`RUSAGE_CHILDREN`）的情况下调用 `getrusage()`，则会收集线程的资源使用情况（意味着在内部使用 `RUSAGE_THREAD` 调用此函数）。

> 在 BeOS 2000，仅会返回以下类型：
>
> `"ru_stime.tv_sec"` `"ru_stime.tv_usec"` `"ru_utime.tv_sec"` `"ru_utime.tv_usec"`

## 参见

系统上 getrusage(2) 的 man 页面
