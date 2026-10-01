---
id: "java-en-function-rowset-getusername"
language: "java"
lang: "en"
category: "function"
name: "RowSet.getUsername"
signature: "String getUsername()"
title: "RowSet.getUsername"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.getUsername

```java
String getUsername()
```

Retrieves the username used to create a database connection for this
 `RowSet` object.
 The username property is set at run time before calling the method
 `execute`.  It is
 not usually part of the serialized state of a `RowSet` object.

**返回**

- the username property

**参见**

- #setUsername
