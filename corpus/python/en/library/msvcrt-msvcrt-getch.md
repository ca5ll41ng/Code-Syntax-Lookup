---
id: "python-en-function-msvcrt-getch"
language: "python"
lang: "en"
category: "function"
name: "getch"
signature: "getch()"
directive: "function"
module: "msvcrt"
source_url: "https://docs.python.org/3/library/msvcrt.html#msvcrt.getch"
license: "PSF"
updated: "2026-10-01"
---

# getch

Read a keypress and return the resulting character as a byte string.
Nothing is echoed to the console. This call will block if a keypress
is not already available, but will not wait for `Enter` to be
pressed. If the pressed key was a special function key, this will
return `'\000'` or `'\xe0'`; the next call will return the keycode.
The `Control-C` keypress cannot be read with this function.
