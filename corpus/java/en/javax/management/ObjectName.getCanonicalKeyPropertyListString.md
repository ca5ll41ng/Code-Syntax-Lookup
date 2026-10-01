---
id: "java-en-function-objectname-getcanonicalkeypropertyliststring"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.getCanonicalKeyPropertyListString"
signature: "public String getCanonicalKeyPropertyListString()"
title: "ObjectName.getCanonicalKeyPropertyListString"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.getCanonicalKeyPropertyListString

```java
public String getCanonicalKeyPropertyListString()
```

Returns a string representation of the list of key properties,
 in which the key properties are sorted in lexical order. This
 is used in lexicographic comparisons performed in order to
 select MBeans based on their key property list.  Lexical order
 is the order implied by `compareTo(String)
 String.compareTo`.

**返回**

- The canonical key property list string.  This string is independent of whether the ObjectName is a pattern.
