---
id: "java-en-function-socketoptions-so_timeout"
language: "java"
lang: "en"
category: "function"
name: "SocketOptions.SO_TIMEOUT"
signature: "@Native public static final int SO_TIMEOUT = 0x1006"
title: "SocketOptions.SO_TIMEOUT"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketOptions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketOptions.SO_TIMEOUT

```java
@Native public static final int SO_TIMEOUT = 0x1006
```

This option is used to both set and fetch a timeout value on blocking
 `Socket` operations:
 
     
- `accept`
     
- `getInputStream`
     
- `receive`
 

 

 This option must be set prior to entering a blocking operation to take effect. If the
 timeout expires and the operation would continue to block, then
 `java.io.InterruptedIOException` is raised. The `Socket` is not closed
 in such cases.

**参见**

- Socket#setSoTimeout
- ServerSocket#setSoTimeout
- DatagramSocket#setSoTimeout
