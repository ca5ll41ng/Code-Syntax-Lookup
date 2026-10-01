---
id: "java-en-function-xmlformatter-xmlformatter"
language: "java"
lang: "en"
category: "function"
name: "XMLFormatter.XMLFormatter"
signature: "public XMLFormatter()"
title: "XMLFormatter.XMLFormatter"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/XMLFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFormatter.XMLFormatter

```java
public XMLFormatter()
```

Creates a new instance of XMLFormatter.

    Since JDK 9, the XMLFormatter will print out the record `getInstant() event time` as an Instant. This instant
    has the best resolution available on the system. The ``
    element will contain the instant as formatted by the `ISO_INSTANT`.
    In addition, an optional `` element containing a
    nanosecond adjustment will be printed if the instant contains some
    nanoseconds below the millisecond resolution.
    

    This new behavior can be turned off, and the old formatting restored,
    by specifying a property in the `getProperty(java.lang.String) logging configuration`.
    If `LogManager.getLogManager().getProperty(
    this.getClass().getName()+".useInstant")` is `"false"` or
    `"0"`, the old formatting will be restored.
