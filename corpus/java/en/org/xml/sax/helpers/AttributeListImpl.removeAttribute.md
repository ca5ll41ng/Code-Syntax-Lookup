---
id: "java-en-function-attributelistimpl-removeattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributeListImpl.removeAttribute"
signature: "public void removeAttribute (String name)"
title: "AttributeListImpl.removeAttribute"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributeListImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeListImpl.removeAttribute

```java
public void removeAttribute (String name)
```

Remove an attribute from the list.

 

SAX application writers can use this method to filter an
 attribute out of an AttributeList.  Note that invoking this
 method will change the length of the attribute list and
 some of the attribute's indices.

 

If the requested attribute is not in the list, this is
 a no-op.

**参数**

- **name** — The attribute name.

**参见**

- #addAttribute
