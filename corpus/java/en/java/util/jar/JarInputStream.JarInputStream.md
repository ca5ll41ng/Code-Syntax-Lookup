---
id: "java-en-function-jarinputstream-jarinputstream"
language: "java"
lang: "en"
category: "function"
name: "JarInputStream.JarInputStream"
signature: "public JarInputStream(InputStream in) throws IOException"
title: "JarInputStream.JarInputStream"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarInputStream.JarInputStream

```java
public JarInputStream(InputStream in) throws IOException
```

Creates a new `JarInputStream` and reads the optional
 manifest. If a manifest is present, also attempts to verify
 the signatures if the JarInputStream is signed.

**参数**

- **in** — the actual input stream

**异常**

- **IOException** — if an I/O error has occurred
