---
id: "java-en-function-linkexception-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "LinkException.SuppressWarnings"
signature: "@SuppressWarnings(\"serial\") // Not statically typed as Serializable protected Object linkResolvedObj"
title: "LinkException.SuppressWarnings"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkException.SuppressWarnings

```java
@SuppressWarnings("serial") // Not statically typed as Serializable protected Object linkResolvedObj
```

Contains the object to which resolution of the part of the link was successful.
 Can be null. This field is initialized by the constructors.
 You should access and manipulate this field
 through its get and set methods.

**参见**

- #getLinkResolvedObj
- #setLinkResolvedObj
