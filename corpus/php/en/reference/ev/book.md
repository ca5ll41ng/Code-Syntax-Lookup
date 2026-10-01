---
id: "en-php-guide-book-ev"
language: "php"
lang: "en"
category: "guide"
name: "book.ev"
title: "Ev"
module: "ev"
source_url: "https://www.php.net/manual/en/book.ev.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Ev

Ev

 Introduction  This extension provides interface to [libev]() library - a high performance full-featured event loop written in C.   
> This extension is not available on Windows platforms.

  *Libev* is an event loop: one registers interest in certain events (such as a file descriptor being readable or a timeout occurring), and it will manage these event sources and provide the program with events.    To do this, it must take more or less complete control over the process (or thread) by executing the event loop handler, and will then communicate events via a callback mechanism.    You register interest in certain events by registering so-called event watchers, and then hand it over to libev by starting the watcher.    For details refer to the [documentation of libev](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod).
