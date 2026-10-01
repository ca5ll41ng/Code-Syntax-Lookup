---
id: "java-en-function-remotecall-getresultstream"
language: "java"
lang: "en"
category: "function"
name: "RemoteCall.getResultStream"
signature: "ObjectOutput getResultStream(boolean success) throws IOException, StreamCorruptedException"
title: "RemoteCall.getResultStream"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteCall.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteCall.getResultStream

```java
ObjectOutput getResultStream(boolean success) throws IOException, StreamCorruptedException
```

Returns an output stream (may put out header information
 relating to the success of the call). Should only succeed
 once per remote call.

**参数**

- **success** — If true, indicates normal return, else indicates exceptional return.

**返回**

- output stream for writing call result

**异常**

- **java.io.IOException** — if an I/O error occurs.
- **java.io.StreamCorruptedException** — If already been called.

> *Since 1.1*

> **⚠ Deprecated** — no replacement
