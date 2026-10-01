---
id: "java-en-function-url-getcontent"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["urlconnection-ssrf"],"cwe":["CWE-918"],"params":[0,1]}
name: "URL.getContent"
signature: "public final Object getContent() throws java.io.IOException"
title: "URL.getContent"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.getContent

```java
public final Object getContent() throws java.io.IOException
```

Gets the contents of this URL. This method is a shorthand for:
 {@snippet lang="java" :
 openConnection().getContent()
 }

**返回**

- the contents of this URL.

**异常**

- **IOException** — if an I/O exception occurs.

**参见**

- java.net.URLConnection#getContent()
