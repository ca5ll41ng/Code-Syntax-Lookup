---
id: "zh-php-guide-sockets-examples"
language: "php"
lang: "zh"
category: "guide"
name: "sockets.examples"
title: "示例"
module: "sockets"
source_url: "https://www.php.net/manual/zh/sockets.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

**Socket 举例：简单的 TCP/IP 服务器**

这个例子展示了一个简单的对讲服务器。更改 `address` 和 `port` 以满足设置和执行。 可以使用类似于这样的命令连接到服务器：telnet 192.168.1.53 10000（address 和 port 匹配刚才的设置）。 输入的任何东西都会在服务器端进行输出，并回显。要断开连接，请输入 “quit”。

```php


#!/usr/local/bin/php -q
<?php
error_reporting(E_ALL);

/* 允许脚本等待连接。 */
set_time_limit(0);

/* 打开绝对刷送，这样就可以看到接收了什么。 */
ob_implicit_flush();

$address = '192.168.1.53';
$port = 10000;

if (($sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP)) === false) {
    echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
}

if (socket_bind($sock, $address, $port) === false) {
    echo "socket_bind() failed: reason: " . socket_strerror(socket_last_error($sock)) . "\n";
}

if (socket_listen($sock, 5) === false) {
    echo "socket_listen() failed: reason: " . socket_strerror(socket_last_error($sock)) . "\n";
}

do {
    if (($msgsock = socket_accept($sock)) === false) {
        echo "socket_accept() failed: reason: " . socket_strerror(socket_last_error($sock)) . "\n";
        break;
    }
    /* 发送说明。 */
    $msg = "\nWelcome to the PHP Test Server. \n" .
        "To quit, type 'quit'. To shut down the server type 'shutdown'.\n";
    socket_write($msgsock, $msg, strlen($msg));

    do {
        if (false === ($buf = socket_read($msgsock, 2048, PHP_NORMAL_READ))) {
            echo "socket_read() failed: reason: " . socket_strerror(socket_last_error($msgsock)) . "\n";
            break 2;
        }
        if (!$buf = trim($buf)) {
            continue;
        }
        if ($buf == 'quit') {
            break;
        }
        if ($buf == 'shutdown') {
            socket_close($msgsock);
            break 2;
        }
        $talkback = "PHP: You said '$buf'.\n";
        socket_write($msgsock, $talkback, strlen($talkback));
        echo "$buf\n";
    } while (true);
    socket_close($msgsock);
} while (true);

socket_close($sock);
?>

   
```

**Socket 举例：简单的 TCP/IP 客户端**

这个例子展示了一个简单的，一次性的 HTTP 客户端。 它只是连接到一个页面，提交一个 HEAD 请求，输出回复，然后退出。

```php


<?php
error_reporting(E_ALL);

echo "<h2>TCP/IP Connection</h2>\n";

/* 获取 WWW 服务的 port。 */
$service_port = getservbyname('www', 'tcp');

/* 获取目标主机的 IP 地址。 */
$address = gethostbyname('www.example.com');

/* 创建 TCP/IP 套接字。 */
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
    echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
} else {
    echo "OK.\n";
}

echo "Attempting to connect to '$address' on port '$service_port'...";
$result = socket_connect($socket, $address, $service_port);
if ($result === false) {
    echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
} else {
    echo "OK.\n";
}

$in = "HEAD / HTTP/1.1\r\n";
$in .= "Host: www.example.com\r\n";
$in .= "Connection: Close\r\n\r\n";
$out = '';

echo "Sending HTTP HEAD request...";
socket_write($socket, $in, strlen($in));
echo "OK.\n";

echo "Reading response:\n\n";
while ($out = socket_read($socket, 2048)) {
    echo $out;
}

echo "Closing socket...";
socket_close($socket);
echo "OK.\n\n";
?>

   
```
