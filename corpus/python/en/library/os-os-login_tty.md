---
id: "python-en-function-os-login_tty"
language: "python"
lang: "en"
category: "function"
name: "login_tty"
signature: "login_tty(fd, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.login_tty"
license: "PSF"
updated: "2026-10-01"
---

# login_tty

Prepare the tty of which fd is a file descriptor for a new login session.
Make the calling process a session leader; make the tty the controlling tty,
the stdin, the stdout, and the stderr of the calling process; close fd.

availability:: Unix, not WASI.

> *Added in 3.11*
