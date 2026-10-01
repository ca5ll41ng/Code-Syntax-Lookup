---
id: "java-en-function-stacktraceelement-getfilename"
language: "java"
lang: "en"
category: "function"
name: "StackTraceElement.getFileName"
signature: "public String getFileName()"
title: "StackTraceElement.getFileName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackTraceElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackTraceElement.getFileName

```java
public String getFileName()
```

Returns the name of the source file containing the execution point
 represented by this stack trace element.  Generally, this corresponds
 to the `SourceFile` attribute of the relevant `class`
 file (as per The Java Virtual Machine Specification, Section
 {@jvms 4.7.7}).  In some systems, the name may refer to some source code unit
 other than a file, such as an entry in source repository.

**返回**

- the name of the file containing the execution point represented by this stack trace element, or `null` if this information is unavailable.
