---
id: "java-en-function-urlstreamhandler-hashcode"
language: "java"
lang: "en"
category: "function"
name: "URLStreamHandler.hashCode"
signature: "protected int hashCode(URL u)"
title: "URLStreamHandler.hashCode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLStreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLStreamHandler.hashCode

```java
protected int hashCode(URL u)
```

Provides the default hash calculation. May be overridden by handlers for
 other protocols that have different requirements for hashCode
 calculation.

**参数**

- **u** — a URL object

**返回**

- an `int` suitable for hash table indexing

> *Since 1.3*
