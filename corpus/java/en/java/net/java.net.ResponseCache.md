---
id: "java-en-function-java-net-responsecache"
language: "java"
lang: "en"
category: "function"
name: "java.net.ResponseCache"
title: "ResponseCache"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ResponseCache.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResponseCache

Represents implementations of URLConnection caches. An instance of
 such a class can be registered with the system by doing
 ResponseCache.setDefault(ResponseCache), and the system will call
 this object in order to:

    
- store resource data which has been retrieved from an
            external source into the cache
         
- try to fetch a requested resource that may have been
            stored in the cache
    

 The ResponseCache implementation decides which resources
 should be cached, and for how long they should be cached. If a
 request resource cannot be retrieved from the cache, then the
 protocol handlers will fetch the resource from its original
 location.

 The settings for URLConnection#useCaches controls whether the
 protocol is allowed to use a cached response.

 For more information on HTTP caching, see RFC&nbsp;2616: Hypertext
 Transfer Protocol -- HTTP/1.1

      RFC 2616: Hypertext Transfer Protocol -- HTTP/1.1

> *Since 1.5*
