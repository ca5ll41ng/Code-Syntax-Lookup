---
id: "java-en-function-url-url"
language: "java"
lang: "en"
category: "function"
name: "URL.URL"
signature: "public URL(String protocol, String host, int port, String file) throws MalformedURLException"
title: "URL.URL"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.URL

```java
public URL(String protocol, String host, int port, String file) throws MalformedURLException
```

Creates a `URL` object from the specified
 `protocol`, `host`, `port`
 number, and `file`.

 `host` can be expressed as a host name or a literal
 IP address. If IPv6 literal address is used, it should be
 enclosed in square brackets (`'['` and `']'`), as
 specified by RFC&nbsp;2732;
 However, the literal IPv6 address format defined in RFC&nbsp;2373: IP
 Version 6 Addressing Architecture is also accepted.

 Specifying a `port` number of `-1`
 indicates that the URL should use the default port for the
 protocol.

 If this is the first URL object being created with the specified
 protocol, a stream protocol handler object, an instance of
 class `URLStreamHandler`, is created for that protocol:
 
 
- If the application has previously set up an instance of
     `URLStreamHandlerFactory` as the stream handler factory,
     then the `createURLStreamHandler` method of that instance
     is called with the protocol string as an argument to create the
     stream protocol handler.
 
- If no `URLStreamHandlerFactory` has yet been set up,
     or if the factory's `createURLStreamHandler` method
     returns `null`, then the `java.util.ServiceLoader
     ServiceLoader` mechanism is used to locate `java.net.spi.URLStreamHandlerProvider URLStreamHandlerProvider`
     implementations using the system class
     loader. The order that providers are located is implementation
     specific, and an implementation is free to cache the located
     providers. A `java.util.ServiceConfigurationError
     ServiceConfigurationError`, `Error` or `RuntimeException`
     thrown from the `createURLStreamHandler`, if encountered, will
     be propagated to the calling thread. The `createURLStreamHandler` method of each provider, if instantiated, is
     invoked, with the protocol string, until a provider returns non-null,
     or all providers have been exhausted.
 
- If the previous step fails to find a protocol handler, the
     constructor reads the value of the system property:
     {@systemProperty
         java.protocol.handler.pkgs
     }
     If the value of that system property is not `null`,
     it is interpreted as a list of packages separated by a vertical
     slash character '`|`'. The constructor tries to load
     the class named:
     `..Handler
     `
     where `` is replaced by the name of the package
     and `` is replaced by the name of the protocol.
     If this class does not exist, or if the class exists but it is not
     a subclass of `URLStreamHandler`, then the next package
     in the list is tried.
 
- If the previous step fails to find a protocol handler, then the
     constructor tries to load a built-in protocol handler.
     If this class does not exist, or if the class exists but it is not a
     subclass of `URLStreamHandler`, then a
     `MalformedURLException` is thrown.
 

 

Protocol handlers for the following protocols are guaranteed
 to exist on the search path:
 
 
- `http`
 
- `https`
 
- `file`
 
- `jar`
 

 Protocol handlers for additional protocols may also be  available.
 Some protocol handlers, for example those used for loading platform
 classes or classes on the class path, may not be overridden. The details
 of such restrictions, and when those restrictions apply (during
 initialization of the runtime for example), are implementation specific
 and therefore not specified

 

No validation of the inputs is performed by this constructor.

**参数**

- **protocol** — the name of the protocol to use.
- **host** — the name of the host.
- **port** — the port number on the host.
- **file** — the file on the host

**异常**

- **MalformedURLException** — if an unknown protocol or the port is a negative number other than -1, or if the underlying stream handler implementation rejects, or is known to reject, the `URL`

**参见**

- java.lang.System#getProperty(java.lang.String)
- java.net.URL#setURLStreamHandlerFactory( java.net.URLStreamHandlerFactory)
- java.net.URLStreamHandler
- java.net.URLStreamHandlerFactory#createURLStreamHandler( java.lang.String)

> **⚠ Deprecated** — Use `toURL` to construct an instance of URL. See the note on constructor deprecation for more details.
