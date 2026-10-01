---
id: "java-en-function-logrecord-getmessage"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.getMessage"
signature: "public String getMessage()"
title: "LogRecord.getMessage"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.getMessage

```java
public String getMessage()
```

Get the "raw" log message, before localization or formatting.
 

 May be null, which is equivalent to the empty string "".
 

 This message may be either the final text or a localization key.
 

 During formatting, if the source logger has a localization
 ResourceBundle and if that ResourceBundle has an entry for
 this message string, then the message string is replaced
 with the localized value.

**返回**

- the raw message string
