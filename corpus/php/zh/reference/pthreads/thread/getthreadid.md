---
id: "zh-php-function-thread-getthreadid"
language: "php"
lang: "zh"
category: "function"
name: "Thread::getThreadId"
title: "识别"
signature: "public int Thread::getThreadId()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/thread.getthreadid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 识别

## 说明

```php
public int Thread::getThreadId()
```

返回引用线程的ID

## 参数

此函数没有参数。

## 返回值

线程ID，数字格式

## 示例

**返回引用线程的ID**

```php


<?php
class My extends Thread {
    public function run() {
        printf("%s is Thread #%lu\n", __CLASS__, $this->getThreadId());
    }
}
$my = new My();
$my->start();
?>

   
```

以上示例会输出：

```text


My is Thread #123456778899

   
```
