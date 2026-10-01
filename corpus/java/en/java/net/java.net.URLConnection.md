---
id: "java-en-function-java-net-urlconnection"
language: "java"
lang: "en"
category: "function"
name: "java.net.URLConnection"
title: "URLConnection"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection

The abstract class `URLConnection` is the superclass
 of all classes that represent a communications link between the
 application and a URL. Instances of this class can be used both to
 read from and to write to the resource referenced by the URL.

 

 In general, creating a connection to a URL is a multistep process:
 
 
- The connection object is created by invoking the
     `openConnection() openConnection` method on a URL.
 
- The setup parameters and general request properties are manipulated.
 
- The actual connection to the remote object is made, using the
    `connect() connect` method.
 
- The remote object becomes available. The header fields and the contents
     of the remote object can be accessed.
 

 

 The setup parameters are modified using the following methods:
 
   
- `setAllowUserInteraction`
   
- `setDoInput`
   
- `setDoOutput`
   
- `setIfModifiedSince`
   
- `setUseCaches`
 

 

 and the general request properties are modified using the method:
 
   
- `setRequestProperty`
 

 

 Default values for the `AllowUserInteraction` and
 `UseCaches` parameters can be set using the methods
 `setDefaultAllowUserInteraction` and
 `setDefaultUseCaches`.
 

 Each of the above `set` methods has a corresponding
 `get` method to retrieve the value of the parameter or
 general request property. The specific parameters and general
 request properties that are applicable are protocol specific.
 

 The following methods are used to access the header fields and
 the contents after the connection is made to the remote object:
 
   
- `getContent`
   
- `getHeaderField`
   
- `getInputStream`
   
- `getOutputStream`
 

 

 Certain header fields are accessed frequently. The methods:
 
   
- `getContentEncoding`
   
- `getContentLength`
   
- `getContentType`
   
- `getDate`
   
- `getExpiration`
   
- `getLastModified`
 

 

 provide convenient access to these fields. The
 `getContentType` method is used by the
 `getContent` method to determine the type of the remote
 object; subclasses may find it convenient to override the
 `getContentType` method.
 

 In the common case, all of the pre-connection parameters and
 general request properties can be ignored: the pre-connection
 parameters and request properties default to sensible values. For
 most clients of this interface, there are only two interesting
 methods: `getInputStream` and `getContent`,
 which are mirrored in the `URL` class by convenience methods.
 

 More information on the request properties and header fields of
 an `http` connection can be found at:
 
```

 http://www.ietf.org/rfc/rfc2616.txt
 
```

 Invoking the `close()` methods on the `InputStream` or `OutputStream` of an
 `URLConnection` after a request may free network resources associated with this
 instance, unless particular protocol specifications specify different behaviours
 for it.

      RFC 2616: Hypertext Transfer Protocol -- HTTP/1.1

**参见**

- java.net.URL#openConnection()
- java.net.URLConnection#connect()
- java.net.URLConnection#getContent()
- java.net.URLConnection#getContentEncoding()
- java.net.URLConnection#getContentLength()
- java.net.URLConnection#getContentType()
- java.net.URLConnection#getDate()
- java.net.URLConnection#getExpiration()
- java.net.URLConnection#getHeaderField(int)
- java.net.URLConnection#getHeaderField(java.lang.String)
- java.net.URLConnection#getInputStream()
- java.net.URLConnection#getLastModified()
- java.net.URLConnection#getOutputStream()
- java.net.URLConnection#setAllowUserInteraction(boolean)
- java.net.URLConnection#setDefaultUseCaches(boolean)
- java.net.URLConnection#setDoInput(boolean)
- java.net.URLConnection#setDoOutput(boolean)
- java.net.URLConnection#setIfModifiedSince(long)
- java.net.URLConnection#setRequestProperty(java.lang.String, java.lang.String)
- java.net.URLConnection#setUseCaches(boolean)

> *Since 1.0*
