---
id: "java-en-function-jdbctype-valueof"
language: "java"
lang: "en"
category: "function"
name: "JDBCType.valueOf"
signature: "public static JDBCType valueOf(int type)"
title: "JDBCType.valueOf"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/JDBCType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JDBCType.valueOf

```java
public static JDBCType valueOf(int type)
```

Returns the `JDBCType` that corresponds to the specified
 `Types` value

**参数**

- **type** — `Types` value

**返回**

- The `JDBCType` constant

**异常**

- **IllegalArgumentException** — if this enum type has no constant with the specified `Types` value

**参见**

- Types
