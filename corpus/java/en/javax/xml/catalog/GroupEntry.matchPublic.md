---
id: "java-en-function-groupentry-matchpublic"
language: "java"
lang: "en"
category: "function"
name: "GroupEntry.matchPublic"
signature: "public String matchPublic(String publicId)"
title: "GroupEntry.matchPublic"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/GroupEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GroupEntry.matchPublic

```java
public String matchPublic(String publicId)
```

Attempt to find a matching entry in the catalog by publicId.

 

 The method searches through the public-type entries, including public,
 delegatePublic, and group entries in the current catalog in order to find
 a match.

**参数**

- **publicId** — The public identifier of the external entity being referenced.

**返回**

- a URI string if a mapping is found, or null otherwise.
