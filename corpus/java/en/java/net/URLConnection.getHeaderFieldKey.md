---
id: "java-en-function-urlconnection-getheaderfieldkey"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getHeaderFieldKey"
signature: "public String getHeaderFieldKey(int n)"
title: "URLConnection.getHeaderFieldKey"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getHeaderFieldKey

```java
public String getHeaderFieldKey(int n)
```

Returns the key for the `n`th header field.
 Some implementations may treat the `0`th
 header field as special, in which case, `getHeaderField`
 may return some value, but `getHeaderFieldKey(0)` returns `null`.
 For `n > 0 ` it returns `null` if there are fewer than `n+1` fields.

**参数**

- **n** — an index, where `n>=0`

**返回**

- the key for the `n`th header field, or `null` if there are fewer than `n+1` fields when `n > 0`.
