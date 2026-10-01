---
id: "java-en-function-compositename-tostring"
language: "java"
lang: "en"
category: "function"
name: "CompositeName.toString"
signature: "public String toString()"
title: "CompositeName.toString"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName.toString

```java
public String toString()
```

Generates the string representation of this composite name.
 The string representation consists of enumerating in order
 each component of the composite name and separating
 each component by a forward slash character. Quoting and
 escape characters are applied where necessary according to
 the JNDI syntax, which is described in the class description.
 An empty component is represented by an empty string.

 The string representation thus generated can be passed to
 the CompositeName constructor to create a new equivalent
 composite name.

**返回**

- A non-null string representation of this composite name.
