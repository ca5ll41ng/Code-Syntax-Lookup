---
id: "java-en-function-sqlpermission-sqlpermission"
language: "java"
lang: "en"
category: "function"
name: "SQLPermission.SQLPermission"
signature: "public SQLPermission(String name)"
title: "SQLPermission.SQLPermission"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLPermission.SQLPermission

```java
public SQLPermission(String name)
```

Creates a new `SQLPermission` object with the specified name.
 The name is the symbolic name of the `SQLPermission`.

**参数**

- **name** — the name of this `SQLPermission` object, which must be either `setLog`, `callAbort`, `setSyncFactory`, `deregisterDriver`, or `setNetworkTimeout`

**异常**

- **NullPointerException** — if `name` is `null`.
- **IllegalArgumentException** — if `name` is empty.
