---
id: "java-en-function-uri-equals"
language: "java"
lang: "en"
category: "function"
name: "URI.equals"
signature: "public boolean equals(Object ob)"
title: "URI.equals"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.equals

```java
public boolean equals(Object ob)
```

Tests this URI for equality with another object.

 

 If the given object is not a URI then this method immediately
 returns `false`.

 

 For two URIs to be considered equal requires that either both are
 opaque or both are hierarchical.  Their schemes must either both be
 undefined or else be equal without regard to case. Their fragments
 must either both be undefined or else be equal.

 

 For two opaque URIs to be considered equal, their scheme-specific
 parts must be equal.

 

 For two hierarchical URIs to be considered equal, their paths must
 be equal and their queries must either both be undefined or else be
 equal.  Their authorities must either both be undefined, or both be
 registry-based, or both be server-based.  If their authorities are
 defined and are registry-based, then they must be equal.  If their
 authorities are defined and are server-based, then their hosts must be
 equal without regard to case, their port numbers must be equal, and
 their user-information components must be equal.

 

 When testing the user-information, path, query, fragment, authority,
 or scheme-specific parts of two URIs for equality, the raw forms rather
 than the encoded forms of these components are compared and the
 hexadecimal digits of escaped octets are compared without regard to
 case.

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **ob** — The object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is a URI that is identical to this URI
