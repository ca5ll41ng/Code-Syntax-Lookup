---
id: "java-en-function-java-net-cookiemanager"
language: "java"
lang: "en"
category: "function"
name: "java.net.CookieManager"
title: "CookieManager"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieManager

CookieManager provides a concrete implementation of `CookieHandler`,
 which separates the storage of cookies from the policy surrounding accepting
 and rejecting cookies. A CookieManager is initialized with a `CookieStore`
 which manages storage, and a `CookiePolicy` object, which makes
 policy decisions on cookie acceptance/rejection.

 

 The HTTP cookie management in java.net package looks like:
 
```
`use
 CookieHandler <------- HttpURLConnection
       ^
       | impl
       |         use
 CookieManager -------> CookiePolicy
             |   use
             |--------> HttpCookie
             |              ^
             |              | use
             |   use        |
             |--------> CookieStore
                            ^
                            | impl
                            |
                  Internal in-memory implementation
 `
```

 
   
- 
     CookieHandler is at the core of cookie management. User can call
     CookieHandler.setDefault to set a concrete CookieHandler implementation
     to be used.
   
   
- 
     CookiePolicy.shouldAccept will be called by CookieManager.put to see whether
     or not one cookie should be accepted and put into cookie store. User can use
     any of three pre-defined CookiePolicy, namely ACCEPT_ALL, ACCEPT_NONE and
     ACCEPT_ORIGINAL_SERVER, or user can define his own CookiePolicy implementation
     and tell CookieManager to use it.
   
   
- 
     CookieStore is the place where any accepted HTTP cookie is stored in.
     If not specified when created, a CookieManager instance will use an internal
     in-memory implementation. Or user can implements one and tell CookieManager
     to use it.
   
   
- 
     Currently, only CookieStore.add(URI, HttpCookie) and CookieStore.get(URI)
     are used by CookieManager. Others are for completeness and might be needed
     by a more sophisticated CookieStore implementation, e.g. a NetscapeCookieStore.
   
 

 

 

There're various ways user can hook up his own HTTP cookie management behavior, e.g.
 
 
   
- Use CookieHandler.setDefault to set a brand new `CookieHandler` implementation
   
- Let CookieManager be the default `CookieHandler` implementation,
       but implement user's own `CookieStore` and `CookiePolicy`
       and tell default CookieManager to use them:
     
```

       // this should be done at the beginning of an HTTP session
       CookieHandler.setDefault(new CookieManager(new MyCookieStore(), new MyCookiePolicy()));
     
```

   
- Let CookieManager be the default `CookieHandler` implementation, but
       use customized `CookiePolicy`:
     
```

       // this should be done at the beginning of an HTTP session
       CookieHandler.setDefault(new CookieManager());
       // this can be done at any point of an HTTP session
       ((CookieManager)CookieHandler.getDefault()).setCookiePolicy(new MyCookiePolicy());
     
```

 

 

 

The implementation conforms to RFC 2965, section 3.3.

**参见**

- CookiePolicy

> *Since 1.6*
