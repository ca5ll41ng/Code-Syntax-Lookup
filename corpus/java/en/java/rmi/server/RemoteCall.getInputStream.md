---
id: "java-en-function-remotecall-getinputstream"
language: "java"
lang: "en"
category: "function"
name: "RemoteCall.getInputStream"
signature: "ObjectInput getInputStream() throws IOException"
title: "RemoteCall.getInputStream"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteCall.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteCall.getInputStream

```java
ObjectInput getInputStream() throws IOException
```

Get the InputStream that the stub/skeleton should get
 results/arguments from.

**返回**

- input stream for reading arguments/results

**异常**

- **java.io.IOException** — if an I/O error occurs.

> *Since 1.1*

> **⚠ Deprecated** — no replacement
