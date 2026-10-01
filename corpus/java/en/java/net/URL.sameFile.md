---
id: "java-en-function-url-samefile"
language: "java"
lang: "en"
category: "function"
name: "URL.sameFile"
signature: "public boolean sameFile(URL other)"
title: "URL.sameFile"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.sameFile

```java
public boolean sameFile(URL other)
```

Compares two URLs, excluding the fragment component.

 Returns `true` if this `URL` and the
 `other` argument are equal without taking the
 fragment component into consideration.

**参数**

- **other** — the `URL` to compare against.

**返回**

- `true` if they reference the same remote object; `false` otherwise.
