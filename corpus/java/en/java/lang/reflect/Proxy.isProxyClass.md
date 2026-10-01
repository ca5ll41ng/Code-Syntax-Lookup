---
id: "java-en-function-proxy-isproxyclass"
language: "java"
lang: "en"
category: "function"
name: "Proxy.isProxyClass"
signature: "public static boolean isProxyClass(Class<?> cl)"
title: "Proxy.isProxyClass"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Proxy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Proxy.isProxyClass

```java
public static boolean isProxyClass(Class<?> cl)
```

Returns true if the given class is a proxy class.

 to use it to make security decisions, so its implementation should
 not just test if the class in question extends `Proxy`.

**参数**

- **cl** — the class to test

**返回**

- `true` if the class is a proxy class and `false` otherwise

**异常**

- **NullPointerException** — if `cl` is `null`
