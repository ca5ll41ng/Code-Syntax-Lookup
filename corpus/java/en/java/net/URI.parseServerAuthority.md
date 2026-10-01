---
id: "java-en-function-uri-parseserverauthority"
language: "java"
lang: "en"
category: "function"
name: "URI.parseServerAuthority"
signature: "public URI parseServerAuthority() throws URISyntaxException"
title: "URI.parseServerAuthority"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.parseServerAuthority

```java
public URI parseServerAuthority() throws URISyntaxException
```

Attempts to parse this URI's authority component, if defined, into
 user-information, host, and port components.

 

 If this URI's authority component has already been recognized as
 being server-based then it will already have been parsed into
 user-information, host, and port components.  In this case, or if this
 URI has no authority component, this method simply returns this URI.

 

 Otherwise this method attempts once more to parse the authority
 component into user-information, host, and port components, and throws
 an exception describing why the authority component could not be parsed
 in that way.

 

 This method is provided because the generic URI syntax specified in
 RFC&nbsp;2396
 cannot always distinguish a malformed server-based authority from a
 legitimate registry-based authority.  It must therefore treat some
 instances of the former as instances of the latter.  The authority
 component in the URI string `"//foo:bar"`, for example, is not a
 legal server-based authority but it is legal as a registry-based
 authority.

 

 In many common situations, for example when working URIs that are
 known to be either URNs or URLs, the hierarchical URIs being used will
 always be server-based.  They therefore must either be parsed as such or
 treated as an error.  In these cases a statement such as

 
 `URI `u`= new URI(str).parseServerAuthority();`
 

 

 can be used to ensure that u always refers to a URI that, if
 it has an authority component, has a server-based authority with proper
 user-information, host, and port components.  Invoking this method also
 ensures that if the authority could not be parsed in that way then an
 appropriate diagnostic message can be issued based upon the exception
 that is thrown. 

      RFC 2396: Uniform Resource Identifiers (URI): Generic Syntax

**返回**

- A URI whose authority field has been parsed as a server-based authority

**异常**

- **URISyntaxException** — If the authority component of this URI is defined but cannot be parsed as a server-based authority according to RFC&nbsp;2396
