---
id: "java-en-function-socketoptions-so_linger"
language: "java"
lang: "en"
category: "function"
name: "SocketOptions.SO_LINGER"
signature: "@Native public static final int SO_LINGER = 0x0080"
title: "SocketOptions.SO_LINGER"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketOptions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketOptions.SO_LINGER

```java
@Native public static final int SO_LINGER = 0x0080
```

See `SO_LINGER` for description of this socket option.
 

 Set the value to `Boolean.FALSE` or an integer less than `0` with
 `setOption` to disable this option. An integer greater than or equal to
 `0` will enable the option and will represent the linger interval.
 

 If this option is enabled then `getOption` will return an integer value
 representing the linger interval, else the return value will be `Boolean.FALSE`.

**参见**

- Socket#setSoLinger
- Socket#getSoLinger
