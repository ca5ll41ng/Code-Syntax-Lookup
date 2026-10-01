---
id: "java-en-function-wrapper-unwrap"
language: "java"
lang: "en"
category: "function"
name: "Wrapper.unwrap"
signature: "<T> T unwrap(java.lang.Class<T> iface) throws java.sql.SQLException"
title: "Wrapper.unwrap"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Wrapper.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Wrapper.unwrap

```java
<T> T unwrap(java.lang.Class<T> iface) throws java.sql.SQLException
```

Returns an object that implements the given interface to allow access to
 non-standard methods, or standard methods not exposed by the proxy.

 If the receiver implements the interface then the result is the receiver
 or a proxy for the receiver. If the receiver is a wrapper
 and the wrapped object implements the interface then the result is the
 wrapped object or a proxy for the wrapped object. Otherwise return the
 the result of calling `unwrap` recursively on the wrapped object
 or a proxy for that result. If the receiver is not a
 wrapper and does not implement the interface, then an `SQLException` is thrown.

**参数**

- **the** — type of the class modeled by this Class object
- **iface** — A Class defining an interface that the result must implement.

**返回**

- an object that implements the interface. May be a proxy for the actual implementing object.

**异常**

- **java.sql.SQLException** — If no object found that implements the interface

> *Since 1.6*
