---
id: "java-en-function-securitymanager-checkread"
language: "java"
lang: "en"
category: "function"
name: "SecurityManager.checkRead"
signature: "public void checkRead(FileDescriptor fd)"
title: "SecurityManager.checkRead"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/SecurityManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecurityManager.checkRead

```java
public void checkRead(FileDescriptor fd)
```

Throws `SecurityException`.

**参数**

- **fd** — the system-dependent file descriptor

**异常**

- **SecurityException** — always
