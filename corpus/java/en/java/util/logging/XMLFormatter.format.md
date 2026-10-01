---
id: "java-en-function-xmlformatter-format"
language: "java"
lang: "en"
category: "function"
name: "XMLFormatter.format"
signature: "public String format(LogRecord record)"
title: "XMLFormatter.format"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/XMLFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFormatter.format

```java
public String format(LogRecord record)
```

Format the given message to XML.
 

 This method can be overridden in a subclass.
 It is recommended to use the `formatMessage`
 convenience method to localize and format the message field.

**参数**

- **record** — the log record to be formatted.

**返回**

- a formatted log record
