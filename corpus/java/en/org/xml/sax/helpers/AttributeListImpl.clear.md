---
id: "java-en-function-attributelistimpl-clear"
language: "java"
lang: "en"
category: "function"
name: "AttributeListImpl.clear"
signature: "public void clear ()"
title: "AttributeListImpl.clear"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributeListImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeListImpl.clear

```java
public void clear ()
```

Clear the attribute list.

 

SAX parser writers can use this method to reset the attribute
 list between DocumentHandler.startElement events.  Normally,
 it will make sense to reuse the same AttributeListImpl object
 rather than allocating a new one each time.

**参见**

- org.xml.sax.DocumentHandler#startElement
