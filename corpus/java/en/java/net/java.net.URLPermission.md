---
id: "java-en-function-java-net-urlpermission"
language: "java"
lang: "en"
category: "function"
name: "java.net.URLPermission"
title: "URLPermission"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLPermission

Represents permission to access a resource or set of resources defined by a
 given url, and for a given set of user-settable request methods
 and request headers. The name of the permission is the url string.
 The actions string is a concatenation of the request methods and headers.
 The range of method and header names is not restricted by this class.
 

**The url**

 The url string has the following expected structure.
 
```

     scheme : // authority [ / path ] [ ignored-query-or-fragment ]
 
```

 scheme will typically be http or https, but is not restricted by this
 class.
 authority is specified as:
 
```

     authority = [ userinfo @ ] hostrange [ : portrange ]
     portrange = portnumber | -portnumber | portnumber-[portnumber] | *
     hostrange = ([*.] dnsname) | IPv4address | IPv6address
 
```

 dnsname is a standard DNS host or domain name, i.e. one or more labels
 separated by ".". IPv4address is a standard literal IPv4 address and
 IPv6address is as defined in 
 RFC 2732. Literal IPv6 addresses must however, be enclosed in '[]' characters.
 The dnsname specification can be preceded by "*." which means
 the name will match any hostname whose right-most domain labels are the same as
 this name. For example, "*.example.com" matches "foo.bar.example.com"
 

 portrange is used to specify a port number, or a bounded or unbounded range of ports
 that this permission applies to. If portrange is absent or invalid, then a default
 port number is assumed if the scheme is `http` (default 80) or `https`
 (default 443). No default is assumed for other schemes. A wildcard may be specified
 which means all ports.
 

 userinfo is optional. A userinfo component if present, is ignored when
 creating a URLPermission, and has no effect on any other methods defined by this class.
 

 The path component comprises a sequence of path segments,
 separated by '/' characters. path may also be empty. The path is specified
 in a similar way to the path in `java.io.FilePermission`. There are
 three different ways as the following examples show:
 
 URL Examples
 
 Example urlDescription
 
 
 http://www.example.com/a/b/c.html
   A url which identifies a specific (single) resource
 
 http://www.example.com/a/b/*
   The '*' character refers to all resources in the same "directory" - in
       other words all resources with the same number of path components, and
       which only differ in the final path component, represented by the '*'.
   
 
 http://www.example.com/a/b/-
   The '-' character refers to all resources recursively below the
       preceding path (e.g. http://www.example.com/a/b/c/d/e.html matches this
       example).
   
 
 
 
 

 The '*' and '-' may only be specified in the final segment of a path and must be
 the only character in that segment. Any query or fragment components of the
 url are ignored when constructing URLPermissions.
 

 As a special case, urls of the form, "scheme:*" are accepted to
 mean any url of the given scheme.
 

 The scheme and authority components of the url string are handled
 without regard to case. This means `equals`,
 `hashCode` and `implies` are case insensitive with respect
 to these components. If the authority contains a literal IP address,
 then the address is normalized for comparison. The path component is case sensitive.
 

 ignored-query-or-fragment refers to any query or fragment which appears after the
 path component, and which is ignored by the constructors of this class. It is defined as:
 
```

     ignored-query-or-fragment = [ ? query ] [ # fragment ]
 
```

 where query and fragment are as defined in
 RFC2396. `getName` therefore returns
 only the scheme, authority and path components of the url string that
 the permission was created with.
 

**The actions string**

 The actions string of a URLPermission is a concatenation of the method list
 and the request headers list. These are lists of the permitted request
 methods and permitted request headers of the permission (respectively). The two lists
 are separated by a colon ':' character and elements of each list are comma separated.
 Some examples are:
 
 
- "POST,GET,DELETE"
 
- "GET:X-Foo-Request,X-Bar-Request"
 
- "POST,GET:Header1,Header2"
 

 

 The first example specifies the methods: POST, GET and DELETE, but no request headers.
 The second example specifies one request method and two headers. The third
 example specifies two request methods, and two headers.
 

 The colon separator need not be present if the request headers list is empty.
 No white-space is permitted in the actions string. The action strings supplied to
 the URLPermission constructors are case-insensitive and are normalized by converting
 method names to upper-case and header names to the form defines in RFC2616 (lower case
 with initial letter of each word capitalized). Either list can contain a wild-card '*'
 character which signifies all request methods or headers respectively.

      RFC 2296: HTTP Remote Variant Selection Algorithm -- RVSA/1.0
      RFC 2732: Format for Literal IPv6 Addresses in URL's

> *Since 1.8*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
