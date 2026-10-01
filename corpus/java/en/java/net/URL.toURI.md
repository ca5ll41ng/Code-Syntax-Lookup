---
id: "java-en-function-url-touri"
language: "java"
lang: "en"
category: "function"
name: "URL.toURI"
signature: "public URI toURI() throws URISyntaxException"
title: "URL.toURI"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.toURI

```java
public URI toURI() throws URISyntaxException
```

Returns a `java.net.URI` equivalent to this URL.
 This method functions in the same way as `new URI (this.toString())`.
 

Note, any URL instance that complies with RFC&nbsp;2396 can be converted
 to a URI. However, some URLs that are not strictly in compliance
 can not be converted to a URI.

**返回**

- a URI instance equivalent to this URL.

**异常**

- **URISyntaxException** — if this URL is not formatted strictly according to RFC&nbsp;2396 and cannot be converted to a URI.

> *Since 1.5*
