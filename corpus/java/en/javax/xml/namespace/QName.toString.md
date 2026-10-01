---
id: "java-en-function-qname-tostring"
language: "java"
lang: "en"
category: "function"
name: "QName.toString"
signature: "public String toString()"
title: "QName.toString"
directive: "method"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/QName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QName.toString

```java
public String toString()
```

{@return the string representation of this `QName`}
 The format is:
 
```
 `{NamespaceURI`LocalPart
 }
```

 If `NamespaceURI` is `null`, only `LocalPart` is returned.
