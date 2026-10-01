---
id: "java-en-function-rowset-isreadonly"
language: "java"
lang: "en"
category: "function"
name: "RowSet.isReadOnly"
signature: "boolean isReadOnly()"
title: "RowSet.isReadOnly"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.isReadOnly

```java
boolean isReadOnly()
```

Retrieves whether this `RowSet` object is read-only.
 If updates are possible, the default is for a rowset to be
 updatable.
 

 Attempts to update a read-only rowset will result in an
 `SQLException` being thrown.

**返回**

- `true` if this `RowSet` object is read-only; `false` if it is updatable

**参见**

- #setReadOnly
