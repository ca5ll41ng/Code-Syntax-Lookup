---
id: "java-en-function-netpermission-netpermission"
language: "java"
lang: "en"
category: "function"
name: "NetPermission.NetPermission"
signature: "public NetPermission(String name)"
title: "NetPermission.NetPermission"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetPermission.NetPermission

```java
public NetPermission(String name)
```

Creates a new NetPermission with the specified name.
 The name is the symbolic name of the NetPermission, such as
 "setDefaultAuthenticator", etc. An asterisk
 may appear at the end of the name, following a ".", or by itself, to
 signify a wildcard match.

**参数**

- **name** — the name of the NetPermission.

**异常**

- **NullPointerException** — if `name` is `null`.
- **IllegalArgumentException** — if `name` is empty.
