---
id: "java-en-function-statement-setescapeprocessing"
language: "java"
lang: "en"
category: "function"
name: "Statement.setEscapeProcessing"
signature: "void setEscapeProcessing(boolean enable) throws SQLException"
title: "Statement.setEscapeProcessing"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.setEscapeProcessing

```java
void setEscapeProcessing(boolean enable) throws SQLException
```

Sets escape processing on or off.
 If escape scanning is on (the default), the driver will do
 escape substitution before sending the SQL statement to the database.

 The `Connection` and `DataSource` property
 `escapeProcessing` may be used to change the default escape processing
 behavior.  A value of true (the default) enables escape Processing for
 all `Statement` objects. A value of false disables escape processing
 for all `Statement` objects.  The `setEscapeProcessing`
 method may be used to specify the escape processing behavior for an
 individual `Statement` object.
 

 Note: Since prepared statements have usually been parsed prior
 to making this call, disabling escape processing for
 `PreparedStatements` objects will have no effect.

**参数**

- **enable** — `true` to enable escape processing; `false` to disable it

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`
