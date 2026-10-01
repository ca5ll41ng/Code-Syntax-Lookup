---
id: "java-en-function-java-net-http-httpheaders"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpHeaders"
title: "HttpHeaders"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpHeaders.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpHeaders

A read-only view of a set of HTTP headers.

 

 An `HttpHeaders` is not typically created directly, but rather
 returned from an `headers() HttpRequest` or an
 `headers() HttpResponse`. Specific HTTP headers can be
 set for a `HttpRequest request` through one of the request
 builder's `header(String, String) headers` methods.

 

 The methods of this class ( that accept a String header name ), and the
 `Map` returned by the `map() map` method, operate without regard
 to case when retrieving the header value(s).

 

 An HTTP header name may appear more than once in the HTTP protocol. As
 such, headers are represented as a name and a list of values. Each occurrence
 of a header value is added verbatim, to the appropriate header name list,
 without interpreting its value. In particular, `HttpHeaders` does not
 perform any splitting or joining of comma separated header value strings. The
 order of elements in a header value list is preserved when `header(String, String) building` a request. For
 responses, the order of elements in a header value list is the order in which
 they were received. The `Map` returned by the `map` method,
 however, does not provide any guarantee with regard to the ordering of its
 entries.

 

 `HttpHeaders` instances are immutable.

> *Since 11*
