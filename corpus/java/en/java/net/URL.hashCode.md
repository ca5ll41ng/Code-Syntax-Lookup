---
id: "java-en-function-url-hashcode"
language: "java"
lang: "en"
category: "function"
name: "URL.hashCode"
signature: "public synchronized int hashCode()"
title: "URL.hashCode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.hashCode

```java
public synchronized int hashCode()
```

Creates an integer suitable for hash table indexing.

 The hash code is based upon all the URL components relevant for URL
 comparison. As such, this operation is a blocking operation.

**返回**

- a hash code for this `URL`.
