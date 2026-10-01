---
id: "java-en-function-datagrampacket-getdata"
language: "java"
lang: "en"
category: "function"
name: "DatagramPacket.getData"
signature: "public synchronized byte[] getData()"
title: "DatagramPacket.getData"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramPacket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramPacket.getData

```java
public synchronized byte[] getData()
```

Returns the data buffer. The data received or the data to be sent
 starts from the `offset` in the buffer,
 and runs for `length` long.

**返回**

- the buffer used to receive or  send data

**参见**

- #setData(byte[], int, int)
