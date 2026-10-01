---
id: "java-en-function-javax-naming-initialcontext"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.InitialContext"
title: "InitialContext"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InitialContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContext

This class is the starting context for performing naming operations.

 All naming operations are relative to a context.
 The initial context implements the Context interface and
 provides the starting point for resolution of names.

 
 When the initial context is constructed, its environment
 is initialized with properties defined in the environment parameter
 passed to the constructor, and in any
 application resource files.

 JNDI determines each property's value by merging
 the values from the following two sources, in order:
 
 
- 
 The first occurrence of the property from the constructor's
 environment parameter and system properties.
 
- 
 The application resource files (`jndi.properties`).
 

 For each property found in both of these two sources, or in
 more than one application resource file, the property's value
 is determined as follows.  If the property is
 one of the standard JNDI properties that specify a list of JNDI
 factories (see `Context`),
 all of the values are
 concatenated into a single colon-separated list.  For other
 properties, only the first value found is used.

 The initial context implementation is determined at runtime.
 The default policy uses the environment property
 "`INITIAL_CONTEXT_FACTORY java.naming.factory.initial`",
 which contains the class name of the initial context factory.
 An exception to this policy is made when resolving URL strings, as described
 below.

 When a URL string (a `String` of the form
 scheme_id:rest_of_name) is passed as a name parameter to
 any method, a URL context factory for handling that scheme is
 located and used to resolve the URL.  If no such factory is found,
 the initial context specified by
 `"java.naming.factory.initial"` is used.  Similarly, when a
 `CompositeName` object whose first component is a URL string is
 passed as a name parameter to any method, a URL context factory is
 located and used to resolve the first name component.
 See `getURLContext
 NamingManager.getURLContext` for a description of how URL
 context factories are located.

 This default policy of locating the initial context and URL context
 factories may be overridden
 by calling
 `NamingManager.setInitialContextFactoryBuilder()`.

 NoInitialContextException is thrown when an initial context cannot
 be instantiated. This exception can be thrown during any interaction
 with the InitialContext, not only when the InitialContext is constructed.
 For example, the implementation of the initial context might lazily
 retrieve the context only when actual methods are invoked on it.
 The application should not have any dependency on when the existence
 of an initial context is determined.

 When the environment property "java.naming.factory.initial" is
 non-null, the InitialContext constructor will attempt to create the
 initial context specified therein. At that time, the initial context factory
 involved might throw an exception if a problem is encountered. However,
 it is provider implementation-dependent when it verifies and indicates
 to the users of the initial context any environment property- or
 connection- related problems. It can do so lazily--delaying until
 an operation is performed on the context, or eagerly, at the time
 the context is constructed.

 An InitialContext instance is not synchronized against concurrent
 access by multiple threads. Multiple threads each manipulating a
 different InitialContext instance need not synchronize.
 Threads that need to access a single InitialContext instance
 concurrently should synchronize amongst themselves and provide the
 necessary locking.

**参见**

- Context
- NamingManager#setInitialContextFactoryBuilder NamingManager.setInitialContextFactoryBuilder

> *Since 1.3*
