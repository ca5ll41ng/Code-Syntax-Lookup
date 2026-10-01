---
id: "java-en-function-sqlwarning-sqlwarning"
language: "java"
lang: "en"
category: "function"
name: "SQLWarning.SQLWarning"
signature: "public SQLWarning(String reason, String SQLState, int vendorCode)"
title: "SQLWarning.SQLWarning"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLWarning.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLWarning.SQLWarning

```java
public SQLWarning(String reason, String SQLState, int vendorCode)
```

Constructs a  `SQLWarning` object
  with a given `reason`, `SQLState`  and
 `vendorCode`.

 The `cause` is not initialized, and may subsequently be
 initialized by a call to the
 `initCause` method.

**参数**

- **reason** — a description of the warning
- **SQLState** — an XOPEN or SQL:2003 code identifying the warning
- **vendorCode** — a database vendor-specific warning code
