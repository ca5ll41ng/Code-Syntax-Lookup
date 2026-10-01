---
id: "java-en-function-remotestub-setref"
language: "java"
lang: "en"
category: "function"
name: "RemoteStub.setRef"
signature: "protected static void setRef(RemoteStub stub, RemoteRef ref)"
title: "RemoteStub.setRef"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteStub.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteStub.setRef

```java
protected static void setRef(RemoteStub stub, RemoteRef ref)
```

Throws `UnsupportedOperationException`.

**参数**

- **stub** — the remote stub
- **ref** — the remote reference

**异常**

- **UnsupportedOperationException** — always

> *Since 1.1*

> **⚠ Deprecated** — No replacement.  The `setRef` method was intended for setting the remote reference of a remote stub. This is unnecessary, since `RemoteStub`s can be created and initialized with a remote reference through use of the `RemoteStub` constructor.
