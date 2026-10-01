---
id: "java-en-function-uri-compareto"
language: "java"
lang: "en"
category: "function"
name: "URI.compareTo"
signature: "public int compareTo(URI that)"
title: "URI.compareTo"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.compareTo

```java
public int compareTo(URI that)
```

Compares this URI to another object, which must be a URI.

 

 When comparing corresponding components of two URIs, if one
 component is undefined but the other is defined then the first is
 considered to be less than the second.  Unless otherwise noted, string
 components are ordered according to their natural, case-sensitive
 ordering as defined by the `compareTo(String)
 String.compareTo` method.  String components that are subject to
 encoding are compared by comparing their raw forms rather than their
 encoded forms and the hexadecimal digits of escaped octets are compared
 without regard to case.

 

 The ordering of URIs is defined as follows: 

 

   
- 

 Two URIs with different schemes are ordered according the
   ordering of their schemes, without regard to case. 

   
- 

 A hierarchical URI is considered to be less than an opaque URI
   with an identical scheme. 

   
- 

 Two opaque URIs with identical schemes are ordered according
   to the ordering of their scheme-specific parts. 

   
- 

 Two opaque URIs with identical schemes and scheme-specific
   parts are ordered according to the ordering of their
   fragments. 

   
- 

 Two hierarchical URIs with identical schemes are ordered
   according to the ordering of their authority components: 

   

     
- 

 If both authority components are server-based then the URIs
     are ordered according to their user-information components; if these
     components are identical then the URIs are ordered according to the
     ordering of their hosts, without regard to case; if the hosts are
     identical then the URIs are ordered according to the ordering of
     their ports. 

     
- 

 If one or both authority components are registry-based then
     the URIs are ordered according to the ordering of their authority
     components. 

   

   
- 

 Finally, two hierarchical URIs with identical schemes and
   authority components are ordered according to the ordering of their
   paths; if their paths are identical then they are ordered according to
   the ordering of their queries; if the queries are identical then they
   are ordered according to the order of their fragments. 

 

 

 This method satisfies the general contract of the `compareTo(Object) Comparable.compareTo`
 method.

**参数**

- **that** — The object to which this URI is to be compared

**返回**

- A negative integer, zero, or a positive integer as this URI is less than, equal to, or greater than the given URI

**异常**

- **ClassCastException** — If the given object is not a URI
