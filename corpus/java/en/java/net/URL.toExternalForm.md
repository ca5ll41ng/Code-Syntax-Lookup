---
id: "java-en-function-url-toexternalform"
language: "java"
lang: "en"
category: "function"
name: "URL.toExternalForm"
signature: "public String toExternalForm()"
title: "URL.toExternalForm"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.toExternalForm

```java
public String toExternalForm()
```

Constructs a string representation of this `URL`. The
 string is created by calling the `toExternalForm`
 method of the stream protocol handler for this object.

**返回**

- a string representation of this object.

**参见**

- java.net.URL#URL(java.lang.String, java.lang.String, int, java.lang.String)
- java.net.URLStreamHandler#toExternalForm(java.net.URL)
