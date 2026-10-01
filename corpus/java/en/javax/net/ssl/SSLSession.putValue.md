---
id: "java-en-function-sslsession-putvalue"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.putValue"
signature: "void putValue(String name, Object value)"
title: "SSLSession.putValue"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.putValue

```java
void putValue(String name, Object value)
```

Binds the specified `value` object into the
 session's application layer data
 with the given `name`.
 

 Any existing binding using the same `name` is
 replaced.  If the new (or existing) `value` implements the
 `SSLSessionBindingListener` interface, the object
 represented by `value` is notified appropriately.

**参数**

- **name** — the name to which the data object will be bound. This may not be null.
- **value** — the data object to be bound. This may not be null.

**异常**

- **IllegalArgumentException** — if either argument is null.
