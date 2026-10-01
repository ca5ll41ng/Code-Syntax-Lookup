---
id: "java-en-function-httpurlconnection-getpermission"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.getPermission"
signature: "public Permission getPermission() throws IOException"
title: "HttpURLConnection.getPermission"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.getPermission

```java
public Permission getPermission() throws IOException
```

Returns a `SocketPermission` object representing the
 permission necessary to connect to the destination host and port.

**返回**

- a `SocketPermission` object representing the permission necessary to connect to the destination host and port.

**异常**

- **IOException** — if an error occurs while computing the permission.

> **⚠ Deprecated** — Permissions can no longer be used for controlling access to resources as the Security Manager is no longer supported.
