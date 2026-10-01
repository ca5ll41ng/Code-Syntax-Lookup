---
id: "java-en-function-attributelist-getname"
language: "java"
lang: "en"
category: "function"
name: "AttributeList.getName"
signature: "public abstract String getName (int i)"
title: "AttributeList.getName"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/AttributeList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeList.getName

```java
public abstract String getName (int i)
```

Return the name of an attribute in this list (by position).

 

The names must be unique: the SAX parser shall not include the
 same attribute twice.  Attributes without values (those declared
 #IMPLIED without a value specified in the start tag) will be
 omitted from the list.

 

If the attribute name has a namespace prefix, the prefix
 will still be attached.

**参数**

- **i** — The index of the attribute in the list (starting at 0).

**返回**

- The name of the indexed attribute, or null if the index is out of range.

**参见**

- #getLength
