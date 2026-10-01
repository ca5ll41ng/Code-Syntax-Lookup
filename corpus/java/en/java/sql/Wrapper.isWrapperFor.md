---
id: "java-en-function-wrapper-iswrapperfor"
language: "java"
lang: "en"
category: "function"
name: "Wrapper.isWrapperFor"
signature: "boolean isWrapperFor(java.lang.Class<?> iface) throws java.sql.SQLException"
title: "Wrapper.isWrapperFor"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Wrapper.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Wrapper.isWrapperFor

```java
boolean isWrapperFor(java.lang.Class<?> iface) throws java.sql.SQLException
```

Returns true if this either implements the interface argument or is directly or indirectly a wrapper
 for an object that does. Returns false otherwise. If this implements the interface then return true,
 else if this is a wrapper then return the result of recursively calling `isWrapperFor` on the wrapped
 object. If this does not implement the interface and is not a wrapper, return false.
 This method should be implemented as a low-cost operation compared to `unwrap` so that
 callers can use this method to avoid expensive `unwrap` calls that may fail. If this method
 returns true then calling `unwrap` with the same argument should succeed.

**参数**

- **iface** — a Class defining an interface.

**返回**

- true if this implements the interface or directly or indirectly wraps an object that does.

**异常**

- **java.sql.SQLException** — if an error occurs while determining whether this is a wrapper for an object with the given interface.

> *Since 1.6*
