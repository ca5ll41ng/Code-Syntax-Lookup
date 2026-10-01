---
id: "java-en-function-xmlfilterimpl-setparent"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.setParent"
signature: "public void setParent (XMLReader parent)"
title: "XMLFilterImpl.setParent"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.setParent

```java
public void setParent (XMLReader parent)
```

Set the parent reader.

 

This is the `org.xml.sax.XMLReader XMLReader` from which
 this filter will obtain its events and to which it will pass its
 configuration requests.  The parent may itself be another filter.

 

If there is no parent reader set, any attempt to parse
 or to set or get a feature or property will fail.

**参数**

- **parent** — The parent XML reader.

**参见**

- #getParent
