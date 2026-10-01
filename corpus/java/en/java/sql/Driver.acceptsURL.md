---
id: "java-en-function-driver-acceptsurl"
language: "java"
lang: "en"
category: "function"
name: "Driver.acceptsURL"
signature: "boolean acceptsURL(String url) throws SQLException"
title: "Driver.acceptsURL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Driver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Driver.acceptsURL

```java
boolean acceptsURL(String url) throws SQLException
```

Retrieves whether the driver thinks that it can open a connection
 to the given URL.  Typically drivers will return `true` if they
 understand the sub-protocol specified in the URL and `false` if
 they do not.

**参数**

- **url** — the URL of the database

**返回**

- `true` if this driver understands the given URL; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs or the url is `null`
