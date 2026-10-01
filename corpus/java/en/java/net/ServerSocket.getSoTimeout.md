---
id: "java-en-function-serversocket-getsotimeout"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.getSoTimeout"
signature: "public int getSoTimeout() throws IOException"
title: "ServerSocket.getSoTimeout"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.getSoTimeout

```java
public int getSoTimeout() throws IOException
```

Retrieve setting for `SO_TIMEOUT SO_TIMEOUT`.
 0 returns implies that the option is disabled (i.e., timeout of infinity).

**返回**

- the `SO_TIMEOUT SO_TIMEOUT` value

**异常**

- **IOException** — if an I/O error occurs or the socket is closed.

**参见**

- #setSoTimeout(int)

> *Since 1.1*
