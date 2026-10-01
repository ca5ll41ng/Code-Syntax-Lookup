---
id: "java-en-function-system-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "System.SuppressWarnings"
signature: "@SuppressWarnings(\"doclint:reference\") // cross-module links public abstract static class LoggerFinder"
title: "System.SuppressWarnings"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.SuppressWarnings

```java
@SuppressWarnings("doclint:reference") // cross-module links public abstract static class LoggerFinder
```

The `LoggerFinder` service is responsible for creating, managing,
 and configuring loggers to the underlying framework it uses.

 A logger finder is a concrete implementation of this class that has a
 zero-argument constructor and implements the abstract methods defined
 by this class.
 The loggers returned from a logger finder are capable of routing log
 messages to the logging backend this provider supports.
 A given invocation of the Java Runtime maintains a single
 system-wide LoggerFinder instance that is loaded as follows:
 
    
- First it finds any custom `LoggerFinder` provider
        using the `java.util.ServiceLoader` facility with the
        `getSystemClassLoader() system class
        loader`.
    
- If no `LoggerFinder` provider is found, the system default
        `LoggerFinder` implementation will be used.
 

 

 An application can replace the logging backend
 even when the java.logging module is present, by simply providing
 and declaring an implementation of the `LoggerFinder` service.
 

 **Default Implementation**
 

 The system default `LoggerFinder` implementation uses
 `java.util.logging` as the backend framework when the
 `java.logging` module is present.
 It returns a `System.Logger logger` instance
 that will route log messages to a `java.logging/java.util.logging.Logger
 java.util.logging.Logger`. Otherwise, if `java.logging` is not
 present, the default implementation will return a simple logger
 instance that will route log messages of `INFO` level and above to
 the console (`System.err`).
 

 **Logging Configuration**
 

 `Logger Logger` instances obtained from the
 `LoggerFinder` factory methods are not directly configurable by
 the application. Configuration is the responsibility of the underlying
 logging backend, and usually requires using APIs specific to that backend.
 

For the default `LoggerFinder` implementation
 using `java.util.logging` as its backend, refer to
 `java.logging/java.util.logging java.util.logging` for logging configuration.
 For the default `LoggerFinder` implementation returning simple loggers
 when the `java.logging` module is absent, the configuration
 is implementation dependent.
 

 Usually an application that uses a logging framework will log messages
 through a logger facade defined (or supported) by that framework.
 Applications that wish to use an external framework should log
 through the facade associated with that framework.
 

 A system class that needs to log messages will typically obtain
 a `System.Logger` instance to route messages to the logging
 framework selected by the application.
 

 Libraries and classes that only need loggers to produce log messages
 should not attempt to configure loggers by themselves, as that
 would make them dependent from a specific implementation of the
 `LoggerFinder` service.
 

 **Message Levels and Mapping to backend levels**
 

 A logger finder is responsible for mapping from a `System.Logger.Level` to a level supported by the logging backend it uses.
 
The default LoggerFinder using `java.util.logging` as the backend
 maps `System.Logger` levels to
 `java.logging/java.util.logging.Level java.util.logging` levels
 of corresponding severity - as described in `Logger.Level
 Logger.Level`.

**参见**

- java.lang.System
- java.lang.System.Logger

> *Since 9*
