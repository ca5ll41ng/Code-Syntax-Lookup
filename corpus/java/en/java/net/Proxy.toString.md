---
id: "java-en-function-proxy-tostring"
language: "java"
lang: "en"
category: "function"
name: "Proxy.toString"
signature: "public String toString()"
title: "Proxy.toString"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Proxy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Proxy.toString

```java
public String toString()
```

Constructs a string representation of this Proxy.
 This String is constructed by calling toString() on its type
 and concatenating " @ " and the toString() result from its address
 if its type is not `DIRECT`.

**返回**

- a string representation of this object.
