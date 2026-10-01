---
id: "java-en-function-uri-resolve"
language: "java"
lang: "en"
category: "function"
name: "URI.resolve"
signature: "public URI resolve(URI uri)"
title: "URI.resolve"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.resolve

```java
public URI resolve(URI uri)
```

Resolves the given URI against this URI.

 

 If the given URI is already absolute, or if this URI is opaque, then
 the given URI is returned.

 

 If the given URI's fragment component is
 defined, its path component is empty, and its scheme, authority, and
 query components are undefined, then a URI with the given fragment but
 with all other components equal to those of this URI is returned.  This
 allows a URI representing a standalone fragment reference, such as
 `"#foo"`, to be usefully resolved against a base URI.

 

 Otherwise this method constructs a new hierarchical URI in a manner
 consistent with RFC&nbsp;2396,
 section&nbsp;5.2; that is: 

 

   
- 

 A new URI is constructed with this URI's scheme and the given
   URI's query and fragment components. 

   
- 

 If the given URI has an authority component then the new URI's
   authority and path are taken from the given URI. 

   
- 

 Otherwise the new URI's authority component is copied from
   this URI, and its path is computed as follows: 

   

     
- 

 If the given URI's path is absolute then the new URI's path
     is taken from the given URI. 

     
- 

 Otherwise the given URI's path is relative, and so the new
     URI's path is computed by resolving the path of the given URI
     against the path of this URI.  This is done by concatenating all but
     the last segment of this URI's path, if any, with the given URI's
     path and then normalizing the result as if by invoking the `normalize() normalize` method. 

   

 

 

 The result of this method is absolute if, and only if, either this
 URI is absolute or the given URI is absolute.  

      RFC 2396: Uniform Resource Identifiers (URI): Generic Syntax

**参数**

- **uri** — The URI to be resolved against this URI

**返回**

- The resulting URI

**异常**

- **NullPointerException** — If `uri` is `null`
