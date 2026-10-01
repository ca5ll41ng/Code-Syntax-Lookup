---
id: "java-en-function-socketoptions-so_oobinline"
language: "java"
lang: "en"
category: "function"
name: "SocketOptions.SO_OOBINLINE"
signature: "@Native public static final int SO_OOBINLINE = 0x1003"
title: "SocketOptions.SO_OOBINLINE"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketOptions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketOptions.SO_OOBINLINE

```java
@Native public static final int SO_OOBINLINE = 0x1003
```

When this option is set, any TCP urgent data received on the socket will be received
 through the socket input stream. When the option is disabled (which is the default)
 urgent data is silently discarded.

**参见**

- Socket#setOOBInline
- Socket#getOOBInline
