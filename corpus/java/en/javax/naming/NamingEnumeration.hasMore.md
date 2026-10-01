---
id: "java-en-function-namingenumeration-hasmore"
language: "java"
lang: "en"
category: "function"
name: "NamingEnumeration.hasMore"
signature: "public boolean hasMore() throws NamingException"
title: "NamingEnumeration.hasMore"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingEnumeration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEnumeration.hasMore

```java
public boolean hasMore() throws NamingException
```

Determines whether there are any more elements in the enumeration.
 This method allows naming exceptions encountered while
 determining whether there are more elements to be caught and handled
 by the application.

**返回**

- true if there is more in the enumeration ; false otherwise.

**异常**

- **NamingException** — If a naming exception is encountered while attempting to determine whether there is another element in the enumeration. See NamingException and its subclasses for the possible naming exceptions.

**参见**

- java.util.Enumeration#hasMoreElements
