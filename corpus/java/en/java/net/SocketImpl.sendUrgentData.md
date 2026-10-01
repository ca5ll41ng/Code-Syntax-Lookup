---
id: "java-en-function-socketimpl-sendurgentdata"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.sendUrgentData"
signature: "protected abstract void sendUrgentData (int data) throws IOException"
title: "SocketImpl.sendUrgentData"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.sendUrgentData

```java
protected abstract void sendUrgentData (int data) throws IOException
```

Send one byte of urgent data on the socket.
 The byte to be sent is the low eight bits of the parameter

**参数**

- **data** — The byte of data to send

**异常**

- **IOException** — if there is an error sending the data.

> *Since 1.4*
