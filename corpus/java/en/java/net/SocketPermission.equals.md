---
id: "java-en-function-socketpermission-equals"
language: "java"
lang: "en"
category: "function"
name: "SocketPermission.equals"
signature: "public boolean equals(Object obj)"
title: "SocketPermission.equals"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketPermission.equals

```java
public boolean equals(Object obj)
```

Checks two SocketPermission objects for equality.

**参数**

- **obj** — the object to test for equality with this object.

**返回**

- true if obj is a SocketPermission, and has the same hostname, port range, and actions as this SocketPermission object. However, port range will be ignored in the comparison if obj only contains the action, 'resolve'.
