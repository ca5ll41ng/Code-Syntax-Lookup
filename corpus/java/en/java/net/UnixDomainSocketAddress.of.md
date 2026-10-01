---
id: "java-en-function-unixdomainsocketaddress-of"
language: "java"
lang: "en"
category: "function"
name: "UnixDomainSocketAddress.of"
signature: "public static UnixDomainSocketAddress of(String pathname)"
title: "UnixDomainSocketAddress.of"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/UnixDomainSocketAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnixDomainSocketAddress.of

```java
public static UnixDomainSocketAddress of(String pathname)
```

Creates a UnixDomainSocketAddress from the given path string.

**参数**

- **pathname** — The path string, which can be empty

**返回**

- A UnixDomainSocketAddress

**异常**

- **InvalidPathException** — If the path cannot be converted to a Path
- **NullPointerException** — if pathname is `null`
