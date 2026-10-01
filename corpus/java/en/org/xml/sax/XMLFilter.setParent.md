---
id: "java-en-function-xmlfilter-setparent"
language: "java"
lang: "en"
category: "function"
name: "XMLFilter.setParent"
signature: "public abstract void setParent (XMLReader parent)"
title: "XMLFilter.setParent"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilter.setParent

```java
public abstract void setParent (XMLReader parent)
```

Set the parent reader.

 

This method allows the application to link the filter to
 a parent reader (which may be another filter).  The argument
 may not be null.

**参数**

- **parent** — The parent reader.
