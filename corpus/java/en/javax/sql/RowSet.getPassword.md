---
id: "java-en-function-rowset-getpassword"
language: "java"
lang: "en"
category: "function"
name: "RowSet.getPassword"
signature: "String getPassword()"
title: "RowSet.getPassword"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.getPassword

```java
String getPassword()
```

Retrieves the password used to create a database connection.
 The password property is set at run time before calling the method
 `execute`.  It is not usually part of the serialized state
 of a `RowSet` object.

**返回**

- the password for making a database connection

**参见**

- #setPassword
