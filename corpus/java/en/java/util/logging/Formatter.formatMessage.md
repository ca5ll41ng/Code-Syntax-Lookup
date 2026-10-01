---
id: "java-en-function-formatter-formatmessage"
language: "java"
lang: "en"
category: "function"
name: "Formatter.formatMessage"
signature: "public String formatMessage(LogRecord record)"
title: "Formatter.formatMessage"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Formatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Formatter.formatMessage

```java
public String formatMessage(LogRecord record)
```

Localize and format the message string from a log record.  This
 method is provided as a convenience for Formatter subclasses to
 use when they are performing formatting.
 

 The message string is first localized to a format string using
 the record's ResourceBundle.  (If there is no ResourceBundle,
 or if the message key is not found, then the key is used as the
 format string.)  The format String uses java.text style
 formatting.
 
 
- If there are no parameters, no formatter is used.
 
- Otherwise, if the string contains "{{@literal}"
     where  is in [0-9],
     java.text.MessageFormat is used to format the string.
 
- Otherwise no formatting is performed.

**参数**

- **record** — the log record containing the raw message

**返回**

- a localized and formatted message
