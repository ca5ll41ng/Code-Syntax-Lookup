---
id: "java-en-function-jarurlconnection-getattributes"
language: "java"
lang: "en"
category: "function"
name: "JarURLConnection.getAttributes"
signature: "public Attributes getAttributes() throws IOException"
title: "JarURLConnection.getAttributes"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/JarURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarURLConnection.getAttributes

```java
public Attributes getAttributes() throws IOException
```

Return the Attributes object for this connection if the URL
 for it points to a JAR file entry, null otherwise.

**返回**

- the Attributes object for this connection if the URL for it points to a JAR file entry, null otherwise.

**异常**

- **IOException** — if getting the JAR entry causes an IOException to be thrown.

**参见**

- #getJarEntry
