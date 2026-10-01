---
id: "java-en-function-remotecall-releaseinputstream"
language: "java"
lang: "en"
category: "function"
name: "RemoteCall.releaseInputStream"
signature: "void releaseInputStream() throws IOException"
title: "RemoteCall.releaseInputStream"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteCall.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteCall.releaseInputStream

```java
void releaseInputStream() throws IOException
```

Release the input stream. This would allow some transports to release
 the channel early.

**异常**

- **java.io.IOException** — if an I/O error occurs.

> *Since 1.1*

> **⚠ Deprecated** — no replacement
