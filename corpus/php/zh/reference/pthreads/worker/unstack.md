---
id: "zh-php-function-worker-unstack"
language: "php"
lang: "zh"
category: "function"
name: "Worker::unstack"
title: "将要执行的任务出栈"
signature: "public int Worker::unstack()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/worker.unstack.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将要执行的任务出栈

## 说明

```php
public int Worker::unstack()
```

把 Worker 栈顶的（最老的那个）任务从栈中移除。

## 参数

此函数没有参数。

## 返回值

出栈之后，Worker 栈的大小。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL pthreads 3.0.0 | 移除了要出栈的任务参数。 现在只能移除栈顶元素。 |

## 示例

**从 Worker 栈中移除对象**

```php


<?php
$my = new Worker();
$work = new class extends Threaded {};

var_dump($my->stack($work));
var_dump($my->unstack());

   
```

以上示例会输出：

```text


int(1)
int(0)

   
```
