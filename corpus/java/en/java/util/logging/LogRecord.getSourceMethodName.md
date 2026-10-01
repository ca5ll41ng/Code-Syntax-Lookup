---
id: "java-en-function-logrecord-getsourcemethodname"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.getSourceMethodName"
signature: "public String getSourceMethodName()"
title: "LogRecord.getSourceMethodName"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.getSourceMethodName

```java
public String getSourceMethodName()
```

Get the  name of the method that (allegedly) issued the logging request.
 

 Note that this sourceMethodName is not verified and may be spoofed.
 This information may either have been provided as part of the
 logging call, or it may have been inferred automatically by the
 logging framework.  In the latter case, the information may only
 be approximate and may in fact describe an earlier call on the
 stack frame.
 

 May be null if no information could be obtained.

**返回**

- the source method name
