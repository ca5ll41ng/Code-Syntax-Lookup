---
id: "java-en-function-attributelist-getlength"
language: "java"
lang: "en"
category: "function"
name: "AttributeList.getLength"
signature: "public abstract int getLength ()"
title: "AttributeList.getLength"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/AttributeList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeList.getLength

```java
public abstract int getLength ()
```

Return the number of attributes in this list.

 

The SAX parser may provide attributes in any
 arbitrary order, regardless of the order in which they were
 declared or specified.  The number of attributes may be
 zero.

**返回**

- The number of attributes in the list.
