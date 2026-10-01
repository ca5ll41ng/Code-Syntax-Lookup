---
id: "java-en-function-namingexception-tostring"
language: "java"
lang: "en"
category: "function"
name: "NamingException.toString"
signature: "public String toString()"
title: "NamingException.toString"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.toString

```java
public String toString()
```

Generates the string representation of this exception.
 The string representation consists of this exception's class name,
 its detailed message, and if it has a root cause, the string
 representation of the root cause exception, followed by
 the remaining name (if it is not null).
 This string is used for debugging and not meant to be interpreted
 programmatically.

**返回**

- The non-null string containing the string representation of this exception.
