---
id: "java-en-function-sslsession-getvalue"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getValue"
signature: "Object getValue(String name)"
title: "SSLSession.getValue"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getValue

```java
Object getValue(String name)
```

Returns the object bound to the given name in the session's
 application layer data.  Returns null if there is no such binding.

**参数**

- **name** — the name of the binding to find.

**返回**

- the value bound to that name, or null if the binding does not exist.

**异常**

- **IllegalArgumentException** — if the argument is null.
