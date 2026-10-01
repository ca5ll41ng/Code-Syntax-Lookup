---
id: "java-en-function-remotecall-getoutputstream"
language: "java"
lang: "en"
category: "function"
name: "RemoteCall.getOutputStream"
signature: "ObjectOutput getOutputStream() throws IOException"
title: "RemoteCall.getOutputStream"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteCall.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteCall.getOutputStream

```java
ObjectOutput getOutputStream() throws IOException
```

Return the output stream the stub/skeleton should put arguments/results
 into.

**返回**

- output stream for arguments/results

**异常**

- **java.io.IOException** — if an I/O error occurs.

> *Since 1.1*

> **⚠ Deprecated** — no replacement
