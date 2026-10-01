---
id: "java-en-function-xmlfilterimpl-xmlfilterimpl"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.XMLFilterImpl"
signature: "public XMLFilterImpl ()"
title: "XMLFilterImpl.XMLFilterImpl"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.XMLFilterImpl

```java
public XMLFilterImpl ()
```

Construct an empty XML filter, with no parent.

 

This filter will have no parent: you must assign a parent
 before you start a parse or do any configuration with
 setFeature or setProperty, unless you use this as a pure event
 consumer rather than as an `XMLReader`.

**参见**

- org.xml.sax.XMLReader#setFeature
- org.xml.sax.XMLReader#setProperty
- #setParent
