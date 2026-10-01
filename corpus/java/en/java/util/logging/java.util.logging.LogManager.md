---
id: "java-en-function-java-util-logging-logmanager"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.LogManager"
title: "LogManager"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager

There is a single global LogManager object that is used to
 maintain a set of shared state about Loggers and log services.
 

 This LogManager object:
 
 
-  Manages a hierarchical namespace of Logger objects.  All
      named Loggers are stored in this namespace.
 
-  Manages a set of logging control properties.  These are
      simple key-value pairs that can be used by Handlers and
      other logging objects to configure themselves.
 

 

 The global LogManager object can be retrieved using LogManager.getLogManager().
 The LogManager object is created during class initialization and
 cannot subsequently be changed.
 

 At startup the LogManager class is located using the
 java.util.logging.manager system property.

 LogManager Configuration

 A LogManager initializes the logging configuration via
 the `readConfiguration` method during LogManager initialization.
 By default, LogManager default configuration is used.
 The logging configuration read by LogManager must be in the
 `Properties properties file` format.
 

 The LogManager defines two optional system properties that allow control over
 the initial configuration, as specified in the `readConfiguration`
 method:
 
 
- {@systemProperty java.util.logging.config.class}
 
- {@systemProperty java.util.logging.config.file}
 

 

 These two system properties may be specified on the command line to the "java"
 command, or as system property definitions passed to JNI_CreateJavaVM.
 

 The `Properties properties` for loggers and Handlers will have
 names starting with the dot-separated name for the handler or logger.

 The global logging properties may include:
 
 
- A property "handlers".  This defines a whitespace or comma separated
 list of class names for handler classes to load and register as
 handlers on the root Logger (the Logger named "").  Each class
 name must be for a Handler class which has a default constructor.
 Note that these Handlers may be created lazily, when they are
 first used.

 
- A property "&lt;logger&gt;.handlers". This defines a whitespace or
 comma separated list of class names for handlers classes to
 load and register as handlers to the specified logger. Each class
 name must be for a Handler class which has a default constructor.
 Note that these Handlers may be created lazily, when they are
 first used.

 
- A property "&lt;logger&gt;.handlers.ensureCloseOnReset". This defines a
 a boolean value. If "&lt;logger&gt;.handlers" is not defined or is empty,
 this property is ignored. Otherwise it defaults to `true`. When the
 value is `true`, the handlers associated with the logger are guaranteed
 to be closed on `reset` and shutdown. This can be turned off
 by explicitly setting "&lt;logger&gt;.handlers.ensureCloseOnReset=false" in
 the configuration. Note that turning this property off causes the risk of
 introducing a resource leak, as the logger may get garbage collected before
 `reset()` is called, thus preventing its handlers from being closed
 on `reset()`. In that case it is the responsibility of the application
 to ensure that the handlers are closed before the logger is garbage
 collected.

 
- A property "&lt;logger&gt;.useParentHandlers". This defines a boolean
 value. By default every logger calls its parent in addition to
 handling the logging message itself, this often result in messages
 being handled by the root logger as well. When setting this property
 to false a Handler needs to be configured for this logger otherwise
 no logging messages are delivered.

 
- A property "config".  This property is intended to allow
 arbitrary configuration code to be run.  The property defines a
 whitespace or comma separated list of class names.  A new instance will be
 created for each named class.  The default constructor of each class
 may execute arbitrary code to update the logging configuration, such as
 setting logger levels, adding handlers, adding filters, etc.
 

 

 Note that all classes loaded during LogManager configuration are
 first searched on the system class path before any user class path.
 That includes the LogManager class, any config classes, and any
 handler classes.
 

 Loggers are organized into a naming hierarchy based on their
 dot separated names.  Thus "a.b.c" is a child of "a.b", but
 "a.b1" and a.b2" are peers.
 

 All properties whose names end with ".level" are assumed to define
 log levels for Loggers.  Thus "foo.level" defines a log level for
 the logger called "foo" and (recursively) for any of its children
 in the naming hierarchy.  Log Levels are applied in the order they
 are defined in the properties file.  Thus level settings for child
 nodes in the tree should come after settings for their parents.
 The property name ".level" can be used to set the level for the
 root of the tree.
 

 All methods on the LogManager object are multi-thread safe.

> *Since 1.4*
