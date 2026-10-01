---
id: "java-en-function-objectname-getcanonicalname"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.getCanonicalName"
signature: "public String getCanonicalName()"
title: "ObjectName.getCanonicalName"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.getCanonicalName

```java
public String getCanonicalName()
```

Returns the canonical form of the name; that is, a string
 representation where the properties are sorted in lexical
 order.

 

More precisely, the canonical form of the name is a String
 consisting of the domain part, a colon
 (:), the canonical key property list, and
 a pattern indication.

 

The canonical key property list is the same string
 as described for `getCanonicalKeyPropertyListString`.

 

The pattern indication is:
 
 
- empty for an ObjectName
 that is not a property list pattern;
 
- an asterisk for an ObjectName
 that is a property list pattern with no keys; or
 
- a comma and an
 asterisk (,*) for an ObjectName that is a property
 list pattern with at least one key.

**返回**

- The canonical form of the name.
