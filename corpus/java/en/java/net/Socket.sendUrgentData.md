---
id: "java-en-function-socket-sendurgentdata"
language: "java"
lang: "en"
category: "function"
name: "Socket.sendUrgentData"
signature: "public void sendUrgentData(int data) throws IOException"
title: "Socket.sendUrgentData"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.sendUrgentData

```java
public void sendUrgentData(int data) throws IOException
```

Send one byte of urgent data on the socket. The byte to be sent is the lowest eight
 bits of the data parameter. The urgent byte is
 sent after any preceding writes to the socket OutputStream
 and before any future writes to the OutputStream.

**参数**

- **data** — The byte of data to send

**异常**

- **IOException** — if there is an error sending the data.

> *Since 1.4*
