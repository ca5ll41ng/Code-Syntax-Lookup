---
id: "java-en-function-uri-gethost"
language: "java"
lang: "en"
category: "function"
name: "URI.getHost"
signature: "public String getHost()"
title: "URI.getHost"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getHost

```java
public String getHost()
```

Returns the host component of this URI.

 

 The host component of a URI, if defined, will have one of the
 following forms: 

 

   
- 

 A domain name consisting of one or more labels
   separated by period characters (`'.'`), optionally followed by
   a period character.  Each label consists of alphanum characters
   as well as hyphen characters (`'-'`), though hyphens never
   occur as the first or last characters in a label. The rightmost
   label of a domain name consisting of two or more labels, begins
   with an alpha character. 

   
- 

 A dotted-quad IPv4 address of the form
   digit`+.`digit`+.`digit`+.`digit`+`,
   where no digit sequence is longer than three characters and no
   sequence has a value larger than 255. 

   
- 

 An IPv6 address enclosed in square brackets (`'['` and
   `']'`) and consisting of hexadecimal digits, colon characters
   (`':'`), and possibly an embedded IPv4 address.  The full
   syntax of IPv6 addresses is specified in RFC&nbsp;2373: IPv6
   Addressing Architecture.  

 

 The host component of a URI cannot contain escaped octets, hence this
 method does not perform any decoding.

      RFC 2373: IP Version 6 Addressing Architecture

**返回**

- The host component of this URI, or `null` if the host is undefined
