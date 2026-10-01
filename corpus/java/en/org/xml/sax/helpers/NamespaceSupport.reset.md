---
id: "java-en-function-namespacesupport-reset"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.reset"
signature: "public void reset ()"
title: "NamespaceSupport.reset"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.reset

```java
public void reset ()
```

Reset this Namespace support object for reuse.

 

It is necessary to invoke this method before reusing the
 Namespace support object for a new session.  If namespace
 declaration URIs are to be supported, that flag must also
 be set to a non-default value.

**参见**

- #setNamespaceDeclUris
