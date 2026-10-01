---
id: "python-en-function-socket-sock_cloexec"
language: "python"
lang: "en"
category: "function"
name: "SOCK_CLOEXEC"
directive: "data"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.SOCK_CLOEXEC"
license: "PSF"
updated: "2026-10-01"
---

# SOCK_CLOEXEC

These two constants, if defined, can be combined with the socket types and
allow you to set some flags atomically (thus avoiding possible race
conditions and the need for separate calls).

> **Seealso**
>
> [Secure File Descriptor Handling](https://udrepper.livejournal.com/20407.html)
> for a more thorough explanation.
>

availability:: Linux >= 2.6.27.

> *Added in 3.2*
