---
id: "java-en-function-jarurlconnection-getjarentry"
language: "java"
lang: "en"
category: "function"
name: "JarURLConnection.getJarEntry"
signature: "public JarEntry getJarEntry() throws IOException"
title: "JarURLConnection.getJarEntry"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/JarURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarURLConnection.getJarEntry

```java
public JarEntry getJarEntry() throws IOException
```

Return the JAR entry object for this connection, if any. This
 method returns null if the JAR file URL corresponding to this
 connection points to a JAR file and not a JAR file entry.

**返回**

- the JAR entry object for this connection, or null if the JAR URL for this connection points to a JAR file.

**异常**

- **IOException** — if getting the JAR file for this connection causes an IOException to be thrown.

**参见**

- #getJarFile
- #getJarEntry
