---
id: "java-en-function-datagramsocketimpl-settimetolive"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.setTimeToLive"
signature: "protected abstract void setTimeToLive(int ttl) throws IOException"
title: "DatagramSocketImpl.setTimeToLive"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.setTimeToLive

```java
protected abstract void setTimeToLive(int ttl) throws IOException
```

Set the TTL (time-to-live) option.

**参数**

- **ttl** — an `int` specifying the time-to-live value

**异常**

- **IOException** — if an I/O exception occurs while setting the time-to-live option.

**参见**

- #getTimeToLive()
