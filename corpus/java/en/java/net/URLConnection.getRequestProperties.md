---
id: "java-en-function-urlconnection-getrequestproperties"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getRequestProperties"
signature: "public Map<String,List<String>> getRequestProperties()"
title: "URLConnection.getRequestProperties"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getRequestProperties

```java
public Map<String,List<String>> getRequestProperties()
```

Returns an unmodifiable Map of general request
 properties for this connection. The Map keys
 are Strings that represent the request-header
 field names. Each Map value is a unmodifiable List
 of Strings that represents the corresponding
 field values.

 If multiple values for a given key are added via the
 `addRequestProperty` method,
 these values will be returned in the order they were
 added. This method must preserve the insertion order
 of such values.

 The default implementation of this method preserves the insertion order when
 multiple values are added for a given key. The values are returned in the order they
 were added.

**返回**

- a Map of the general request properties for this connection.

**异常**

- **IllegalStateException** — if already connected

> *Since 1.4*
