---
id: "java-en-function-httpcookie-domainmatches"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.domainMatches"
signature: "public static boolean domainMatches(String domain, String host)"
title: "HttpCookie.domainMatches"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.domainMatches

```java
public static boolean domainMatches(String domain, String host)
```

The utility method to check whether a host name is in a domain or not.

 

 This concept is described in the cookie specification.
 To understand the concept, some terminologies need to be defined first:
 
 effective host name = hostname if host name contains dot

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or = hostname.local if not
 
 

Host A's name domain-matches host B's if:
 
   
- their host name strings string-compare equal; or
   
- A is a HDN string and has the form NB, where N is a non-empty
   name string, B has the form .B', and B' is a HDN string.  (So,
   x.y.com domain-matches .Y.com but not Y.com.)
 

 

A host isn't in a domain (RFC 2965 sec. 3.3.2) if:
 
   
- The value for the Domain attribute contains no embedded dots,
   and the value is not .local.
   
- The effective host name that derives from the request-host does
   not domain-match the Domain attribute.
   
- The request-host is a HDN (not IP address) and has the form HD,
   where D is the value of the Domain attribute, and H is a string
   that contains one or more dots.
 

 

Examples:
 
   
- A Set-Cookie2 from request-host y.x.foo.com for Domain=.foo.com
   would be rejected, because H is y.x and contains a dot.
   
- A Set-Cookie2 from request-host x.foo.com for Domain=.foo.com
   would be accepted.
   
- A Set-Cookie2 with Domain=.com or Domain=.com., will always be
   rejected, because there is no embedded dot.
   
- A Set-Cookie2 from request-host example for Domain=.local will
   be accepted, because the effective host name for the request-
   host is example.local, and example.local domain-matches .local.

**参数**

- **domain** — the domain name to check host name with
- **host** — the host name in question

**返回**

- `true` if they domain-matches; `false` if not
