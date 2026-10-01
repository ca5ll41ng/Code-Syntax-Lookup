---
id: "en-php-guide-book-sem"
language: "php"
lang: "en"
category: "guide"
name: "book.sem"
title: "Semaphore, Shared Memory and IPC"
module: "sem"
source_url: "https://www.php.net/manual/en/book.sem.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Semaphore, Shared Memory and IPC

Semaphore

 {{{ preface 

 Introduction  These modules provide wrappers for the System V IPC family of functions. It includes semaphores, shared memory and inter-process messaging (IPC).    Semaphores may be used to provide exclusive access to resources on the current machine, or to limit the number of processes that may simultaneously use a resource.    This module provides also shared memory functions using System V shared memory. Shared memory may be used to provide access to global variables. Different httpd-daemons and even other programs (such as Perl, C, ...) are able to access this data to provide a global data-exchange. Remember, that shared memory is NOT safe against simultaneous access. Use semaphores for synchronization. 
| SHMMAX | max size of shared memory, normally 131072 bytes |
| --- | --- |
| SHMMIN | minimum size of shared memory, normally 1 byte |
| SHMMNI | max amount of shared memory segments on a system, normally 100 |
| SHMSEG | max amount of shared memory segments per process, normally 6 |

    The messaging functions may be used to send and receive messages to/from other processes. They provide a simple and effective means of exchanging data between processes, without the need for setting up an alternative using Unix domain sockets.   
> Only the shared memory functions and `ftok()` are available on Windows. Neither semaphores nor inter-process messaging functions are supported on that platform.

 

 }}}
