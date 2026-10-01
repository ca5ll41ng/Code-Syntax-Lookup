---
id: "java-en-function-xmlfilter-getparent"
language: "java"
lang: "en"
category: "function"
name: "XMLFilter.getParent"
signature: "public abstract XMLReader getParent ()"
title: "XMLFilter.getParent"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilter.getParent

```java
public abstract XMLReader getParent ()
```

Get the parent reader.

 

This method allows the application to query the parent
 reader (which may be another filter).  It is generally a
 bad idea to perform any operations on the parent reader
 directly: they should all pass through this filter.

**返回**

- The parent filter, or null if none has been set.
