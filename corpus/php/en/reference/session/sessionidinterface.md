---
id: "en-php-guide-class-sessionidinterface"
language: "php"
lang: "en"
category: "guide"
name: "class.sessionidinterface"
title: "The SessionIdInterface interface"
module: "session"
source_url: "https://www.php.net/manual/en/class.sessionidinterface.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SessionIdInterface interface

SessionIdInterface

   Introduction  `SessionIdInterface` is an interface which defines optional methods for creating a custom session handler. In order to pass a custom session handler to `session_set_save_handler()` using its OOP invocation, the class can implement this interface.    Note that the callback methods of classes implementing this interface are designed to be called internally by PHP and are not meant to be called from user-space code.          SessionIdInterface
