---
id: "en-php-function-function-socket-cmsg-space"
language: "php"
lang: "en"
category: "function"
name: "socket_cmsg_space"
title: "Calculate message buffer size"
signature: "int|null socket_cmsg_space(int $level, int $type, int $num = 0)"
module: "sockets"
source_url: "https://www.php.net/manual/en/function.socket-cmsg-space.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate message buffer size

## Description

```php
int|null socket_cmsg_space(int $level, int $type, int $num = 0)
```

Calculates the size of the buffer that should be allocated for receiving the ancillary data.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$level`**
- **`$type`**

## Return Values

## See Also

`socket_recvmsg()` `socket_sendmsg()`
