---
id: "java-en-function-jarurlconnection-getmanifest"
language: "java"
lang: "en"
category: "function"
name: "JarURLConnection.getManifest"
signature: "public Manifest getManifest() throws IOException"
title: "JarURLConnection.getManifest"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/JarURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarURLConnection.getManifest

```java
public Manifest getManifest() throws IOException
```

Returns the Manifest for this connection, or null if none.

**返回**

- the manifest object corresponding to the JAR file object for this connection.

**异常**

- **IOException** — if getting the JAR file for this connection causes an IOException to be thrown.

**参见**

- #getJarFile
