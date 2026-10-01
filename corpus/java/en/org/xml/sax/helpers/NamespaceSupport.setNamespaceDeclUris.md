---
id: "java-en-function-namespacesupport-setnamespacedecluris"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.setNamespaceDeclUris"
signature: "public void setNamespaceDeclUris (boolean value)"
title: "NamespaceSupport.setNamespaceDeclUris"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.setNamespaceDeclUris

```java
public void setNamespaceDeclUris (boolean value)
```

Controls whether namespace declaration attributes are placed
 into the `NSDECL NSDECL` namespace
 by `processName processName`.  This may only be
 changed before any contexts have been pushed.

**参数**

- **value** — a flag indicating whether namespace declaration attributes are placed into the `NSDECL NSDECL` namespace

**异常**

- **IllegalStateException** — when attempting to set this after any context has been pushed.

> *Since 1.5, SAX 2.1alpha*
