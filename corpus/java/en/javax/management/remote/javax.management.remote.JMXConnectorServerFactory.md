---
id: "java-en-function-javax-management-remote-jmxconnectorserverfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.management.remote.JMXConnectorServerFactory"
title: "JMXConnectorServerFactory"
directive: "type"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerFactory

Factory to create JMX API connector servers.  There
 are no instances of this class.

 

Each connector server is created by an instance of `JMXConnectorServerProvider`.  This instance is found as follows.  Suppose
 the given `JMXServiceURL` looks like
 "service:jmx:protocol:remainder".
 Then the factory will attempt to find the appropriate `JMXConnectorServerProvider` for protocol.  Each
 occurrence of the character + or - in
 protocol is replaced by . or
 _, respectively.

 

A provider package list is searched for as follows:

 

 
- If the environment parameter to `newJMXConnectorServer(JMXServiceURL,Map,MBeanServer)
 newJMXConnectorServer` contains the key
 jmx.remote.protocol.provider.pkgs then the associated
 value is the provider package list.

 
- Otherwise, if the system property
 jmx.remote.protocol.provider.pkgs exists, then its value
 is the provider package list.

 
- Otherwise, there is no provider package list.

 

 

The provider package list is a string that is interpreted as a
 list of non-empty Java package names separated by vertical bars
 (|).  If the string is empty, then so is the provider
 package list.  If the provider package list is not a String, or if
 it contains an element that is an empty string, a `JMXProviderException` is thrown.

 

If the provider package list exists and is not empty, then for
 each element pkg of the list, the factory
 will attempt to load the class

 
 pkg.protocol.ServerProvider
 
 

If the environment parameter to `newJMXConnectorServer(JMXServiceURL, Map, MBeanServer)
 newJMXConnectorServer` contains the key
 jmx.remote.protocol.provider.class.loader then the
 associated value is the class loader to use to load the provider.
 If the associated value is not an instance of `java.lang.ClassLoader`, an `java.lang.IllegalArgumentException` is thrown.

 

If the jmx.remote.protocol.provider.class.loader
 key is not present in the environment parameter, the
 calling thread's context class loader is used.

 

If the attempt to load this class produces a `ClassNotFoundException`, the search for a handler continues with
 the next element of the list.

 

Otherwise, a problem with the provider found is signalled by a
 `JMXProviderException` whose `getCause() cause` indicates the
 underlying exception, as follows:

 

 
- if the attempt to load the class produces an exception other
 than ClassNotFoundException, that is the
 cause;

 
- if `newInstance` for the class produces an
 exception, that is the cause.

 

 

If no provider is found by the above steps, including the
 default case where there is no provider package list, then the
 implementation will use its own provider for
 protocol, or it will throw a
 MalformedURLException if there is none.  An
 implementation may choose to find providers by other means.  For
 example, it may support `#developing-service-providers service providers`,
 where the service interface is JMXConnectorServerProvider.

 

Every implementation must support the RMI connector protocol with
 the default RMI transport, specified with string rmi.
 

 

Once a provider is found, the result of the
 newJMXConnectorServer method is the result of calling
 `newJMXConnectorServer(JMXServiceURL,
 Map, MBeanServer) newJMXConnectorServer` on the provider.

 

The Map parameter passed to the
 JMXConnectorServerProvider is a new read-only
 Map that contains all the entries that were in the
 environment parameter to `newJMXConnectorServer(JMXServiceURL,Map,MBeanServer)
 JMXConnectorServerFactory.newJMXConnectorServer`, if there was one.
 Additionally, if the
 jmx.remote.protocol.provider.class.loader key is not
 present in the environment parameter, it is added to
 the new read-only Map. The associated value is the
 calling thread's context class loader.

> *Since 1.5*
