---
id: "java-en-function-jarurlconnection-getjarfile"
language: "java"
lang: "en"
category: "function"
name: "JarURLConnection.getJarFile"
signature: "public abstract JarFile getJarFile() throws IOException"
title: "JarURLConnection.getJarFile"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/JarURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarURLConnection.getJarFile

```java
public abstract JarFile getJarFile() throws IOException
```

Return the JAR file for this connection.

**返回**

- the JAR file for this connection. If the connection is a connection to an entry of a JAR file, the JAR file object is returned

**异常**

- **IOException** — if an IOException occurs while trying to connect to the JAR file for this connection.

**参见**

- #connect
