---
id: "java-en-function-java-net-url"
language: "java"
lang: "en"
category: "function"
name: "java.net.URL"
title: "URL"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL

Class `URL` represents a Uniform Resource
 Locator, a pointer to a "resource" on the World
 Wide Web. A resource can be something as simple as a file or a
 directory, or it can be a reference to a more complicated object,
 such as a query to a database or to a search engine. More
 

 In general, a URL can be broken into several parts. Consider the
 following example:
 {@snippet lang="text" :
 http://www.example.com/docs/resource1.html
 }
 

 The URL above indicates that the protocol to use is
 `http` (HyperText Transfer Protocol) and that the
 information resides on a host machine named
 `www.example.com`. The information on that host
 machine is named `/docs/resource1.html`. The exact
 meaning of this name on the host machine is both protocol
 dependent and host dependent. The information normally resides in
 a file, but it could be generated on the fly. This component of
 the URL is called the path component.
 

 A URL can optionally specify a "port", which is the
 port number to which the TCP connection is made on the remote host
 machine. If the port is not specified, the default port for
 the protocol is used instead. For example, the default port for
 `http` is `80`. An alternative port could be
 specified as:
 {@snippet lang="text" :
 http://www.example.com:1080/docs/resource1.html
 }
 

 The syntax of `URL` is defined by  RFC&nbsp;2396: Uniform
 Resource Identifiers (URI): Generic Syntax, amended by RFC&nbsp;2732: Format for
 Literal IPv6 Addresses in URLs. The Literal IPv6 address format
 also supports scope_ids. The syntax and usage of scope_ids is described
 here.
 

 A URL may have appended to it a "fragment", also known
 as a "ref" or a "reference". The fragment is indicated by the sharp
 sign character "#" followed by more characters. For example,
 {@snippet lang="text" :
 http://www.example.com/index.html#chapter1
 }
 

 This fragment is not technically part of the URL. Rather, it
 indicates that after the specified resource is retrieved, the
 application is specifically interested in that part of the
 document that has the tag `chapter1` attached to it. The
 meaning of a tag is resource specific.
 

 An application can also specify a "relative URL",
 which contains only enough information to reach the resource
 relative to another URL. Relative URLs are frequently used within
 HTML pages. For example, if the contents of the URL:
 {@snippet lang="text" :
 http://www.example.com/index.html
 }
 contained within it the relative URL:
 {@snippet lang="text" :
 FAQ.html
 }
 it would be a shorthand for:
 {@snippet lang="text" :
 http://www.example.com/FAQ.html
 }
 

 The relative URL need not specify all the components of a URL. If
 the protocol, host name, or port number is missing, the value is
 inherited from the fully specified URL. The file component must be
 specified. The optional fragment is not inherited.

 Constructing instances of `URL`

 The `java.net.URL` constructors are deprecated.
 Developers are encouraged to use `URI java.net.URI` to parse
 or construct a `URL`. In cases where an instance of `java.net.URL` is needed to open a connection, `URI` can be used
 to construct or parse the URL string, possibly calling `parseServerAuthority` to validate that the authority component
 can be parsed as a server-based authority, and then calling
 `toURL` to create the `URL` instance.
 

 The URL constructors are specified to throw
 `MalformedURLException` but the actual parsing/validation
 that is performed is implementation dependent. Some parsing/validation
 may be delayed until later, when the underlying `URLStreamHandler stream handler's implementation` is called.
 Being able to construct an instance of `URL` doesn't
 provide any guarantee about its conformance to the URL
 syntax specification.
 

 The URL class does not itself encode or decode any URL components
 according to the escaping mechanism defined in RFC&nbsp;2396. It is the
 responsibility of the caller to encode any fields, which need to be
 escaped prior to calling URL, and also to decode any escaped fields,
 that are returned from URL. Furthermore, because URL has no knowledge
 of URL escaping, it does not recognise equivalence between the encoded
 or decoded form of the same URL. For example, the two URLs:
 `http://foo.com/hello%20world` and `http://foo.com/hello world/`
 would be considered not equal to each other.
 

 Note, the `java.net.URI` class does perform escaping of its
 component fields in certain circumstances. The recommended way
 to manage the encoding and decoding of URLs is to use `java.net.URI`,
 and to convert between these two classes using `toURI` and
 `toURL`.
 

 The `URLEncoder` and `URLDecoder` classes can also be
 used, but only for HTML form encoding, which is not the same
 as the encoding scheme defined in RFC&nbsp;2396.

 
 Applications working with file paths and file URIs should take great
 care to use the appropriate methods to convert between the two.
 The `of` factory method and the `File`
 constructor can be used to create `Path` or `File`
 objects from a file URI. `toUri` and `toURI`
 can be used to create a `URI` from a file path, which can be
 converted to URL using `toURL`.
 Applications should never try to `URL(String, String, String)
 construct` or `URL(String) parse` a `URL`
 from the direct string representation of a `File` or `Path`
 instance.
 

 Before constructing a `URL` from a `URI`, and depending
 on the protocol involved, applications should consider validating
 whether the URI authority `parseServerAuthority()
 can be parsed as server-based`.
 

 Some components of a URL or URI, such as userinfo, may
 be abused to construct misleading URLs or URIs. Applications
 that deal with URLs or URIs should take into account
 the recommendations advised in RFC&nbsp;3986,
 Section 7, Security Considerations.
 

 All `URL` constructors may throw `MalformedURLException`.
 In particular, if the underlying `URLStreamHandler`
 implementation rejects, or is known to reject, any of the parameters,
 `MalformedURLException` may be thrown.
 Typically, a constructor that calls the stream handler's `parseURL(URL, String, int, int) parseURL method` may
 throw `MalformedURLException` if the underlying stream handler
 implementation of that method throws `IllegalArgumentException`.
 However, which checks are performed, or not, by the stream handlers
 is implementation dependent, and callers should not rely on such
 checks for full URL validation.

      RFC 2396: Uniform Resource Identifiers (URI): Generic Syntax
      RFC 2732: Format for Literal IPv6 Addresses in URL's
      RFC 3986: Uniform Resource Identifier (URI): Generic Syntax

> *Since 1.0*
