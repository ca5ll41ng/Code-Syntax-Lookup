---
id: "zh-php-function-thread-start"
language: "php"
lang: "zh"
category: "function"
name: "Thread::start"
title: "执行"
signature: "public bool Thread::start([int $options = ...])"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/thread.start.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行

## 说明

```php
public bool Thread::start([int $options = ...])
```

在独立线程中执行 run 方法

## 参数

- **`$options`** — 可选参数，用来控制线程继承。默认值为 PTHREADS_INHERIT_ALL

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**开始线程**

```php


<?php
class My extends Thread {
    public function run() {
        /** ... **/
    }
}
$my = new My();
var_dump($my->start());
?>

   
```

以上示例会输出：

```text


bool(true)

   
```
