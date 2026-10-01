---
id: "java-en-function-java-time-zone-zonerulesprovider"
language: "java"
lang: "en"
category: "function"
name: "java.time.zone.ZoneRulesProvider"
title: "ZoneRulesProvider"
directive: "type"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRulesProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRulesProvider

Provider of time-zone rules to the system.
 

 This class manages the configuration of time-zone rules.
 The static methods provide the public API that can be used to manage the providers.
 The abstract methods provide the SPI that allows rules to be provided.
 

 ZoneRulesProvider may be installed in an instance of the Java Platform as
 extension classes, that is, jar files placed into any of the usual extension
 directories. Installed providers are loaded using the service-provider loading
 facility defined by the `ServiceLoader` class. A ZoneRulesProvider
 identifies itself with a provider configuration file named
 `java.time.zone.ZoneRulesProvider` in the resource directory
 `META-INF/services`. The file should contain a line that specifies the
 fully qualified concrete zonerules-provider class name.
 Providers may also be made available by adding them to the class path or by
 registering themselves via `registerProvider` method.
 

 The Java virtual machine has a default provider that provides zone rules
 for the time-zones defined by IANA Time Zone Database (TZDB). If the system
 property {@systemProperty java.time.zone.DefaultZoneRulesProvider} is defined then
 it is taken to be the fully-qualified name of a concrete ZoneRulesProvider
 class to be loaded as the default provider, using the system class loader.
 If this system property is not defined, a system-default provider will be
 loaded to serve as the default provider.
 

 Rules are looked up primarily by zone ID, as used by `ZoneId`.
 Only zone region IDs may be used, zone offset IDs are not used here.
 

 Time-zone rules are political, thus the data can change at any time.
 Each provider will provide the latest rules for each zone ID, but they
 may also provide the history of how the rules changed.

 This interface is a service provider that can be called by multiple threads.
 Implementations must be immutable and thread-safe.
 

 Providers must ensure that once a rule has been seen by the application, the
 rule must continue to be available.
 

 Providers are encouraged to implement a meaningful `toString` method.
 

 Many systems would like to update time-zone rules dynamically without stopping the JVM.
 When examined in detail, this is a complex problem.
 Providers may choose to handle dynamic updates, however the default provider does not.

> *Since 1.8*
