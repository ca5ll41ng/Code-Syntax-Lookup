---
id: "java-en-function-socketpermission-getactions"
language: "java"
lang: "en"
category: "function"
name: "SocketPermission.getActions"
signature: "public String getActions()"
title: "SocketPermission.getActions"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketPermission.getActions

```java
public String getActions()
```

Returns the canonical string representation of the actions.
 Always returns present actions in the following order:
 connect, listen, accept, resolve.

**返回**

- the canonical string representation of the actions.
