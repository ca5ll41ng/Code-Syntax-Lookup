---
id: "java-en-function-java-lang-instrument-instrumentation"
language: "java"
lang: "en"
category: "function"
name: "java.lang.instrument.Instrumentation"
title: "Instrumentation"
directive: "type"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation

This class provides services needed to instrument Java
 programming language code.
 Instrumentation is the addition of byte-codes to methods for the
 purpose of gathering data to be utilized by tools.
 Since the changes are purely additive, these tools do not modify
 application state or behavior.
 Examples of such benign tools include monitoring agents, profilers,
 coverage analyzers, and event loggers.

 

 There are two ways to obtain an instance of the
 Instrumentation interface:

 
   
- 

 When a JVM is launched in a way that indicates an agent
     class. In that case an Instrumentation instance
     is passed to the premain method of the agent class.
     
   
- 

 When a JVM provides a mechanism to start agents sometime
     after the JVM is launched. In that case an Instrumentation
     instance is passed to the agentmain method of the
     agent code.  
 

 

 These mechanisms are described in the
 `java.lang.instrument package specification`.
 

 Once an agent acquires an Instrumentation instance,
 the agent may call methods on the instance at any time.

 the java.instrument module.

> *Since 1.5*
