---
id: "java-en-function-stacktraceelement-getlinenumber"
language: "java"
lang: "en"
category: "function"
name: "StackTraceElement.getLineNumber"
signature: "public int getLineNumber()"
title: "StackTraceElement.getLineNumber"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackTraceElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackTraceElement.getLineNumber

```java
public int getLineNumber()
```

Returns the line number of the source line containing the execution
 point represented by this stack trace element.  Generally, this is
 derived from the `LineNumberTable` attribute of the relevant
 `class` file (as per The Java Virtual Machine
 Specification, Section {@jvms 4.7.8}).

**返回**

- the line number of the source line containing the execution point represented by this stack trace element, or a negative number if this information is unavailable.
