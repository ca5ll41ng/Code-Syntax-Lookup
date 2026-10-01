---
id: "java-en-function-url-openstream"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["urlconnection-ssrf"],"cwe":["CWE-918"],"params":[0]}
name: "URL.openStream"
signature: "public final InputStream openStream() throws java.io.IOException"
title: "URL.openStream"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.openStream

```java
public final InputStream openStream() throws java.io.IOException
```

Opens a connection to this `URL` and returns an
 `InputStream` for reading from that connection. This
 method is a shorthand for:
 {@snippet lang="java" :
 openConnection().getInputStream()
 }

**返回**

- an input stream for reading from the URL connection.

**异常**

- **IOException** — if an I/O exception occurs.

**参见**

- java.net.URL#openConnection()
- java.net.URLConnection#getInputStream()
