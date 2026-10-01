---
id: "zh-php-function-function-dio-tcsetattr"
language: "php"
lang: "zh"
category: "function"
name: "dio_tcsetattr"
title: "设置串行端口的终端属性和波特率"
signature: "bool dio_tcsetattr(resource $fd, array $options)"
module: "dio"
source_url: "https://www.php.net/manual/zh/function.dio-tcsetattr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置串行端口的终端属性和波特率

## 说明

```php
bool dio_tcsetattr(resource $fd, array $options)
```

`dio_tcsetattr()` 为打开的 `$fd` 设置串行端口的终端属性和波特率。

## 参数

- **`$fd`** — 由 `dio_open()` 返回的文件描述符。
- **`$options`** — 当前可用选项： - 'baud' - 端口波特率 - 可以是 38400、19200、9600、4800、2400、1800、1200、600、300、200、150、134、110、75 或 50，默认为 9600。 - 'bits' - 数据位 - 可以是 8、7、6 或 5。默认为 8。 - 'stop' - 停止位 - 可以是 1 或 2。默认为 1。 - 'parity' - 可以是 0、1 或 2。默认是 0。

## 返回值

没有返回值。

## 示例

**在串口上设置波特率**

```php


<?php

$fd = dio_open('/dev/ttyS0', O_RDWR | O_NOCTTY | O_NONBLOCK);

dio_fcntl($fd, F_SETFL, O_SYNC);

dio_tcsetattr($fd, array(
    'baud' => 9600,
    'bits' => 8,
    'stop'  => 1,
    'parity' => 0
)); 

while (true) {
    $data = dio_read($fd, 256);
    if ($data !== null && $date !== '') {
        echo $data;
    }
} 

?>

   
```

## 注释

> 此函数未在 Windows 平台下实现。
