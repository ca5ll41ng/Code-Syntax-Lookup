---
id: "java-en-function-uri-uri"
language: "java"
lang: "en"
category: "function"
name: "URI.URI"
signature: "public URI(String str) throws URISyntaxException"
title: "URI.URI"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.URI

```java
public URI(String str) throws URISyntaxException
```

Constructs a URI by parsing the given string.

 

 This constructor parses the given string exactly as specified by the
 grammar in RFC&nbsp;2396,
 Appendix&nbsp;A, **except for the following deviations:** 

 

   
- 

 An empty authority component is permitted as long as it is
   followed by a non-empty path, a query component, or a fragment
   component.  This allows the parsing of URIs such as
   `"file:///foo/bar"`, which seems to be the intent of
   RFC&nbsp;2396 although the grammar does not permit it.  If the
   authority component is empty then the user-information, host, and port
   components are undefined. 

   
- 

 Empty relative paths are permitted; this seems to be the
   intent of RFC&nbsp;2396 although the grammar does not permit it.  The
   primary consequence of this deviation is that a standalone fragment
   such as `"#foo"` parses as a relative URI with an empty path
   and the given fragment, and can be usefully resolved against a base URI.

   
- 

 IPv4 addresses in host components are parsed rigorously, as
   specified by RFC&nbsp;2732: Each
   element of a dotted-quad address must contain no more than three
   decimal digits.  Each element is further constrained to have a value
   no greater than 255. 

   
-  

 Hostnames in host components that comprise only a single
   domain label are permitted to start with an alphanum
   character. This seems to be the intent of RFC&nbsp;2396
   section&nbsp;3.2.2 although the grammar does not permit it. The
   consequence of this deviation is that the authority component of a
   hierarchical URI such as `s://123`, will parse as a server-based
   authority. 

   
- 

 IPv6 addresses are permitted for the host component.  An IPv6
   address must be enclosed in square brackets (`'['` and
   `']'`) as specified by RFC&nbsp;2732.  The
   IPv6 address itself must parse according to RFC&nbsp;2373.  IPv6
   addresses are further constrained to describe no more than sixteen
   bytes of address information, a constraint implicit in RFC&nbsp;2373
   but not expressible in the grammar. 

   
- 

 Characters in the other category are permitted wherever
   RFC&nbsp;2396 permits escaped octets, that is, in the
   user-information, path, query, and fragment components, as well as in
   the authority component if the authority is registry-based.  This
   allows URIs to contain Unicode characters beyond those in the US-ASCII
   character set. 

 

      RFC 2373: IP Version 6 Addressing Architecture
      RFC 2396: Uniform Resource Identifiers (URI): Generic Syntax
      RFC 2732: Format for Literal IPv6 Addresses in URL's

**参数**

- **str** — The string to be parsed into a URI

**异常**

- **NullPointerException** — If `str` is `null`
- **URISyntaxException** — If the given string violates RFC&nbsp;2396, as augmented by the above deviations
