---
id: "java-en-function-systementry-seturi"
language: "java"
lang: "en"
category: "function"
name: "SystemEntry.setURI"
signature: "public void setURI(String uri)"
title: "SystemEntry.setURI"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/SystemEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SystemEntry.setURI

```java
public void setURI(String uri)
```

Set the uri attribute. If the value of the uri attribute is relative, it
 must be made absolute with respect to the base URI currently in effect.
 The URI reference should not include a fragment identifier.

**参数**

- **uri** — The uri attribute value.
