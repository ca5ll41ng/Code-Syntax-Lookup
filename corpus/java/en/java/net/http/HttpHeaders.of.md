---
id: "java-en-function-httpheaders-of"
language: "java"
lang: "en"
category: "function"
name: "HttpHeaders.of"
signature: "public static HttpHeaders of(Map<String,List<String>> headerMap, BiPredicate<String,String> filter)"
title: "HttpHeaders.of"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpHeaders.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpHeaders.of

```java
public static HttpHeaders of(Map<String,List<String>> headerMap, BiPredicate<String,String> filter)
```

Returns an HTTP headers from the given map. The given map's key
 represents the header name, and its value the list of string header
 values for that header name.

 

 An HTTP header name may appear more than once in the HTTP protocol.
 Such, multi-valued, headers must be represented by a single entry
 in the given map, whose entry value is a list that represents the
 multiple header string values. Leading and trailing whitespaces are
 removed from all string values retrieved from the given map and its lists
 before processing. Only headers that, after filtering, contain at least
 one, possibly empty string, value will be added to the HTTP headers.

 Per-request headers can be set through one of the `HttpRequest`
 `header(String, String) headers` methods.

**参数**

- **headerMap** — the map containing the header names and values
- **filter** — a filter that can be used to inspect each header-name-and-value pair in the given map to determine if it should, or should not, be added to the to the HTTP headers

**返回**

- an HTTP headers instance containing the given headers

**异常**

- **NullPointerException** — if any of: `headerMap`, a key or value in the given map, or an entry in the map's value list, or `filter`, is `null`
- **IllegalArgumentException** — if the given `headerMap` contains any two keys that are equal ( without regard to case ); or if the given map contains any key whose length, after trimming whitespaces, is `0`
