---
id: "java-en-function-skeleton-dispatch"
language: "java"
lang: "en"
category: "function"
name: "Skeleton.dispatch"
signature: "void dispatch(Remote obj, RemoteCall theCall, int opnum, long hash) throws Exception"
title: "Skeleton.dispatch"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/Skeleton.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Skeleton.dispatch

```java
void dispatch(Remote obj, RemoteCall theCall, int opnum, long hash) throws Exception
```

Unmarshals arguments, calls the actual remote object implementation,
 and marshals the return value or any exception.

**参数**

- **obj** — remote implementation to dispatch call to
- **theCall** — object representing remote call
- **opnum** — operation number
- **hash** — stub/skeleton interface hash

**异常**

- **java.lang.Exception** — if a general exception occurs.

> *Since 1.1*

> **⚠ Deprecated** — no replacement
