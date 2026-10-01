---
id: "java-en-function-sslpermission-sslpermission"
language: "java"
lang: "en"
category: "function"
name: "SSLPermission.SSLPermission"
signature: "public SSLPermission(String name)"
title: "SSLPermission.SSLPermission"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLPermission.SSLPermission

```java
public SSLPermission(String name)
```

Creates a new SSLPermission with the specified name.
 The name is the symbolic name of the SSLPermission, such as
 "setDefaultAuthenticator", etc. An asterisk
 may appear at the end of the name, following a ".", or by itself, to
 signify a wildcard match.

**参数**

- **name** — the name of the SSLPermission.

**异常**

- **NullPointerException** — if name is null.
- **IllegalArgumentException** — if name is empty.
