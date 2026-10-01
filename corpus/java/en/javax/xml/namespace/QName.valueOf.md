---
id: "java-en-function-qname-valueof"
language: "java"
lang: "en"
category: "function"
name: "QName.valueOf"
signature: "public static QName valueOf(String qNameAsString)"
title: "QName.valueOf"
directive: "method"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/QName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QName.valueOf

```java
public static QName valueOf(String qNameAsString)
```

{@return a `QName` from its string representation}
 The string representation must be in the format returned by `toString`:
 
```
 `{NamespaceURI`LocalPart
 }
```

 Since the `Prefix` is not represented in the string form, it will be
 set to `DEFAULT_NS_PREFIX XMLConstants.DEFAULT_NS_PREFIX`.

 `QName`. The `NamespaceURI` is not validated as a
 URI reference.
 The `LocalPart` is not validated as a
 NCName
 as specified in
 Namespaces in XML.

**参数**

- **qNameAsString** — the string representation of the `QName`

**异常**

- **IllegalArgumentException** — if `qNameAsString` is `null` or malformed

**参见**

- #toString() QName.toString()
