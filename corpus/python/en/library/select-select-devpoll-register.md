---
id: "python-en-function-select-devpoll-register"
language: "python"
lang: "en"
category: "function"
name: "devpoll.register"
signature: "devpoll.register(fd[, eventmask])"
directive: "method"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.devpoll.register"
license: "PSF"
updated: "2026-10-01"
---

# devpoll.register

Register a file descriptor with the polling object.  Future calls to the
`poll` method will then check whether the file descriptor has any
pending I/O events.  *fd* can be either an integer, or an object with a
`~io.IOBase.fileno` method that returns an integer.  File objects
implement `fileno`, so they can also be used as the argument.

*eventmask* is an optional bitmask describing the type of events you want to
check for. The constants are the same as with :c`poll`
object. The default value is a combination of the constants `POLLIN`,
`POLLPRI`, and `POLLOUT`.

> **Warning**
>
> Registering a file descriptor that's already registered is not an
> error, but the result is undefined. The appropriate action is to
> unregister or modify it first. This is an important difference
> compared with :c`poll`.
>
