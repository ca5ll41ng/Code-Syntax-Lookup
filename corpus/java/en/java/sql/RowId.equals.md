---
id: "java-en-function-rowid-equals"
language: "java"
lang: "en"
category: "function"
name: "RowId.equals"
signature: "boolean equals(Object obj)"
title: "RowId.equals"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/RowId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowId.equals

```java
boolean equals(Object obj)
```

Compares this `RowId` to the specified object. The result is
 `true` if and only if the argument is not null and is a RowId
 object that represents the same ROWID as  this object.
 

 It is important
 to consider both the origin and the valid lifetime of a `RowId`
 when comparing it to another `RowId`. If both are valid, and
 both are from the same table on the same data source, then if they are equal
 they identify
 the same row; if one or more is no longer guaranteed to be valid, or if
 they originate from different data sources, or different tables on the
 same data source, they  may be equal but still
 not identify the same row.

**参数**

- **obj** — the `Object` to compare this `RowId` object against.

**返回**

- true if the `RowId`s are equal; false otherwise

> *Since 1.6*
