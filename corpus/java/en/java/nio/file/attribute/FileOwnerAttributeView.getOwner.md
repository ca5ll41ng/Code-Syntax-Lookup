---
id: "java-en-function-fileownerattributeview-getowner"
language: "java"
lang: "en"
category: "function"
name: "FileOwnerAttributeView.getOwner"
signature: "UserPrincipal getOwner() throws IOException"
title: "FileOwnerAttributeView.getOwner"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/FileOwnerAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileOwnerAttributeView.getOwner

```java
UserPrincipal getOwner() throws IOException
```

Read the file owner.

 

 It is implementation specific if the file owner can be a `GroupPrincipal group`.

**返回**

- the file owner

**异常**

- **IOException** — if an I/O error occurs
