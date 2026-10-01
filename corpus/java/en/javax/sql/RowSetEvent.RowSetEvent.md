---
id: "java-en-function-rowsetevent-rowsetevent"
language: "java"
lang: "en"
category: "function"
name: "RowSetEvent.RowSetEvent"
signature: "public RowSetEvent(RowSet source)"
title: "RowSetEvent.RowSetEvent"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetEvent.RowSetEvent

```java
public RowSetEvent(RowSet source)
```

Constructs a `RowSetEvent` object initialized with the
 given `RowSet` object.

**参数**

- **source** — the `RowSet` object whose data has changed or whose cursor has moved

**异常**

- **IllegalArgumentException** — if `source` is null.
