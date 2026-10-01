---
id: "java-en-function-java-security-provider-service"
language: "java"
lang: "en"
category: "function"
name: "java.security.Provider.Service"
title: "Service"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Service

The description of a security service. It encapsulates the properties
 of a service and contains a factory method to obtain new implementation
 instances of this service.

 

Each service has a provider that offers the service, a type,
 an algorithm name, and the name of the class that implements the
 service. Optionally, it also includes a list of alternate algorithm
 names for this service (aliases) and attributes, which are a map of
 (name, value) `String` pairs.

 

This class defines the methods `supportsParameter
 supportsParameter` and `newInstance newInstance`
 which are used by the Java security framework when it searches for
 suitable services and instantiates them. The valid arguments to those
 methods depend on the type of service. For the service types defined
 within Java SE, see the
 `security_guide_jca
 Java Cryptography Architecture (JCA) Reference Guide`
 for the valid values.
 Note that components outside of Java SE can define additional types of
 services and their behavior.

 

Instances of this class are immutable.

> *Since 1.5*
