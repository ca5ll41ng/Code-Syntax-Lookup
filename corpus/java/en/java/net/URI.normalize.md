---
id: "java-en-function-uri-normalize"
language: "java"
lang: "en"
category: "function"
name: "URI.normalize"
signature: "public URI normalize()"
title: "URI.normalize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.normalize

```java
public URI normalize()
```

Normalizes this URI's path.

 

 If this URI is opaque, or if its path is already in normal form,
 then this URI is returned.  Otherwise a new URI is constructed that is
 identical to this URI except that its path is computed by normalizing
 this URI's path in a manner consistent with RFC&nbsp;2396,
 section&nbsp;5.2, step&nbsp;6, sub-steps&nbsp;c through&nbsp;f; that is:
 

 

   
- 

 All `"."` segments are removed. 

   
- 

 If a `".."` segment is preceded by a non-`".."`
   segment then both of these segments are removed.  This step is
   repeated until it is no longer applicable. 

   
- 

 If the path is relative, and if its first segment contains a
   colon character (`':'`), then a `"."` segment is
   prepended.  This prevents a relative URI with a path such as
   `"a:b/c/d"` from later being re-parsed as an opaque URI with a
   scheme of `"a"` and a scheme-specific part of `"b/c/d"`.
   **(Deviation from RFC&nbsp;2396)** 

   
- 

 All redundant `"/"` (empty segments) are removed.
   **(Deviation from RFC&nbsp;2396)** 

 

 

 A normalized path will begin with one or more `".."` segments
 if there were insufficient non-`".."` segments preceding them to
 allow their removal.  A normalized path will begin with a `"."`
 segment if one was inserted by step 3 above.  Otherwise, a normalized
 path will not contain any `"."` or `".."` segments. 

      RFC 2396: Uniform Resource Identifiers (URI): Generic Syntax

**返回**

- A URI equivalent to this URI, but whose path is in normal form
