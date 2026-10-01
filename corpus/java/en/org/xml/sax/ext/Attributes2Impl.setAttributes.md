---
id: "java-en-function-attributes2impl-setattributes"
language: "java"
lang: "en"
category: "function"
name: "Attributes2Impl.setAttributes"
signature: "public void setAttributes (Attributes atts)"
title: "Attributes2Impl.setAttributes"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Attributes2Impl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes2Impl.setAttributes

```java
public void setAttributes (Attributes atts)
```

Copy an entire Attributes object.  The "specified" flags are
 assigned as true, and "declared" flags as false (except when
 an attribute's type is not CDATA),
 unless the object is an Attributes2 object.
 In that case those flag values are all copied.

**参见**

- AttributesImpl#setAttributes
