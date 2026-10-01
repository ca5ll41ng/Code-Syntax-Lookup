---
id: "java-en-function-datagramsocketimpl-gettimetolive"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.getTimeToLive"
signature: "protected abstract int getTimeToLive() throws IOException"
title: "DatagramSocketImpl.getTimeToLive"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.getTimeToLive

```java
protected abstract int getTimeToLive() throws IOException
```

Retrieve the TTL (time-to-live) option.

**返回**

- an `int` representing the time-to-live value

**异常**

- **IOException** — if an I/O exception occurs while retrieving the time-to-live option

**参见**

- #setTimeToLive(int)
