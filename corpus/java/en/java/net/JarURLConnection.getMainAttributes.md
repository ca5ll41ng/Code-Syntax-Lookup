---
id: "java-en-function-jarurlconnection-getmainattributes"
language: "java"
lang: "en"
category: "function"
name: "JarURLConnection.getMainAttributes"
signature: "public Attributes getMainAttributes() throws IOException"
title: "JarURLConnection.getMainAttributes"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/JarURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarURLConnection.getMainAttributes

```java
public Attributes getMainAttributes() throws IOException
```

Returns the main Attributes for the JAR file for this
 connection.

**返回**

- the main Attributes for the JAR file for this connection.

**异常**

- **IOException** — if getting the manifest causes an IOException to be thrown.

**参见**

- #getJarFile
- #getManifest
