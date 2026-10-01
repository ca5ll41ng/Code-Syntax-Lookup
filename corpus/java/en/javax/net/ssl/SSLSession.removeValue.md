---
id: "java-en-function-sslsession-removevalue"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.removeValue"
signature: "void removeValue(String name)"
title: "SSLSession.removeValue"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.removeValue

```java
void removeValue(String name)
```

Removes the object bound to the given name in the session's
 application layer data.  Does nothing if there is no object
 bound to the given name.  If the bound existing object
 implements the `SSLSessionBindingListener` interface,
 it is notified appropriately.

**参数**

- **name** — the name of the object to remove

**异常**

- **IllegalArgumentException** — if the argument is null.
