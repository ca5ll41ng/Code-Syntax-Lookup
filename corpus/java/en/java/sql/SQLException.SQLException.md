---
id: "java-en-function-sqlexception-sqlexception"
language: "java"
lang: "en"
category: "function"
name: "SQLException.SQLException"
signature: "public SQLException(String reason, String SQLState, int vendorCode)"
title: "SQLException.SQLException"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLException.SQLException

```java
public SQLException(String reason, String SQLState, int vendorCode)
```

Constructs a `SQLException` object with a given
 `reason`, `SQLState`  and
 `vendorCode`.

 The `cause` is not initialized, and may subsequently be
 initialized by a call to the
 `initCause` method.

**参数**

- **reason** — a description of the exception
- **SQLState** — an XOPEN or SQL:2003 code identifying the exception
- **vendorCode** — a database vendor-specific exception code
